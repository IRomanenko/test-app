define(['./module'], function (services) {
    'use strict';
    services.factory('user', [function () {

        var user = {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        };

        return user;

    }]);

});
