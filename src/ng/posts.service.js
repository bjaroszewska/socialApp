angular
.module('app')
.service('PostsService', function ($http) {
this.fetch = function () {
    return  $http({
        method: 'GET',
        url: 'http://localhost:3000/api/posts'
    })
}
this.create= function(post) {
    return  $http({
        url: '/api/posts',
        method: "POST",
        data: post
    })
}
this.remove = function(id) {
    return    $http({
        url: '/api/removePost',
        method: "POST",
        data: id
})}})