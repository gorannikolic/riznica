Ext.define("riznica.document.model.DocumentModel", {
  extend: "Ext.data.Model",

  fields: [
    {name: 'documentNumber', type: 'string'},
    {name: 'senderDepartment', type: 'auto'},
    {name: 'senderId', type: 'int'},
    {name: 'sender', type: 'string'},
    {name: 'approverId', type: 'int'},
    {name: 'approver', type: 'string'},
    {name: 'receiverId', type: 'int'},
    {name: 'receiver', type: 'string'},
    {name: 'remark', type: 'string'},
    {name: 'approverId', type: 'int'},
    {name: 'documentType', type: 'auto'},
    {name: 'documentStatus', type: 'auto'}
  ]
});