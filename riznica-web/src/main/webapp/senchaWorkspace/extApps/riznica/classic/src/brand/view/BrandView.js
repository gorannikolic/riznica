Ext.define("riznica.brand.view.BrandView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "brand-view-BrandView",

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
    "riznica.brand.view.BrandViewModel"

  ],

  controller: "brand-view-BrandViewController",
  viewModel: "brand-view-BrandViewModel",

  autoScroll: true, bodyPadding: 10,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;

    Ext.applyIf(me, {
      formId:"brand.BrandFormId",
      items:[
        {xtype:'textfield', fieldLabel:'Name', name:'name',allowBlank: false},
        {xtype:'button',text:'Submit', iconCls:'fa fa-floppy-o',handler:'submitBrand'}
      ]

    });

    me.callParent();
  }
});
