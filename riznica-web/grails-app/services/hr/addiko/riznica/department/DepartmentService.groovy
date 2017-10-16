package hr.addiko.riznica.department

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.brand.Brand
import hr.addiko.riznica.department.Department
import hr.addiko.riznica.core.command.department.DepartmentCommand

@Transactional
class DepartmentService {

   def searchAll(SimpleSearchCommand cmd) {
      List<Department> departmentList = Department.findAll()
      [success: true, total: departmentList.size(), data: departmentList]


   }}