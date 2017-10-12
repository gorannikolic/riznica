Ext.define("riznica.product.view.ProductView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "product-view-ProductView",

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
    "riznica.product.store.ProductBrandStore"


  ],

  controller: "product-view-ProductViewController",
  viewModel: "product-view-ProductViewModel",

  autoScroll: true, bodyPadding: 10,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;

    var categoryStore = Ext.create('riznica.product.store.ProductCategoryStore');
    var brandStore = Ext.create('riznica.product.store.ProductBrandStore');

    Ext.applyIf(me, {
      formId:"product.ProductFormId",
      items:[
        {xtype:'textfield', fieldLabel:'Name', name:'name',allowBlank: false},
        {xtype:'numberfield',fieldLabel:'Price', name:'price', allowBlank: false},
        {xtype:'combobox', fieldLabel: 'Category',store:categoryStore, queryMode: 'remote', valueField: 'id', displayField: 'name', name: 'category' },
        {xtype:'combobox', fieldLabel: 'Brand',store: brandStore, queryMode: 'remote', valueField: 'id', displayField: 'name',name: 'brand' },
        {xtype:'button',text:'Submit', iconCls:'fa fa-floppy-o',handler:'submitProduct'}
      ]
    });

    me.callParent();
  }
});
