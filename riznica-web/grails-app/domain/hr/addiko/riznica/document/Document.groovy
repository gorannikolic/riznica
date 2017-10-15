package hr.addiko.riznica.document

import hr.addiko.riznica.attachment.Attachment
import hr.addiko.riznica.department.Department
import hr.addiko.riznica.documentStatus.DocumentStatus
import hr.addiko.riznica.documentType.DocumentType

class Document implements Serializable {

  String documentNumber
  Department senderDepartment
  Long senderId
  String sender
  Long approverId
  String approver
  Long receiverId
  String receiver
  String remark
  DocumentType documentType
  DocumentStatus documentStatus

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
    documentType nullable: true
    documentStatus nullable: true
  }

}
