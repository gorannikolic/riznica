package hr.addiko.riznica.core.command.document

import grails.validation.Validateable
import hr.addiko.riznica.attachment.Attachment
import hr.addiko.riznica.department.Department

class DocumentCommand implements Validateable{

  String documentNumber
  Department senderDepartment
  Long senderId
  String sender
  Long approverId
  String approver
  Long receiverId
  String receiver
  String remark
  static hasMany = [ attachments : Attachment ]

  static constraints = {

    documentNumber nullable: true
    senderDepartment nullable: true
    senderId nullable: true
    sender nullable: true
    approverId nullable: true
    approver nullable: true
    receiverId nullable: true
    receiver nullable: true
    remark nullable: true
    hasMany nullable: true
  }

}
