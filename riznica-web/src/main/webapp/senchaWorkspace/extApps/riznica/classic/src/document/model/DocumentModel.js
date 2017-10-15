Ext.define("riznica.document.model.DocumentModel", {
  extend: "Ext.data.Model",

  fields: [
    {name: 'documentNumber', type: 'string'},
    {name: 'senderDepartment', type: 'auto'},
    {name: 'senderId', type: 'long'},
    {name: 'sender', type: 'string'},
    {name: 'approverId', type: 'long'},
    {name: 'approver', type: 'string'},
    {name: 'receiverId', type: 'long'},
    {name: 'receiver', type: 'string'},
    {name: 'remark', type: 'string'},
    {name: 'approverId', type: 'long'},
    {name: 'documentType', type: 'auto'},
    {name: 'documentStatus', type: 'auto'}
  ]
});