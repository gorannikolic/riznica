package hr.addiko.riznica.department

class Department implements Serializable {

  String name

  static constraints = {
    name nullable: true
  }

}
