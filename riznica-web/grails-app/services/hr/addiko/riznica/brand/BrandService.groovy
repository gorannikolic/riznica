package hr.addiko.riznica.brand

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.brand.BrandCommand

@Transactional
class BrandService {

    def create (BrandCommand cmd){
        Brand brand = new Brand()
        brand.name = cmd.name
        brand.save()
        [success:true]
    }
    def searchAll(SimpleSearchCommand cmd) {
        List<Brand> brandList = Brand.findAll()
        [success: true, total: brandList.size(), data: brandList]
}}