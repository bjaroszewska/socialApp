angular
.module('app')
.service('UserService', function ($http) {
   var svc = this;
   this.getUser = function () {
        return  $http({
            url: '/api/users',
            method: "GET",
            headers: { 'X-Auth':this.token}
        })
    }
   this.login = function (username,password) {
       return $http({
        url: '/api/sessions',
        method: "POST",
        data: {username:username, password:password}
    })
    .then (function (val) {
        svc.token = val.data
        return svc.getUser()
    }
       
       )
}})