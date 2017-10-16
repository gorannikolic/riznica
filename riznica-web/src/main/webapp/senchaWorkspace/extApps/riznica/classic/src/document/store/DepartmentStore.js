Ext.define("riznica.document.store.DepartmentStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.document.model.DepartmentStoreModel'],
  model: 'riznica.document.model.DepartmentStoreModel',

  autoLoad:true,
  storeId:'DepartmentStoreId',
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/department/searchAll"
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