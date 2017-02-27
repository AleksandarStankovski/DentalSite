'use strict'

var app = angular.module('dentalsite', ['ui.router'])

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/app/views/home/home.html',
      controller: 'homeController'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'client/app/views/blog/blog.html',
      controller: 'blogController'
    })
    .state('article', {
      url: '/article/:id',
      templateUrl: 'client/app/views/blog/article.html',
      controller: 'articleController'
    })

  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}])
