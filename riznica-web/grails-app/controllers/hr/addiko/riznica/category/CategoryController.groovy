package hr.addiko.riznica.category

import grails.plugin.grich.search.command.BaseSearchCommand
import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.category.CategoryCommand

@Transactional
class CategoryController {

  CategoryService categoryService

  def create(CategoryCommand cmd){
     validateCallAndRender(cmd,{categoryService.create(cmd)})
  }

  def searchAll(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd,{categoryService.searchAll(cmd)})
  }


}
