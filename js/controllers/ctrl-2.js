define(['./module'], function (controllers) {
    'use strict';
    controllers.controller('secondCtrl', ['$scope', 'user', '$location', 'ngDialog', function ($scope, user, $location, ngDialog) {

        $scope.user = user;

        $scope.sabmit = function() {

        }
        $scope.back = function() {
            ngDialog.closeAll();
            $location.path('/firstPage');
        }

        $scope.clickToOpen = function () {
            ngDialog.open({ template: '/partials/dialogTpl.html',
                            scope: $scope
            });
        };

    }]);
});
