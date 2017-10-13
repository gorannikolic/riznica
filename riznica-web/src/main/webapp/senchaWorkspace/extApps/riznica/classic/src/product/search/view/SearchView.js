Ext.define("riznica.search.view.SearchView", {
  extend: "grich.core.component.form.AdvancedFormPanel",
  xtype: "search-view-SearchView",

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
    "riznica.product.view.EditProductView"


  ],

  controller: "search-view-SearchViewController",
  viewModel: "search-view-SearchViewModel",

  autoScroll: true, bodyPadding: 10,

  doFocusDefaultField: function () {

  },

  initComponent: function() {
    var me = this;

    var categoryStore = Ext.create('riznica.product.store.ProductCategoryStore');
    var brandStore = Ext.create('riznica.product.store.ProductBrandStore');
    var productStore = Ext.create('riznica.product.store.ProductStore');

    Ext.applyIf(me, {
      formId:"product.ProductFormId",
      items:[
        {xtype:'panel', title:'FILTERS',itemId:'searchId', layout: {type: 'vbox'},
        items:[
          {xtype:'textfield', fieldLabel:'Name', name:'name',allowBlank: true,margin: '10 0 10 0'},
          {xtype: 'container',layout: {type:'hbox'},defaultType: 'numberfield',fieldDefaults: {width:10, margin: '10 0 0 0'},
            items: [{
              flex: 1,
              itemSpacing: 50,
              labelAlign: 'left',
              labelWidth: 100,
              name: 'priceFrom',
              fieldLabel: 'Price from',
              allowBlank: false
            },
              {
                margin:'0 0 0 10',
                flex: 1,
                labelAlign: 'left',
                labelWidth: 50,
                name: 'priceTo',
                fieldLabel: 'Price To',
                allowBlank: false
              }]
          },
          {xtype:'combobox', fieldLabel: 'Category',store:categoryStore, queryMode: 'remote', valueField: 'id', displayField: 'name', name: 'category', margin: '10 0 10 0'},
          {xtype:'combobox', fieldLabel: 'Brand',store: brandStore, queryMode: 'remote', valueField: 'id', displayField: 'name',name: 'brand' },
          {xtype: 'container', layout: {type: 'hbox'},
            items:[
              { xtype: 'button', text: 'Reset',height: 50, width: 100, handler:'clearSearch'
              },
              { xtype: 'tbspacer', width: 20
              },
              {xtype: 'button', padding: 'right', text: 'Search',height: 50, width: 100,handler:'submitSearch' }
            ]

          }
        ]

        },
        {xtype:'grid',itemId: 'productGrid',alias:'productGridAlias' ,reference: "searchProductViewGrid", title:'All Products',store: productStore, margin: '10 0 0 0',columnLines: true,width: 1000,
          columns: [
            { text: 'Name',  dataIndex: 'name', flex: 1 },
            { text: 'Price', dataIndex: 'price', flex: 1 },
            { text: 'Category', flex: 1, dataIndex: 'productCategory',
              renderer: function (value) {
                return value.name;
              }
            },
            { text: 'Brand', flex: 1, dataIndex: 'brand',
              renderer: function (value) {
                return value.name;
              }
            },
            {text:'Quantity',flex: 1,dataIndex:'quantity' }
          ],listeners : {
          itemdblclick: function(grid, record) {
            if(this.up().xtype == "search-view-CustomerSearchView") {
              var win = Ext.create("riznica.product.view.EditProductView" );
            } else {
              var win = Ext.create("riznica.product.view.EditProductView" );
            }
            win.getViewModel().data.entity = record.data;
            win.show();
          }
        }

        }
      ]
    });

    me.callParent();
  }
});
