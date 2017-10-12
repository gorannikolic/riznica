package hr.addiko.riznica.core.command.brand

import grails.validation.Validateable
import hr.addiko.riznica.brand.Brand


class BrandCommand implements Validateable{

  String name

  static constraints = {

    name nullable: false, blank: false
  }

}
