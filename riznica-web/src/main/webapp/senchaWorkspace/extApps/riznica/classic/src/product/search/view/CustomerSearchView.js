Ext.define("riznica.search.view.CustomerSearchView", {
  extend: "riznica.search.view.SearchView",
  xtype: "search-view-CustomerSearchView",

  requires: [
    "Ext.button.Button",
    "Ext.data.Store",
    "Ext.form.FieldContainer",
    "Ext.form.FieldSet",
    "Ext.form.field.ComboBox",
    "Ext.form.field.Date",
    "Ext.form.field.Display",
    "Ext.form.field.Number",
    "Ext.form.field.Text",
    "Ext.grid.Panel",
    "Ext.layout.container.HBox",
    "grich.core.component.form.AdvancedFormPanel",
    "grich.core.component.form.ClientValidationStatus",
    "grich.core.component.form.ServerValidationStatus",
    "riznica.product.view.ProductViewController",
    "riznica.product.view.ProductViewModel",
    "riznica.product.model.ProductCategoryStoreModel",
    "riznica.product.model.ProductBrandStoreModel",
    "riznica.product.store.ProductCategoryStore",
    "riznica.product.store.ProductBrandStore",
    "riznica.product.store.ProductStore",
    "riznica.product.view.EditProductView",
    "riznica.search.view.SearchView"
  ],

  controller: "search-view-SearchViewController",
  viewModel: "search-view-SearchViewModel",

  autoScroll: true, bodyPadding: 10,


  doFocusDefaultField: function () {

  },

  initComponent: function() {

    var me = this;

    me.callParent();
  }
});
