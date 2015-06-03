define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('firstCtrl', ['$scope', '$location', 'user', 'validation', function ($scope, $location, user, validation) {

        $scope.user = user;
        $scope.valRes = {};

        var val = validation;

        $scope.goNext = function() {
            $scope.valRes = val.validate($scope.user);

            if ($scope.valRes.firstNameValid & $scope.valRes.lastNameValid &
                $scope.valRes.emailValid & $scope.valRes.phoneValid) {
                $location.path('/secondPage');
            }
        };

    }]);
});
