Ext.define("riznica.document.model.UserStoreModel", {
  extend: "Ext.data.Model",

  fields: [
    {name: 'username', type: 'string'},
    {name: 'fullName', type: 'string'},
    {name: 'department', type: 'auto'}
  ]
});