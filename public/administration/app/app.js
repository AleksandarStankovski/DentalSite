'use strict'

var app = angular.module('dentalsiteadministration', ['ui.router', 'ui.bootstrap', 'modalStateServices', 'infinite-scroll'])

app.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', 'modalStateProvider', function ($stateProvider, $locationProvider, $urlRouterProvider, modalStateProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home/home.html',
      controller: 'homeController'
    })
    .state('blog', {
      url: '/blog',
      templateUrl: 'app/views/blog/blog.html',
      controller: 'blogController'
    })

  modalStateProvider.state('blog.create', {
    url: '/create',
    templateUrl: 'app/views/blog/articleCreate.html',
    controller: 'articleCreateController'
  })
  modalStateProvider.state('blog.edit', {
    url: '/edit/:id',
    templateUrl: 'app/views/blog/articleEdit.html',
    controller: 'articleEditController'
  })

  $urlRouterProvider.otherwise('/')
  $locationProvider.html5Mode(true)
}])
