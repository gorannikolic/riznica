Ext.define('riznica.core.infrastructure.RiznicaConstants', {
  statics: {
    VIEWPORT_MIN_WIDTH: 1200,

    ROLE_ADMIN_APP: 'ROLE_ADMIN_APP',
    ROLE_ADMIN_REGISTRY: 'ROLE_ADMIN_REGISTRY',

    ORG_UNIT_SEPARATOR_FOR_STORAGE: ':::',
    ORG_UNIT_SEPARATOR_FOR_DISPLAY: '/',

    DEFAULT_NUMBER_FORMAT: '0,000.00',

    REQUEST_TIMEOUT_MILLIS: 5 * 60 * 1000,
    REQUEST_TIMEOUT_SECONDS: 5 * 60,

    EMPTY_RECORD_ID: -1
  }
});
