Ext.define("riznica.brand.view.BrandViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.brand-view-BrandViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitBrand:function () {
    var me = this;
    var brandData = me.getView().getForm().getNestedValues();

    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url:riznica.configuration.contextPath + "/api/brand/create",
      method: "POST",
      maskComponents: {component: me.getView()},
      jsonData: brandData,
      scope: me,
      async: false,
      success: function (response, option, responseTextDecoded){
        if(responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Brand",
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
