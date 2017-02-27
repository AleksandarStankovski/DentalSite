'use strict'
app.factory('blogService', ['$http', function ($http) {
  return {
    getAll: function () {
      return $http.get('/rest/blog')
    },
    review: function (id) {
      return $http.get('/rest/article/' + id)
    }
  }
}])
