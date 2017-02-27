angular.module('modalStateServices', ['ui.router']).provider("modalState",["$stateProvider", function ($stateProvider) {
  this.$get = function () {
    return this
  }

  this.state = function (stateName, options) {
    var modalInstance
    options.backdrop = 'static'
    options.keyboard = false
    options.size = 'lg'
    options.onEnter = ['$uibModal', '$state', function ($uibModal, $state) {
      modalInstance = $uibModal.open(options)
      modalInstance.result['finally'](function () {
        modalInstance = null
        $state.go('^', {}, {reload: true})
      })
    }]

    options.onExit = function () {
      if (modalInstance) {
        modalInstance.close()
      }
    }

    $stateProvider.state(stateName, options)
  }
}])
