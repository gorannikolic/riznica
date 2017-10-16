Ext.define("riznica.document.view.DocumentViewController", {
  extend: "Ext.app.ViewController",

  alias: "controller.document-view-DocumentViewController",

  requires: [
    "grich.core.util.AjaxSubmitHelper"
  ],

  submitDocument:function () {
    var me = this;
    var documentData = me.getView().getForm().getNestedValues();

    grich.core.util.AjaxSubmitHelper.invokeRequest({
      url:riznica.configuration.contextPath + "/api/document/create",
      method: "POST",
      maskComponents: {component: me.getView()},
      jsonData: documentData,
      scope: me,
      async: false,
      success: function (response, option, responseTextDecoded){
        if(responseTextDecoded.success === true) {
          var notificationDescriptor = {
            notification: {
              severity: grich.core.util.NotificationUtils.NOTIFICATION_SEVERITY_INFO,
              titleText: "Document",
              contentText: "You are successfully edited product quantity."
            }
          };
          grich.core.util.NotificationUtils.showSuccessNotification(notificationDescriptor);


          me.closeView();
        }
      }

    });


  }



});
