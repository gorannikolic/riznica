package hr.addiko.riznica.brand

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.brand.BrandCommand

@Transactional
class BrandController {

  BrandService brandService

  def create (BrandCommand cmd){
     validateCallAndRender(cmd,{brandService.create(cmd)})
  }
  def searchAll(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd,{brandService.searchAll(cmd)})

}
}