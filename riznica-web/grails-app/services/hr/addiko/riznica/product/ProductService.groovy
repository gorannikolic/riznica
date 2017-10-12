package hr.addiko.riznica.product

import grails.plugin.grich.search.service.AdvancedSearchService
import grails.transaction.Transactional
import hr.addiko.riznica.brand.Brand
import hr.addiko.riznica.category.ProductCategory
import hr.addiko.riznica.core.command.product.ProductCommand
import hr.addiko.riznica.core.command.searchProduct.SearchProductCommand

@Transactional
class ProductService {

    def create (ProductCommand cmd){
        Product product = new Product()
        product.name = cmd.name
        product.price = cmd.price
        product.productCategory = ProductCategory.findById(cmd.category)
        product.brand = Brand.findById(cmd.brand)
        product.quantity = 0
        product.save()
        [success:true]
    }

    def searchAll(SearchProductCommand cmd) {

        cmd.limit = 0
        cmd.start = 0

        def result = Product.withCriteria {
            createAlias('productCategory', 'productCategory')
            createAlias('brand', 'brand')
            if(cmd.name) {
                eq("name", cmd.name)
            }
            if(cmd.priceFrom) {
                ge("price", cmd.priceFrom)
            }
            if(cmd.priceTo) {
                le("price", cmd.priceTo)
            }
            if(cmd.category) {
                eq("productCategory.id", cmd.category)
            }
            if(cmd.brand) {
                eq("brand.id", cmd.brand)
            }
        }

        [success: true, total: result.size(), data:result]
    }

    def editProduct(ProductCommand cmd) {
        Product product = Product.findById(cmd.id)
        product.name = cmd.name
        product.price = cmd.price
        product.quantity = cmd.quantity
        product.productCategory = ProductCategory.findById(cmd.category)
        product.brand = Brand.findById(cmd.brand)
        product.save(flush: true, failOnError: true)
        [success: true]
    }

}
