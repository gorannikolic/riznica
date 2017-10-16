package hr.addiko.riznica.documentType

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.documentType.DocumentType
import hr.addiko.riznica.core.command.documentType.DocumentTypeCommand

@Transactional
class DocumentTypeService {

   def searchAll(SimpleSearchCommand cmd) {
      List<DocumentType> documentTypeList = DocumentType.findAll()
      [success: true, total: documentTypeList.size(), data: documentTypeList]
   }
}