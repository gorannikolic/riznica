package hr.addiko.riznica.core.command.attachment

import grails.validation.Validateable

class AttachmentCommand implements Validateable{

  String name
  String path
  String type
  String encoded

  static constraints = {

    name nullable: true
    path nullable: true
    type nullable: false
    encoded nullable: false, maxSize: 21000000
  }

}
