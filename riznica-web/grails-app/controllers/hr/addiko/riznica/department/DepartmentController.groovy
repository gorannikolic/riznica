package hr.addiko.riznica.department

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.core.command.department.DepartmentCommand
import hr.addiko.riznica.department.DepartmentService

@Transactional
class DepartmentController {

 DepartmentService departmentService

 def searchAll(SimpleSearchCommand cmd) {
  validateCallAndRender(cmd,{departmentService.searchAll(cmd)})

 }

 }
