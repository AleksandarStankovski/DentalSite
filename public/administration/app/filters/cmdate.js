'use strict'
app.filter('cmdate', ['$filter', function ($filter) {
  return function (input, format) {
    if (!input) {
      return 'N/A'
    }
    var date = new Date(input)
    if (date !== 'Invalid Date') {
      var month = date.getMonth() + 1
      return $filter('date')(new Date(input), format)
    }
    return 'N/A'
  }
}])
