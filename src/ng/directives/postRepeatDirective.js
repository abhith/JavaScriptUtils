// Post repeat directive for logging the rendering time
angular.module('app').directive('postRepeatDirective',
    ['$timeout',
    function ($timeout) {
        return function (scope) {
            if (scope.$first)
                window.a = new Date();   // window.a can be updated anywhere if to reset counter at some action if ng-repeat is not getting started from $first
            if (scope.$last)
                $timeout(function () {
                    console.log("## DOM rendering list took: " + (new Date() - window.a) + " ms");
                });
        };
    }
    ]);

// Use in HTML:
//<tr ng-repeat="item in items" post-repeat-directive>…</tr>