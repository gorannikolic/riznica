package hr.addiko.riznica.brand

class Brand implements Serializable {

  String name

  static constraints = {
    name nullable: false, blank: false
  }

}
