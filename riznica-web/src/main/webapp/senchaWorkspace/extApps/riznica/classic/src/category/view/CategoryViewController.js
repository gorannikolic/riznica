Ext.define("riznica.category.view.CategoryViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.category-view-CategoryViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitCategory:function () {
    var me = this;
    var categoryData = me.getView().getForm().getNestedValues();

    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url:riznica.configuration.contextPath + "/api/category/create",
      method: "POST",
      maskComponents: {component: me.getView()},
      jsonData: categoryData,
      scope: me,
      async: false,
      success: function (response, option, responseTextDecoded){
        if(responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Category",
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
