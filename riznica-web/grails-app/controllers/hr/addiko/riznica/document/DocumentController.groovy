package hr.addiko.riznica.document

import grails.transaction.Transactional
import hr.addiko.riznica.document.DocumentService
import hr.addiko.riznica.core.command.document.DocumentCommand


@Transactional
class DocumentController {

  DocumentService documentService


}