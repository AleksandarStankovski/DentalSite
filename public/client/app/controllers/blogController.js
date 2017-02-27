'use strict'
app.controller('blogController', ['$scope', 'blogService', function ($scope, blogService) {
  // Get articles
  blogService.getAll().then(function (result) {
    $scope.articles = result.data
  })
}])
