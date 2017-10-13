package hr.addiko.riznica.attachment

class Attachment implements Serializable {

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
