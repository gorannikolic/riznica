Ext.define("riznica.product.store.ProductStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.product.model.ProductModel'],
  model: 'riznica.product.model.ProductModel',

  autoLoad:true,
  storeId:'ProductStoreId',
  pageSize: 10,
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/product/searchAll"
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