angular.module('app').directive('closeEditing', function() {
  const KEYS = {
    ESCAPE: 27
  }
  return {
    scope: {
      isEditing: '='
    },

    link: function(scope, element, attrs) {
      element.on('keyup', function(e) {
        if (e.keyCode === KEYS.ESCAPE) {
          scope.isEditing = false
          scope.$apply()
        }
      })
    } 
  }
})