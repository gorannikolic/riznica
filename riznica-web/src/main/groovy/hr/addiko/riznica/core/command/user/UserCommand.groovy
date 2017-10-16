package hr.addiko.riznica.core.command.user

import grails.validation.Validateable
import hr.addiko.riznica.department.Department

class UserCommand implements Validateable{

  String username
  String password
  String fullName
  Department department

  static constraints = {

    username nullable: true
    password nullable: true
    fullName nullable: true
    department nullable: true
  }

}
