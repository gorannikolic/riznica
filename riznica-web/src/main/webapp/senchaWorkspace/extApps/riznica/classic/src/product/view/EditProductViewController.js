Ext.define("riznica.product.view.EditProductViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.product-view-EditProductViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitEditProduct:function () {
    var me = this;
    var editProductData = me.getView().down("#editProductId").getForm().getNestedValues();

    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url:riznica.configuration.contextPath + "/api/product/editProduct",
      method: "POST",
      maskComponents: {component: me.getView()},
      jsonData: editProductData,
      scope: me,
      async: false,
      success: function (response, option, responseTextDecoded){
        if(responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Edit Product",
              contentText: "You are successfully edited product quantity."
            }
          };
          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);
          me.closeView();
        }
      }

    });


  },
  cancel:function () {
    var me = this;
    me.closeView();
  }
});
