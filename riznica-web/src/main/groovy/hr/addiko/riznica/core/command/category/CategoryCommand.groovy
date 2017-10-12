package hr.addiko.riznica.core.command.category

import grails.validation.Validateable


class CategoryCommand implements Validateable{

  String name

  static constraints = {
    name nullable: false
  }

}
