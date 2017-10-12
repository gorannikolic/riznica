Ext.define("riznica.product.store.ProductCategoryStore", {
  extend:'Ext.data.Store',

  requires: ['riznica.product.model.ProductCategoryStoreModel'],
  model: 'riznica.product.model.ProductCategoryStoreModel',

  autoLoad:true,
  storeId:'ProductCategoryStoreId',
  proxy: {
    type: "ajax",
    api: {
      read: riznica.configuration.contextPath + "/api/category/searchAll"
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