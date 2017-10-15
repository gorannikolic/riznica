Ext.define("riznica.registry.store.DocumentTypeStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.registry.model.DocumentTypeModel'],
  model: 'riznica.registry.model.DocumentTypeModel',

  autoLoad:true,
  storeId:'DocumentTypeStoreId',
  pageSize: 10,
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/registry/searchAll"
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