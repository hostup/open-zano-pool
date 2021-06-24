'use strict';

define('open-ethereum-pool/tests/app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/components/active-li.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/active-li.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/active-li.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/components/submit_threshold.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/submit_threshold.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'components/submit_threshold.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/about.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/about.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/about.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/account.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/account.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/account/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/account/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/account/index.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/account/payouts.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/account/payouts.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/account/payouts.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/account/rewards.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/account/rewards.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/account/rewards.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/application.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/blocks/block.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blocks/block.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blocks/block.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/blocks/immature.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blocks/immature.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blocks/immature.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/blocks/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blocks/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blocks/index.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/blocks/mature.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blocks/mature.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blocks/mature.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/blocks/pending.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/blocks/pending.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/blocks/pending.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/help.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/help.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/help.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/index.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/controllers/payments.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/payments.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/payments.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/formats.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | formats.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'formats.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('open-ethereum-pool/tests/helpers/destroy-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-balance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-balance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-balance.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-date-locale.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-date-locale.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-date-locale.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-ethinr.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-ethinr.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-ethinr.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-ethusd.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-ethusd.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-ethusd.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-hashrate.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-hashrate.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-hashrate.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-tx.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-tx.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-tx.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/format-txcharges.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/format-txcharges.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/format-txcharges.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'open-ethereum-pool/tests/helpers/start-app', 'open-ethereum-pool/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _openEthereumPoolTestsHelpersStartApp, _openEthereumPoolTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _openEthereumPoolTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _openEthereumPoolTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('open-ethereum-pool/tests/helpers/module-for-acceptance.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/resolver', ['exports', 'open-ethereum-pool/resolver', 'open-ethereum-pool/config/environment'], function (exports, _openEthereumPoolResolver, _openEthereumPoolConfigEnvironment) {

  var resolver = _openEthereumPoolResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _openEthereumPoolConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _openEthereumPoolConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('open-ethereum-pool/tests/helpers/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/seconds-to-ms.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/seconds-to-ms.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/seconds-to-ms.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/start-app', ['exports', 'ember', 'open-ethereum-pool/app', 'open-ethereum-pool/config/environment'], function (exports, _ember, _openEthereumPoolApp, _openEthereumPoolConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _openEthereumPoolConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _openEthereumPoolApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('open-ethereum-pool/tests/helpers/start-app.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/string-to-int.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/string-to-int.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/string-to-int.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/helpers/with-metric-prefix.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/with-metric-prefix.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/with-metric-prefix.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/models/block.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/block.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/block.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/models/payment.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/payment.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/payment.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/models/settings.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/settings.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/settings.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/resolver.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/router.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/account.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/account.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/application.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/application.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/blocks.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/blocks.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/blocks.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/index.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/miners.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/miners.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/miners.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/routes/payments.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/payments.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/payments.js should pass jshint.');
  });
});
define('open-ethereum-pool/tests/test-helper', ['exports', 'open-ethereum-pool/tests/helpers/resolver', 'ember-qunit'], function (exports, _openEthereumPoolTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_openEthereumPoolTestsHelpersResolver['default']);
});
define('open-ethereum-pool/tests/test-helper.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('open-ethereum-pool/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
