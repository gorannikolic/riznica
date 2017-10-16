package hr.addiko.riznica.user

import grails.plugin.grich.core.util.HibernateUtils
import grails.plugin.grich.search.command.SimpleSearchCommand
import grails.transaction.Transactional
import hr.addiko.riznica.Role
import hr.addiko.riznica.User
import hr.addiko.riznica.UserRole


@Transactional
class UserService {

   def searchAll(SimpleSearchCommand cmd) {
      List<User> userList = User.findAll()
      [success: true, total: userList.size(), data: userList]

   }

   def searchAllApprovers(SimpleSearchCommand cmd) {
      def approverRole = Role.findByAuthority("ROLE_APPROVER")
      def userRoleList = UserRole.findAllByRole(approverRole)
      userRoleList.each {
         HibernateUtils.initialize(it)
      }
      def result = userRoleList.user
      [success: true, total: userRoleList.size(), data: result]
   }

   def searchAllReceivers(SimpleSearchCommand cmd) {
      def receiversRole = Role.findByAuthority("ROLE_RECEIVER")
      def userRoleList = UserRole.findAllByRole(receiversRole)
      userRoleList.each {
         HibernateUtils.initialize(it)
      }
      def result = userRoleList.user
      [success: true, total: userRoleList.size(), data: result]
   }
}