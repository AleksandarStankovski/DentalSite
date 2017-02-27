'use strict'
app.controller('articleController', ['$scope', '$stateParams', 'blogService', function ($scope, $stateParams, blogService) {
  blogService.review($stateParams.id).then(function (result) {
    $scope.article = result.data
  })
}])
