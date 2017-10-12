package hr.addiko.riznica.product

import grails.transaction.Transactional
import hr.addiko.riznica.core.command.category.CategoryCommand
import hr.addiko.riznica.core.command.product.ProductCommand
import hr.addiko.riznica.core.command.searchProduct.SearchProductCommand


@Transactional
class ProductController {

  ProductService productService

  def create (ProductCommand cmd){
     validateCallAndRender(cmd,{productService.create(cmd)})
  }

  def searchAll (SearchProductCommand cmd){
    validateCallAndRender(cmd,{productService.searchAll(cmd)})
  }
  def editProduct (ProductCommand cmd){
    validateCallAndRender(cmd,{productService.editProduct(cmd)})
  }

  }

