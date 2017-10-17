Ext.define("riznica.document.view.DocumentView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "document-view-DocumentView",

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
    "riznica.document.view.DocumentViewController",
    "riznica.document.view.DocumentViewModel",
    "riznica.document.store.UserStore",
    "riznica.document.model.UserStoreModel",
    "riznica.document.model.DepartmentStoreModel",
    "riznica.document.store.DepartmentStore",
    "riznica.document.model.DocumentTypeStoreModel",
    "riznica.document.store.DocumentTypeStore"
  ],

  controller: "document-view-DocumentViewController",
  viewModel: "document-view-DocumentViewModel",

  autoScroll: true, bodyPadding: 10,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;

    var departmentStore = Ext.create('riznica.document.store.DepartmentStore');
    var approverStore = Ext.create('riznica.document.store.UserStore',{
      proxy: {
        api: {
          read: riznica.configuration.contextPath + "/api/user/searchAllApprovers"
        }
      }
    });
    var receiverStore = Ext.create('riznica.document.store.UserStore',{
      proxy: {
        api: {
          read: riznica.configuration.contextPath + "/api/user/searchAllReceivers"
        }
      }
    });
    var documentTypeStore = Ext.create('riznica.document.store.DocumentTypeStore');

    Ext.applyIf(me, {
      formId:"document.DocumentFormId",
      defaults:{width:'33%'},
      items:[
        {xtype:'textfield', fieldLabel:'Document Status', name:'documentStatus'},
        {xtype:'textfield', fieldLabel:'Document Number', name:'documentNumber'},
        {xtype:'combobox', fieldLabel: 'Document Type',store: documentTypeStore, queryMode: 'remote', valueField: 'id', displayField: 'type', name: 'documentType' },
        {xtype:'combobox', fieldLabel: 'Department',store: departmentStore, queryMode: 'remote', valueField: 'id', displayField: 'name', name: 'department' },
        {xtype:'textfield', fieldLabel:'Sender', name:'sender'},
        {xtype:'combobox', fieldLabel: 'Approver',store: approverStore, queryMode: 'remote', valueField: 'id', displayField: 'fullName',name: 'approver' },
        {xtype:'combobox', fieldLabel: 'Receiver',store: receiverStore, queryMode: 'remote', valueField: 'id', displayField: 'fullName',name: 'approver' },
        {xtype:'textarea', grow: true, fieldLabel:'Remark', name: 'remark'}

      ]
    });

    me.callParent();
  }
});
