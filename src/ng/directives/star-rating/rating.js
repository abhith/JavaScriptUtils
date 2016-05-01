(function (module) {
    var otfRating = function () {
        return {
            scope: {
                value: '=',
                cid: '=',
                uid: '=',
                readonly: '='
            },
            require: 'otfRating',
            templateUrl: '/app/common/directives/star-rating/rating.html',
            controller: 'otfRatingController',
            link: function (scope, element, attributes, controller) {
                var min = parseInt(attributes.min || '1');
                var max = parseInt(attributes.max || '5');

                controller.initialize(min, max);
            }
        };
    };

    angular
       .module('app')
       .controller('otfRatingController', otfRatingController);

    otfRatingController.$inject = ['$scope'];

    function otfRatingController($scope) {
        this.initialize = function (min, max) {
            $scope.preview = -1;
            $scope.stars = new Array(max - min + 1);
        };

        $scope.click = function ($index) {
            if ($scope.readonly) {
                return;
            }
            $scope.value = $index + 1;
        };

        $scope.mouseover = function ($index) {
            $scope.preview = $index;
        };

        $scope.mouseout = function () {
            $scope.preview = -1;
        };

        $scope.styles = function ($index) {
            return {
                "ActiveStars": $index < $scope.value,
                "starpreview": $index <= $scope.preview
            };
        };
    };
    module.directive('otfRating', otfRating);
}(angular.module('app')));