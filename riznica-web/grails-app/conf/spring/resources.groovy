import grails.plugin.grich.core.web.ConstrainedSessionLocaleResolver
import hr.addiko.riznica.login.presentation.RiznicaWebLogoutHandler
import org.springframework.beans.factory.config.MapFactoryBean

beans = { 
 
  localeResolver(ConstrainedSessionLocaleResolver)

  localeResolverSavingLogoutHandler(RiznicaWebLogoutHandler)

  grichFormConfigurationMapping(MapFactoryBean){
    sourceMap = [
      'category.CategoryFormId':[hr.addiko.riznica.core.command.category.CategoryCommand]
    ]
  }

}