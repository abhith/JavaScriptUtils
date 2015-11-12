/// <reference path="templates/companyDetails.html" />
/// <reference path="templates/companyDetails.html" />
/* 'app' MODULE DEFINITION */
var appModule = angular.module("app", [
    "ui.router",
    "oc.lazyLoad",
    "ngSanitize",
    'abp'
]);

/* LAZY LOAD CONFIG */

/* This application does not define any lazy-load yet but you can use $ocLazyLoad to define and lazy-load js/css files.
 * This code configures $ocLazyLoad plug-in for this application.
 * See it's documents for more information: https://github.com/ocombe/ocLazyLoad
 */
appModule.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
    $ocLazyLoadProvider.config({
        cssFilesInsertBefore: 'ng_load_plugins_before', // load the css files before a LINK element with this ID.
        debug: true,
        events: true,
        modules: []
    });
}]);

appModule.provider('$dashboardState', function ($stateProvider) {
    this.$get = function ($state) {
        return {
            /**
             * @function app.dashboard.dashboardStateProvider.addState
             * @memberof app.dashboard
             * @param {string} title - the title used to build state, url & find template
             * @param {string} controllerAs - the controller to be used, if false, we don't add a controller (ie. 'UserController as user')
             * @param {string} templatePrefix - either 'content', 'presentation' or null
             * @author Alex Boisselle
             * @description adds states to the dashboards state provider dynamically
             * @returns {object} user - token and id of user
             */
            addState: function (title, url, template) {
                $stateProvider.state(title, {
                    url: url,
                    template: template
                });
            }
        };
    };
});

/* ROUTE DEFINITIONS */
appModule.config([
    '$stateProvider', '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {

        // Default route (overrided below if user has permission)
        //$urlRouterProvider.otherwise("/about");
        //Welcome page
        $stateProvider.state('about', {
            url:'/',
            //controller: 'aiwa.views.companyprofile',
            //controllerAs: 'vm',
            templateUrl: '/Views/CompanyProfile/templates/companyDetails.html'
        });
    }
]);


