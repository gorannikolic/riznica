Ext.define("riznica.product.model.ProductModel", {
  extend: "Ext.data.Model",

  fields: [
    {name: 'name', type: 'string'},
    {name: 'price', type: 'float'},
    {name: 'productCategory', type: 'auto'},
    {name: 'brand', type: 'auto'},
    {name: 'quantity', type: 'auto'}
  ]
});