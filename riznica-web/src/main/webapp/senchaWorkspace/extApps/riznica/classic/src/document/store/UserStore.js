Ext.define("riznica.document.store.UserStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.document.model.UserStoreModel'],
  model: 'riznica.document.model.UserStoreModel',

  autoLoad:true,
  storeId:'UserStoreId',
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/user/searchAll"
    },
    extraParams: {},
    reader: {
      type: "json",
      rootProperty: "data",
      totalProperty: "total"
    },
    actionMethods: { create: "POST", read: "POST", update: "POST", destroy: "POST" },
    paramsAsJson: true,
    simpleSortMode: true,
    sortParam: "sortBy",
    directionParam: "sortDirection"
  }

});