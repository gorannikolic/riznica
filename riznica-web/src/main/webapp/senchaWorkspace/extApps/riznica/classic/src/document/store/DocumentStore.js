Ext.define("riznica.document.store.DocumentStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.document.model.DocumentModel'],
  model: 'riznica.document.model.DocumentModel',

  autoLoad:true,
  storeId:'DocumentStoreId',
  pageSize: 10,
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/document/searchAll"
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