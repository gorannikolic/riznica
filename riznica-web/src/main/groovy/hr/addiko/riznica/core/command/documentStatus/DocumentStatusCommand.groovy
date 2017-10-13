package hr.addiko.riznica.core.command.documentStatus

import grails.validation.Validateable

class DocumentStatusCommand implements Validateable{

  String status

  static constraints = {

    status nullable: true
  }

}
