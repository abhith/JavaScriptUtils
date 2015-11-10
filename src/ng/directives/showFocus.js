//Focus directive
appModule.directive('showFocus', function ($timeout) {
    return function (scope, element, attrs) {
        scope.$watch(attrs.showFocus,
          function (newValue) {
              $timeout(function () {
                  newValue && element.focus();
                  if (scope.query && scope.query.length > 0) {
                      element[0].setSelectionRange(scope.query.length, scope.query.length);
                  }
              });
          }, true);
    };
});
