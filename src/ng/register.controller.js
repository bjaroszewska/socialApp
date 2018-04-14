angular
.module('app')

.controller('RegisterController', RegisterController)



.directive('validatorPassword', function($q) {
 /**/
 return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.validatorPassword = function(viewValue) {
            if(viewValue == scope.registrationForm.password.$viewValue) {
                return true;
            }
                else {
                    return false;
                }
        }
    }

  };

});

function RegisterController($scope,UserService,$location  ) {
    init(); 

    function init() {
    $scope.createUser = function (username,password) {
        UserService.createUser(username,password)
        .then (function (response) {
            $scope.$emit('login', response.data)
            var url = '/';
            $location.url(url);
        })
    }
    }
}


