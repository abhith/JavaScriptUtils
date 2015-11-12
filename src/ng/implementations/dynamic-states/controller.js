(function () {

    appModule.controller('controllername', [
        '$scope', '$state', '$dashboardState', function ($scope, $state, $dashboardState) {
            var vm = this;

            //Dynamic States
            vm.buildDynamicMenus = function (data) {
                angular.forEach(data, function (value, key) {

                    // here we ask if there is a state with the same name
                    var getExistingState = $state.get(value.dynamicMenu.nameEng);

                    // no need to continue, there is state (e.g. login) already
                    if (getExistingState !== null) {
                        return;
                    }
                    $dashboardState.addState(value.dynamicMenu.nameEng, '/' + value.dynamicMenu.nameEng, value.descriptionEng);
                });

                vm.reloadContent();
            }

            //go to dynamic state on direct url call
            vm.reloadContent = function () {
                var loadDefault = true;
                angular.forEach($state.get(), function (state) {

                    if (state.name !== 'about') {
                        if (window.location.hash === '#' + state.url) {
                            $state.go(state.name);
                            loadDefault = false;
                        }
                    }
                });

                if (loadDefault) {
                    $state.go('about');
                }
            }

        }
    ]);

})();