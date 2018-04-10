angular
.module('app')
.controller('PostsController', PostsController)

/** @ngInject */
function PostsController($scope,PostsService ) {

init();


function init() {

    PostsService.fetch().then (function (response) {
        $scope.posts = response.data ? response.data : [];
    }, function (error) {})
  

    $scope.addPost = function () {
        if ($scope.body) {
           PostsService.create({ 
           username: "sampleUser",
           body: $scope.body})
                .then(function (response) {
                    $scope.posts.unshift(response.data);
                     $scope.body = null;
                },
                function (response) {
                    console.log(response);
                });
        }

    }
    $scope.removePost = function() {
    
           PostsService.remove( { 
            id: this.post._id            
           })
                .then(function (response) {
                    init();
                },
                function (response) {
                    console.log(response);
                });
            }
}
}