package hr.addiko.riznica.product

import hr.addiko.riznica.brand.Brand
import hr.addiko.riznica.category.ProductCategory

class Product implements Serializable {

  String name
  Double price
  ProductCategory productCategory
  Brand brand
  Long quantity


  static constraints = {
    name nullable: false, blank: false
    price nullable: false, blank: false
    productCategory nullable: true
    brand nullable: true
    quantity nullable: true

  }

}
