package hr.addiko.riznica

import grails.core.GrailsApplication 
import grails.plugin.grich.core.util.JJsonUtils 
import grails.plugin.grich.core.web.ConstrainedSessionLocaleResolver
import hr.addiko.riznica.brand.Brand
import hr.addiko.riznica.category.ProductCategory
import hr.addiko.riznica.department.Department
import hr.addiko.riznica.documentStatus.DocumentStatus
import hr.addiko.riznica.documentType.DocumentType
import hr.addiko.riznica.product.Product
import org.apache.commons.lang.LocaleUtils
import grails.util.Environment
 
class BootStrap { 
 
  GrailsApplication grailsApplication
 
  // "jacksonObjectMapperHolder" is a bean defined and configured in grich-core. 
  JJsonUtils jacksonObjectMapperHolder 
 
  def init = { servletContext -> 
    importExtJsConfiguration() 
 
    logSystemAndConfig() 
 
    logApplicationStart()

    createDepartmentTestData()
    createDocumentTypeTestData()
    createTestUser()
    createTestData()
    createBrandTestData()
    createProductTestData()
    createDocumentStatusTestData()

  }

  private createTestUser() {

    def adminRole = new Role(authority: 'ROLE_ADMIN').save(flush: true, failOnError: true)
    def userRole = new Role(authority: 'ROLE_USER').save(flush: true, failOnError: true)
    def approverRole = new Role(authority: 'ROLE_APPROVER').save(flush: true, failOnError: true)
    def receiverRole = new Role(authority: 'ROLE_RECEIVER').save(flush: true, failOnError: true)

    switch (Environment.current) {
      case Environment.DEVELOPMENT:
        Department dep1 = Department.findById(1)
        Department dep2 = Department.findById(2)

        def admin = new User(username: "admin", password: "admin", fullName:'Goran Nikolic', department: dep1, enabled: true).save(flush: true)
        UserRole.create(admin, adminRole).save(flush: true)
        UserRole.create(admin, userRole).save(flush: true)

        def user = new User(username: "user", password: "user", fullName:'Zoran Nikolic', department: dep2, enabled: true).save(flush: true)
        UserRole.create(user, userRole).save(flush: true)

        def approver = new User(username: "approver", password: "approver", fullName: 'Janis Atedukombo',department: dep2,enabled: true).save(flush: true)
        UserRole.create(approver, approverRole).save(flush: true)

        def receiver = new User(username: "receiver", password: "receiver", fullName: 'Djuro Ostojic',department: dep1,enabled: true).save(flush: true)
        UserRole.create(receiver, receiverRole).save(flush: true)

        break
      case Environment.PRODUCTION:
        break
    }
  }

  private createTestData(){
    ProductCategory p1 = new ProductCategory(name:'Telefoni').save()
    ProductCategory p2 = new ProductCategory(name:'Televizori').save()
    ProductCategory p3 = new ProductCategory(name:'Racunari').save()
    ProductCategory p4 = new ProductCategory(name:'Tableti').save()
    ProductCategory p5 = new ProductCategory(name:'Laptopi').save()
  }

  private createBrandTestData(){
    Brand b1 = new Brand(name:'Samsung').save()
    Brand b2 = new Brand(name:'LG').save()
    Brand b3 = new Brand(name:'Htc').save()
    Brand b4 = new Brand(name:'Tesla').save()
    Brand b5 = new Brand(name:'Sony').save()
    Brand b6 = new Brand(name:'Lenovo').save()
  }

  private createProductTestData(){
    ProductCategory p1 = ProductCategory.findById(1)
    Brand b1 = Brand.findById(1)
    Product pr1 = new Product(name: "Galaxy S8", price: 999, productCategory: p1, brand: b1,quantity: 5 ).save()

    ProductCategory p2 = ProductCategory.findById(2)
    Brand b2 = Brand.findById(2)
    Product pr2 = new Product(name: "XXX 1", price: 120, productCategory: p2, brand: b2, quantity: 7).save()

    ProductCategory p3 = ProductCategory.findById(3)
    Brand b3 = Brand.findById(3)
    Product pr3 = new Product(name: "MX 007", price: 599, productCategory: p3, brand: b3, quantity: 3).save()
  }
  private createDocumentStatusTestData(){
    DocumentStatus ds1 = new DocumentStatus(status: 'Created').save()
    DocumentStatus ds2 = new DocumentStatus(status:'Inserted').save()
    DocumentStatus ds3 = new DocumentStatus(status: 'Returned to Correction').save()
    DocumentStatus ds4 = new DocumentStatus(status: 'Approved').save()
    DocumentStatus ds5 = new DocumentStatus(status: 'Taken').save()
    DocumentStatus ds6 = new DocumentStatus(status: 'Archived').save()
    DocumentStatus ds7 = new DocumentStatus(status: 'Canceled').save()
  }
  private createDepartmentTestData(){
    Department dep1 = new Department(name: 'Payment System Department').save()
    Department dep2 = new Department(name: 'Legal Entities Business Department').save()
    Department dep3 = new Department(name: 'Information Technology Department').save()
    Department dep4 = new Department(name: 'Finance and Accounting Department').save()
    Department dep5 = new Department(name: 'Legal and General Affairs Department').save()
    Department dep6 = new Department(name: 'Business Support and Tracking Department').save()
    Department dep7 = new Department(name: 'Risk Management Department').save()
  }
  private createDocumentTypeTestData(){
    DocumentType doct1 = new DocumentType(type: 'Transfers').save()
    DocumentType doct2 = new DocumentType(type: 'Repo').save()
    DocumentType doct3 = new DocumentType(type: 'Derivatives').save()
    DocumentType doct4 = new DocumentType(type: 'Ref Lines').save()
    DocumentType doct5 = new DocumentType(type: 'Other Orders').save()
  }

  private importExtJsConfiguration() { 
    // Parsing app.json of all extjs applications, and set result in extjs application specific (determined by extjs application name) grails configuration. Json parsing preserves order of 
    // declaration defined in app.json 
    // Parsing and setting configuration - start 
    def extApplicationNameList = grailsApplication.config.grich.core.jslib.sencha.extjs.applicationNames as List 
    def senchaWorkspaceLocationPart = grailsApplication.config.grich.core.jslib.sencha.workspaceLocation 
    def extjsAllAppsLocationPart = grailsApplication.config.grich.core.jslib.sencha.extjs.allAppsLocation 
 
    extApplicationNameList.each { String extApplicationName -> 
      def extjsApplicationNameLocationPart = "${grailsApplication.config.grich.core.jslib.sencha.extjs[extApplicationName].appLocation}" 
      def appJsonFullLocation = "${senchaWorkspaceLocationPart}${extjsAllAppsLocationPart}${extjsApplicationNameLocationPart}/app.json" 
 
      // Here we are using jackson object mapper configured and instantiated in grich-core. To be able to read app.json, jackson object mapper is configured to allow json comments. More important, 
      // beside we are asking here for LinkedHashMap, for storing json objects jackson also uses LinkedHashMap internally, which is necessary for preserving an order of declaration used in json file. 
      // That order is important to determine default themes when "default" flag is not specified. 
      LinkedHashMap senchaAppJson = jacksonObjectMapperHolder.jacksonObjectMapper.readValue(grailsApplication.mainContext.getResource(appJsonFullLocation).file, LinkedHashMap) 
 
      grailsApplication.config.grich.core.jslib.sencha.extjs[extApplicationName] << [appJson: senchaAppJson as ConfigObject] 
    } 
    // Parsing and setting configuration - end 
 
    // Configuring supported and default themes per extjs toolkit - start 
    extApplicationNameList.each { String extApplicationName -> 
      Map supportedThemes = [classicToolkit: [] as Set, modernToolkit: [] as Set] 
      Map defaultTheme = [classicToolkit: null, modernToolkit: null] 
      Map firstDetectedTheme = [classicToolkit: null, modernToolkit: null] 
 
      Map extApplicationBuilds = grailsApplication.config.grich.core.jslib.sencha.extjs[extApplicationName].appJson.builds 
      extApplicationBuilds.each { String key, def value -> 
        String buildName = key 
        List buildNameParts = buildName.tokenize("-") 
        String toolkit = buildNameParts[1] 
        String theme = buildNameParts[2] 
        Boolean isDefault = value.default 
 
        supportedThemes["${toolkit}Toolkit"] << theme 
        if (isDefault && !defaultTheme["${toolkit}Toolkit"]) { 
          defaultTheme["${toolkit}Toolkit"] = theme 
        } 
 
        if (!firstDetectedTheme["${toolkit}Toolkit"]) { 
          firstDetectedTheme["${toolkit}Toolkit"] = theme 
        } 
      } 
 
      ["classic", "modern"].each { String toolkit -> 
        if (!defaultTheme["${toolkit}Toolkit"]) { 
          defaultTheme["${toolkit}Toolkit"] = firstDetectedTheme["${toolkit}Toolkit"] 
        } 
      } 
 
      grailsApplication.config.grich.core.jslib.sencha.extjs[extApplicationName].supportedThemes = supportedThemes 
      grailsApplication.config.grich.core.jslib.sencha.extjs[extApplicationName].defaultTheme = defaultTheme 
    } 
    // Configuring supported and default themes per extjs toolkit - end 
 
    // Configuring locale resolver - start 
    // First listed application name is considered main extjs application name. Default locale is set based on settings of main extjs application name. First entry of app.json "locales" key is used 
    // for setting default grich application locale. 
    def mainExtjsApplicationName = extApplicationNameList[0] as String 
    def mainExtjsApplicationLocaleList = grailsApplication.config.grich.core.jslib.sencha.extjs[mainExtjsApplicationName].appJson.locales as List 
    ConstrainedSessionLocaleResolver localeResolverBean = grailsApplication.mainContext.getBean("localeResolver", ConstrainedSessionLocaleResolver) 
    localeResolverBean.defaultLocale = LocaleUtils.toLocale(mainExtjsApplicationLocaleList[0] as String) 
    localeResolverBean.defaultLocaleCode = mainExtjsApplicationLocaleList[0] as String 
    localeResolverBean.supportedLocaleCodeList = mainExtjsApplicationLocaleList 
    // Configuring locale resolver - end 
  } 
 
  private logSystemAndConfig() { 
    log.info("========================================") 
    log.info("       System properties -- start") 
    log.info("========================================") 
    StringBuilder systemPropertiesBuilder = new StringBuilder() 
    System.properties.sort().each { key, value -> 
      systemPropertiesBuilder << "[${key}: ${value}]\n" 
    } 
    StringWriter systemPropertiesWriter = new StringWriter() 
    new StringReader(systemPropertiesBuilder.toString()).transformLine(systemPropertiesWriter, { "    $it"}) 
    log.info("\n$systemPropertiesWriter") 
    log.info("========================================") 
    log.info("       System properties -- end") 
    log.info("========================================") 
 
    log.info("") 
    log.info("========================================") 
    log.info("       System environment -- start") 
    log.info("========================================") 
    StringBuilder systemEnvironmentBuilder = new StringBuilder() 
    System.getenv().sort().each { key, value -> 
      systemEnvironmentBuilder << "[${key}: ${value}]\n" 
    } 
    StringWriter systemEnvironmentWriter = new StringWriter() 
    new StringReader(systemEnvironmentBuilder.toString()).transformLine(systemEnvironmentWriter, { "    $it"}) 
    log.info("\n$systemEnvironmentWriter") 
    log.info("========================================") 
    log.info("       System environment -- end") 
    log.info("========================================") 
 
    log.info("") 
    log.info("========================================") 
    log.info("   grailsApplication.config -- start") 
    log.info("========================================") 
    def configAsConfigObject = new ConfigSlurper().parse(grailsApplication.config.toProperties()) 
    String grailsApplicationConfigString = configAsConfigObject.writeTo(new StringWriter()).toString() 
    StringWriter grailsApplicationConfigWriter = new StringWriter() 
    new StringReader(grailsApplicationConfigString).transformLine(grailsApplicationConfigWriter, { String line -> 
      String transformedLine = line.replaceAll(/\t/, "    ") 
      "    $transformedLine" 
    }) 
    log.info("\n$grailsApplicationConfigWriter") 
    log.info("========================================") 
    log.info("   grailsApplication.config -- end") 
    log.info("========================================") 
  } 
 
  @SuppressWarnings("GrMethodMayBeStatic") 
  private logApplicationStart() { 
    log.info("========================================") 
    log.info("") 
    log.info("       Application is started.") 
    log.info("") 
    log.info("========================================") 
  } 
 
  def destroy = { 
    log.info("========================================") 
    log.info("") 
    log.info("    Application is shutting down...") 
    log.info("") 
    log.info("========================================") 
  } 
} 