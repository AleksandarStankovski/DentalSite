'use strict'
app.controller('articleCreateController', ['$scope', '$state', '$uibModalInstance', '$timeout', 'blogService', function ($scope, $state, $uibModalInstance, $timeout, blogService){
  // Close modal dialog
  $scope.close = function () {
    $uibModalInstance.close()
  }

  // Create article
  $scope.create = function () {
    blogService.create($scope.article).then(function (result) {
      $scope.msg = 'Вашите данни бяха запазени успешно'
      $timeout(function () {
        $scope.close()
      }, 3000)
    }, function (error) {
      console.log(error)
      $scope.msg = 'Моля, попълнете всички полета'
    })
  }
}])
