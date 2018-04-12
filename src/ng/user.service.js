angular
.module('app')
.service('UserService', function ($http) {
   var svc = this;
   this.getUser = function () {
        return  $http({
            url: '/api/users',
            method: "GET"
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
          $http.defaults.headers.common['X-Auth'] = val.data;
        return svc.getUser()
    }
    
       )}
    this.createUser  = function(username,password) {
 return $http({
        url: '/api/users',
        method: "POST",
        data: {username:username, password:password}
    })
    .then (function () {
        return svc.login(username,password)
    })
     
    
}})