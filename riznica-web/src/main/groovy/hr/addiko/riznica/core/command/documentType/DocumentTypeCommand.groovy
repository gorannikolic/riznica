package hr.addiko.riznica.core.command.documentType

import grails.validation.Validateable

class DocumentTypeCommand implements Validateable{

  String name

  static constraints = {

    name nullable: true
  }

}
