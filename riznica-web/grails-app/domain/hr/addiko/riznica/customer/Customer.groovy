package hr.addiko.riznica.customer

import hr.addiko.riznica.User
import hr.addiko.riznica.brand.Brand
import hr.addiko.riznica.category.ProductCategory

class Customer implements Serializable {

  String name
  String surname
  String email
  Float balance
  User user



  static constraints = {
    name nullable: false, blank: false
    surname nullable: false, blank: false
    email nullable: true
    balance nullable: true
    user nullable: true


  }

}
