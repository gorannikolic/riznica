package hr.addiko.riznica.documentType

class DocumentType implements Serializable {

  String name

  static constraints = {
    name nullable: true
  }

}
