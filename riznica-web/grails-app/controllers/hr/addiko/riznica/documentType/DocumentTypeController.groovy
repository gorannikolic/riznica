package hr.addiko.riznica.documentType

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.documentType.DocumentTypeService
import hr.addiko.riznica.core.command.documentType.DocumentTypeCommand

@Transactional
class DocumentTypeController {

  DocumentTypeService documentTypeService

  def searchAll(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd,{documentTypeService.searchAll(cmd)})


}}