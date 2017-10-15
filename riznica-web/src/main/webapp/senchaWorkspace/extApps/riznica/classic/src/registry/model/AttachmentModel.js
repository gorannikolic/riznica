Ext.define("riznica.registry.model.AttachmentModel", {
  extend: "Ext.data.Model",

  fields: [
    {name: 'name', type: 'string'},
    {name: 'path', type: 'string'},
    {name: 'type', type: 'string'},
    {name: 'encoded', type: 'string'}
  ]
});