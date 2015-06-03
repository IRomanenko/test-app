define(['./module'], function (services) {
    'use strict';
    services.factory('validation', [function () {

        var validationResults = function(){
                return {
                    firstNameValid: true,
                    lastNameValid: true,
                    emailValid: true,
                    phoneValid: true
                }
            },
            reEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
            rePhone = /^\+1-\d{3}-\d{3}-\d{4}$/i;

        return {
            validate: function(user) {

                var res = validationResults();

                //First Name validation
                if (user.firstName === '' || typeof(user.firstName) === 'undefined') {
                    res.firstNameValid = false;
                }

                //Last Name validation
                if (user.lastName === '' || typeof(user.lastName) === 'undefined') {
                    res.lastNameValid = false;
                }

                //Email address validation
                if (user.email === '' || !reEmail.test(user.email)) {
                    res.emailValid = false;
                }

                //Phone validation
                if (user.phone === '' || !rePhone.test(user.phone)) {
                    res.phoneValid = false;
                }

                return res;
            }
        };

    }]);

});
