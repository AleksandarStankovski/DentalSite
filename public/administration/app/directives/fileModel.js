'use strict'
app.directive('fileModel', ['$parse', function ($parse) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      var model = $parse(attrs.fileModel)
      var modelSetter = model.assign
      console.log(modelSetter)
      element.bind('change', function () {
        scope.$apply(function () {
          modelSetter(scope, element[0].files)
          console.log('---------------------------')
          console.log('element[0].files')
          console.log(element[0].files)
        })
      })
    }
  }
}])
