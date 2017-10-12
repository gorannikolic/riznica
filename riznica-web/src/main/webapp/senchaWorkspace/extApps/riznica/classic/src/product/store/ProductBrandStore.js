Ext.define("riznica.product.store.ProductBrandStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.product.model.ProductBrandStoreModel'],
  model: 'riznica.product.model.ProductBrandStoreModel',

  autoLoad:true,
  storeId:'ProductBrandStoreId',
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/brand/searchAll"
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