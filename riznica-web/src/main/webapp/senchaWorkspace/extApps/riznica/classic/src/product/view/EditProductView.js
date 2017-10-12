Ext.define("riznica.product.view.EditProductView", {
  extend: 'Ext.window.Window',
  xtype: "product-view-EditProductView",

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
    "riznica.brand.view.BrandViewController",
    "riznica.brand.view.BrandViewModel",
    "riznica.product.view.EditProductViewController",
    "riznica.product.view.EditProductViewModel",
    "riznica.product.view.ProductView",
    "riznica.product.view.ProductViewController",
    "riznica.product.view.ProductViewModel",
    "riznica.product.model.ProductCategoryStoreModel",
    "riznica.product.model.ProductBrandStoreModel",
    "riznica.product.store.ProductCategoryStore",
    "riznica.product.store.ProductBrandStore"

  ],

  controller: "product-view-EditProductViewController",
  viewModel:"product-view-EditProductViewModel",
  bodyPadding: 10,
  title: 'Edit Product',
  modal: true,
  height:330,
  width: 300,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;
    var categoryStore = Ext.create('riznica.product.store.ProductCategoryStore');
    var brandStore = Ext.create('riznica.product.store.ProductBrandStore');
    Ext.applyIf(me, {

      items:[
        {xtype:'form',itemId:"editProductId", width: 400, height: 900, resizable: false,
        items:[
          {xtype:'hiddenfield', name:'id', bind: { value: "{entity.id}"}},
          {xtype:'textfield', fieldLabel:'Name', name:'name',allowBlank: false, bind:{ value: "{entity.name}"}},
          {xtype:'numberfield',fieldLabel:'Price', name:'price', allowBlank: false,bind:{ value: "{entity.price}"}},
          {xtype:'combobox', fieldLabel: 'Category',store:categoryStore, queryMode: 'remote', valueField: 'id', displayField: 'name', name: 'category',
            listeners:{
              beforerender: function () {
                var id = this.up().up().getViewModel().data.entity.productCategory.id;
                var name = this.up().up().getViewModel().data.entity.productCategory.name;
                this.value = id;
                this.rawValue = name;
              }
            }},
          {xtype:'combobox', fieldLabel: 'Brand',store: brandStore, queryMode: 'remote', valueField: 'id', displayField: 'name',name: 'brand',
          listeners:{
            beforerender: function(){
              var id = this.up().up().getViewModel().data.entity.brand.id;
              var name = this.up().up().getViewModel().data.entity.brand.name;
              this.value = id;
              this.rawValue = name;
            }
          }},
          {
          xtype:'numberfield',name:'quantity',itemId:'numfieldId',labelAlign: 'left',fieldLabel: 'Quantity',
          bind: { value: "{entity.quantity}"}
        },
        {xtype: 'container', layout: {type: 'hbox'},
          items:[
            { xtype: 'button', text: 'Cancel',height: 50, width: 100,handler:'cancel'},
            { xtype: 'tbspacer', width: 20 },
            { xtype: 'button', padding: 'right', text: 'Submit',height: 50, width: 100,handler:'submitEditProduct'}
      ]
        }

    ]}
    ]
    }
    );

    me.callParent();
  }
});
