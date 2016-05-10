// need load the moment.js to use these filters.

(function () {
    appModule.filter('momentFormat', function () {
        return function (date, formatStr) {
            if (!date) {
                return '-';
            }

            return moment(date).format(formatStr);
        };
    })
    .filter('fromNow', function () {
        return function (date) {
            return moment(date).fromNow();
        };
    })
    .filter('momentLLLL', function () {
        return function (date) {
            return moment(date).format('LLLL');
        };
    })
    .filter('momentllll', function () {
        return function (date) {
            return moment(date).format('llll');
        };
    })
    .filter('momentDate', function () {
        return function (date) {
            return moment(date).format('ddd, MMM DD YYYY');
        };
    });
})();