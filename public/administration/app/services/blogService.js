'use strict'
app.factory('blogService', ['$http', function ($http) {
  return {
    getAll: function (page, sortDate) {
      return $http.get('/administration/rest/blog?page=' + page + '&sortDate=' + sortDate)
    },
    create: function (data) {
      return $http({
        url: '/administration/rest/blog/create',
        method: 'POST',
        data: data
      })
    },
    review: function (id) {
      return $http.get('/administration/rest/blog/edit/' + id)
    },
    edit: function (data) {
      return $http({
        url: '/administration/rest/blog/edit',
        method: 'POST',
        data: data
      })
    },
    remove: function (id) {
      return $http.delete('/administration/rest/blog/remove/' + id)
    }
  }
}])
