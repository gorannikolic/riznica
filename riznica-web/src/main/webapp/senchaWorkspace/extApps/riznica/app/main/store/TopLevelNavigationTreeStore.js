Ext.define('riznica.main.store.TopLevelNavigationTreeStore', {
  extend: 'Ext.data.TreeStore',
  storeId: 'main.store.TopLevelNavigationTreeStore',

  constructor: function(config) {
    var me = this;

    //noinspection UnknownClassInspection
    config.root = {
      expanded: true,
      children: [
        // { text: 'Category', topLevelRouteId: 'riznica.category', iconCls: 'x-fa fa-bars', leaf: true, viewConfig: { xtype: 'category-view-CategoryView' } },
        // { text: 'Brand', topLevelRouteId: 'riznica.brand', iconCls: 'x-fa fa-copyright', leaf: true, viewConfig: { xtype: 'brand-view-BrandView' } },
        // { text: 'Product', topLevelRouteId: 'riznica.product', iconCls: 'x-fa fa-television', leaf: true, viewConfig: { xtype: 'product-view-ProductView' } },
        // { text: 'Search', topLevelRouteId: 'riznica.search', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'search-view-SearchView' } },
        // { text: 'Search', topLevelRouteId: 'riznica.customerSearch', iconCls: 'x-fa fa-search', leaf: true, viewConfig: { xtype: 'search-view-CustomerSearchView' } }
      ]
    };

    me.callParent([config]);
  }
});