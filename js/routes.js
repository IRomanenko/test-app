define(['./app'], function (app) {
    'use strict';
    return app.config(['$routeProvider', function ($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'partials/page-1.html?2',
            controller: 'firstCtrl'
        });

        $routeProvider.when('/firstPage', {
            templateUrl: 'partials/page-1.html?1',
            controller: 'firstCtrl'
        });

        $routeProvider.when('/secondPage', {
            templateUrl: 'partials/page-2.html?3',
            controller: 'secondCtrl'
        });

        $routeProvider.otherwise({
            redirectTo: '/'
        });

    }]);
});
