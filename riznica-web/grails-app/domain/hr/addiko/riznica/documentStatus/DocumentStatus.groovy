package hr.addiko.riznica.documentStatus

class DocumentStatus implements Serializable {

  String status

  static constraints = {
    status nullable: true
  }

}
