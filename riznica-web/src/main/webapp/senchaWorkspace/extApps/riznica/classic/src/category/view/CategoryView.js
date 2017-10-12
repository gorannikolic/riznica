Ext.define("riznica.category.view.CategoryView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "category-view-CategoryView",

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
    "riznica.category.view.CategoryViewController",
    "riznica.category.view.CategoryViewModel"

  ],

  controller: "category-view-CategoryViewController",
  viewModel: "category-view-CategoryViewModel",

  autoScroll: true, bodyPadding: 10,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;

    Ext.applyIf(me, {
      formId:"category.CategoryFormId",
      items:[
        {xtype:'textfield', fieldLabel:'Name', name:'name',allowBlank: false},
        {xtype:'button',text:'Submit', iconCls:'fa fa-floppy-o',handler:'submitCategory'}
      ]

    });

    me.callParent();
  }
});
