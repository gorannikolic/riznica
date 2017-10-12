package hr.addiko.riznica.core.command.searchProduct

import grails.plugin.grich.search.command.AdvancedSearchCommand
import grails.validation.Validateable

class SearchProductCommand extends AdvancedSearchCommand implements Validateable{

  String name
  Double priceFrom
  Double priceTo
  Long category
  Long brand


  static constraints = {
    name nullable: true
    priceFrom nullable: true
    priceTo nullable: true
    category nullable: true
    brand nullable: true
  }

}
