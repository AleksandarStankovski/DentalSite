'use strict'
app.controller('articleEditController', ['$scope', '$uibModalInstance', '$stateParams', '$timeout', 'blogService', function ($scope, $uibModalInstance, $stateParams, $timeout, blogService) {
  // Close modal dialog
  $scope.close = function () {
    $uibModalInstance.close()
  }

  // Get article
  blogService.review($stateParams.id).then(function (result) {
    $scope.article = result.data
  })

  // Edit article
  $scope.edit = function () {
    blogService.edit($scope.article).then(function (result) {
      $scope.msg = 'Вашите данни бяха изтрити успешно'
      $timeout(function () {
        $scope.close()
      }, 3000)
    }, function (error) {
      console.log(error)
      $scope.msg = 'Моля попълнете всички полета'
    })
  }

  // Remove article
  $scope.remove = function () {
    blogService.remove($scope.article._id).then(function (result) {
      $scope.msg = 'Вашите данни бяха изтрити успешно'
      $timeout(function () {
        $scope.close()
      }, 3000)
    })
  }
}])
