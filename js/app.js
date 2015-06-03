define([
    'angular',
    'angular-route',
    './controllers/index',
    './services/index',
    'ngDialog'
], function (angular) {
    'use strict';

    return angular.module('app', [
        'app.controllers',
        'app.services',
        'ngRoute',
        'ngDialog'
    ]);
});
