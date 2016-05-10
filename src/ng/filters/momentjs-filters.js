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
            // relative time like 5 hours ago
        };
    })
    .filter('momentLLLL', function () {
        return function (date) {
            return moment(date).format('LLLL');
            // Tuesday, May 10, 2016 5:20 PM

        };
    })
    .filter('momentllll', function () {
        return function (date) {
            return moment(date).format('llll');
            // Tue, May 10, 2016 5:20 PM
        };
    })
    .filter('momentDate', function () {
        return function (date) {
            return moment(date).format('ddd, MMM DD YYYY');
        };
    });
})();