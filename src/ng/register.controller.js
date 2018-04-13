angular
.module('app')
.controller('RegisterController', RegisterController)



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
