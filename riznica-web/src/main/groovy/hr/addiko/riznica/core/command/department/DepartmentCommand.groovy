package hr.addiko.riznica.core.command.department

import grails.validation.Validateable

class DepartmentCommand implements Validateable{

  String name

  static constraints = {

    name nullable: true
  }

}
