package proxy

import (
	"log"
	"math/big"
	"strconv"
	"sync"

	"github.com/ethereum/go-ethereum/common"

	"github.com/hostup/open-zano-pool/rpc"
)

const maxBacklog = 3

type heightDiffPair struct {
	diff   *big.Int
	height uint64
}

type BlockTemplate struct {
	sync.RWMutex
	Header               string
	Seed                 string
	Target               string
	Difficulty           *big.Int
	Height               uint64
	GetLatestBlockCache *rpc.GetBlockReplyHeaderPart
	nonces               map[string]bool
	headers              map[string]heightDiffPair
}

type Block struct {
	difficulty  *big.Int
	hashNoNonce common.Hash
	nonce       uint64
	mixDigest   common.Hash
	number      uint64
}

func (b Block) Difficulty() *big.Int     { return b.difficulty }
func (b Block) HashNoNonce() common.Hash { return b.hashNoNonce }
func (b Block) Nonce() uint64            { return b.nonce }
func (b Block) MixDigest() common.Hash   { return b.mixDigest }
func (b Block) NumberU64() uint64        { return b.number }


func (s *ProxyServer) fetchBlockTemplate() {
	r := s.rpc()
	t := s.currentBlockTemplate()
	replyLastBlock, err := r.GetLatestBlock()
	if err != nil {
		log.Printf("Error while refreshing block template on %s: %s", r.Name, err)
		return
	}
	// No need to update, we have fresh job
	if t != nil && t.Header == replyLastBlock.BlockHeader.Hash {
		return
	}
  reply, err := r.GetWork(s.config.Proxy.Address)
  if err != nil {
    log.Printf("Error while refreshing block template on %s: %s", r.Name, err)
    return
  }

  log.Printf("lastblock.Hash (%v) getwork.PrevHash (%v)", replyLastBlock.BlockHeader.Hash, reply.PrevHash)

  diff, _ := new(big.Int).SetString(reply.Difficulty, 10)
	height := reply.Height

	pendingReply := &rpc.GetBlockReplyHeaderPart{
		Difficulty: strconv.FormatInt(s.config.Proxy.Difficulty, 10),
		Number:     reply.Height,
	}

	newTemplate := BlockTemplate{
		Header:               reply.PrevHash,
		Seed:                 reply.Seed,
		Target:               reply.Blob,
		Height:               height,
		Difficulty:           diff,
		GetLatestBlockCache: pendingReply,
		headers:              make(map[string]heightDiffPair),
	}
	// Copy job backlog and add current one
	newTemplate.headers[reply.PrevHash] = heightDiffPair{
		diff:   diff,
		height: height,
	}
	if t != nil {
		for k, v := range t.headers {
			if v.height > height-maxBacklog {
				newTemplate.headers[k] = v
			}
		}
	}
	s.blockTemplate.Store(&newTemplate)
	log.Printf("New block to mine on %s at height %d / %s", r.Name, height, reply.Blob[28:38], diff)

	// Stratum
	if s.config.Proxy.Stratum.Enabled {
		go s.broadcastNewJobs()
	}

	if s.config.Proxy.StratumSSL.Enabled {
		go s.broadcastSSLNewJobs()
	}

	if s.config.Proxy.StratumNiceHash.Enabled {
		go s.broadcastNewJobsNH()
	}
}
