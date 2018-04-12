angular
.module('app')
.controller('LoginController', LoginController)

/** @ngInject */

function LoginController($scope,UserService ) {
    init(); 

    function init() {
    $scope.login = function (username,password) {
        UserService.login(username,password)
        .then (function (response) {
            $scope.$emit('login', response.data)
        })
    }
    }
}
