(function () {
    'use strict';

    angular
        .module('app')
        .directive('buttonBusy', buttonBusy);

    function buttonBusy() {
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                buttonBusy: '='
            }
        };
        return directive;

        function link($scope, element, attrs) {
            var disabledBefore = false;
            var $button = $(element);
            var $buttonInnerSpan = $button.find('span');
            var buttonOriginalText = null;

            var $icon = $button.find('i');
            var iconOriginalClasses = null;

            $scope.$watch('buttonBusy', function () {
                if ($scope.buttonBusy) {
                    //disable button
                    $button.attr('disabled', 'disabled');
                    //change icon
                    if ($icon.length) {
                        iconOriginalClasses = $icon.attr('class');
                        $icon.removeClass();
                        $icon.addClass('fa fa-spin fa-spinner');
                    }
                    //change text
                    if (attrs.busyText && $buttonInnerSpan.length) {
                        buttonOriginalText = $buttonInnerSpan.html();
                        $buttonInnerSpan.html(attrs.busyText);
                    }

                    disabledBefore = true;
                } else {
                    if (!disabledBefore) {
                        return;
                    }

                    //enable button
                    $button.removeAttr('disabled');
                    //restore icon
                    if ($icon.length && iconOriginalClasses) {
                        $icon.removeClass();
                        $icon.addClass(iconOriginalClasses);
                    }
                    //restore text
                    if ($buttonInnerSpan.length && buttonOriginalText) {
                        $buttonInnerSpan.html(buttonOriginalText);
                    }
                }
            });
        }
    }
})();
