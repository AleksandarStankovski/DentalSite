'use strict'
app.controller('blogController', ['$scope', 'blogService', function ($scope, blogService){

  // $scope.page = 0
  // $scope.articles = []

  // Get articles
  // $scope.getArticles = function () {
  //   $scope.page++
  //   blogService.getAll($scope.page).then(function (result) {
  //     console.log(result)
  //     $scope.articles.push.apply($scope.articles, result.data)
  //   })
  // }

  $scope.page = 1
  $scope.sortDate = -1

    // Get articles
  $scope.getArticles = function (page, sortDate) {
    blogService.getAll(page, sortDate).then(function (result) {
      $scope.countPage = result.data.countPage
      $scope.articles = result.data.articles
    })
  }

  $scope.getArticles($scope.page, $scope.sortDate)

  $scope.pagination = function (type) {
    if (type === 'prev') {
      if ($scope.page > 1) {
        $scope.page--
      }
    }
    if (type === 'next') {
      if ($scope.page < $scope.countPage) {
        $scope.page++
      }
    }
    $scope.getArticles($scope.page, $scope.sortDate)
  }

  $scope.sort = function () {
    if ($scope.sortDate === -1) {
      $scope.sortDate = 1
    } else {
      $scope.sortDate = -1
    }
    $scope.getArticles($scope.page, $scope.sortDate)
  }
}])
