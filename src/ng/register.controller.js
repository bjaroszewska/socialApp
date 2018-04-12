angular
.module('app')
.controller('RegisterController', RegisterController)



function RegisterController($scope,UserService ) {
    init(); 

    function init() {
    $scope.createUser = function (username,password) {
        UserService.createUser(username,password)
        .then (function (response) {
            $scope.$emit('login', response.data)
        })
    }
    }
}
