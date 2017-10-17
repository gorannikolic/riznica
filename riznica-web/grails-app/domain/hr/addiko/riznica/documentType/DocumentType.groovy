package hr.addiko.riznica.documentType

class DocumentType implements Serializable {

  String type

  static constraints = {
    type nullable: true
  }

}
