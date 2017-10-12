Ext.define("riznica.search.view.SearchViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.search-view-SearchViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitSearch:function () {
    var me = this;

    var productData = me.getView().getForm().getNestedValues();

    var productStore = this.getView().down("#productGrid").getStore();
    productStore.getProxy().extraParams = {};

    Ext.Object.each(productData, function (key, value) {
      if (key.toLowerCase().indexOf("internaltype") >= 0) {
        productStore.getProxy().setExtraParam(key, value.id);
      }
      else {
        productStore.getProxy().setExtraParam(key, value);
      }
    });

    productStore.loadPage(1);

  },
  clearSearch:function () {
    var me = this;
    var productData = me.getView().getForm();
    productData.reset(true);

  }
});
