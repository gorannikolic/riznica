package hr.addiko.riznica.core.command.product

import grails.validation.Validateable

class ProductCommand implements Validateable{

  Long id
  String name
  Double price
  Long category
  Long brand
  Float quantity

  static constraints = {
    id nullable: true
    name nullable: true
    price nullable: true
    category nullable: true
    brand nullable: true
    quantity nullable: true

  }

}
