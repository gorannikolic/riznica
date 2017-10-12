package hr.addiko.riznica.category

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.category.CategoryCommand

@Transactional
class CategoryService {

    def create(CategoryCommand cmd){
        ProductCategory category = new ProductCategory()
        category.name = cmd.name
        category.save()
        [success:true]
    }

    def searchAll(SimpleSearchCommand cmd) {
        List<ProductCategory> categoryList = ProductCategory.findAll()
        [success: true, total: categoryList.size(), data: categoryList]
    }

}
