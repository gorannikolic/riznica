Ext.define("riznica.document.store.DocumentTypeStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.document.model.DocumentTypeStoreModel'],
  model: 'riznica.document.model.DocumentTypeStoreModel',

  autoLoad:true,
  storeId:'DocumentTypeStoreId',
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/documentType/searchAll"
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