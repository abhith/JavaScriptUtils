(function () {
    'use strict';

    angular
        .module('app')
        .factory('countryList', countryList);

    countryList.$inject = ['$http'];

    function countryList($http) {
        var service = {
            getCountries: getCountries
        };

        return service;

        function getCountries() {
            // don't forget to assign correct path to the data file below
            return $http.get('/content/data/countries.json');
        }
    }
})();