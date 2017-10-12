Ext.define("riznica.product.view.ProductViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.product-view-ProductViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitProduct:function () {
    var me = this;
    var productData = me.getView().getForm().getNestedValues();

    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url:riznica.configuration.contextPath + "/api/product/create",
      method: "POST",
      maskComponents: {component: me.getView()},
      jsonData: productData,
      scope: me,
      async: false,
      success: function (response, option, responseTextDecoded){
        if(responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Product",
              contentText: "Uspjesno ste unijeli"
            }
          };
          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);


          me.closeView();
        }
      }

    });


  }



});
