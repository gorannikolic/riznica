package hr.addiko.riznica.user

import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import org.grails.datastore.mapping.model.types.Simple

@Transactional
class UserController {

  UserService userService

  def searchAll(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd, { userService.searchAll(cmd) })

  }
  def searchAllApprovers(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd, { userService.searchAllApprovers(cmd) })
  }
  def searchAllReceivers(SimpleSearchCommand cmd) {
    validateCallAndRender(cmd, { userService.searchAllReceivers(cmd) })
  }

}
