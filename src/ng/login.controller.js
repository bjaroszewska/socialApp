angular
.module('app')
.controller('LoginController', LoginController)

/** @ngInject */

function LoginController($scope,UserService, $location ) {
    init(); 

    function init() {
    $scope.login = function (username,password) {
        UserService.login(username,password)
        .then (function (response) {
            $scope.$emit('login', response.data)
            var url = '/';
 			$location.url(url);
        })
    }
    }
}
