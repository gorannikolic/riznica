package hr.addiko.riznica.category

class ProductCategory implements Serializable {

  String name

  static constraints = {
    name nullable: false, blank: false
  }

}
