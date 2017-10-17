package hr.addiko.riznica.core.command.documentType

import grails.validation.Validateable

class DocumentTypeCommand implements Validateable{

  String type

  static constraints = {

    type nullable: true
  }

}
