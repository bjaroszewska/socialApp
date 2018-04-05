(function () {
    'use strict';

    angular
        .module('app', [])
        .controller('ControllerCtrl', ControllerCtrl)

    /** @ngInject */
    function ControllerCtrl($scope, $http) {

        init();


        function init() {
            $http({
                method: 'GET',
                url: 'http://localhost:3000/api/posts'
            }).then(function (response) {
                $scope.posts = response.data ? response.data : [];
            }, function (error) {

            })


            $scope.addPost = function () {
                if ($scope.body) {
                    $http({
                        url: '/api/posts',
                        method: "POST",
                        data: {
                            username: "sampleUser",
                            body: $scope.body
                        }
                    })
                        .then(function (response) {
                            console.log(response);
                            $scope.posts.unshift(response);
                           // $scope.posts = $scope.posts.unshift(response);// ? response.data : [];
                            $scope.body = null;
                        },
                        function (response) {
                            console.log(response);
                        });
                }

            }
            $scope.removePost = function() {
               $http({
                        url: '/api/removePost',
                        method: "POST",
                        data: {
                            id: this.post._id
                        }
                    })
                        .then(function (response) {
                            $scope.posts.unshift(response);
                            $scope.body = null;
                        },
                        function (response) {
                            console.log(response);
                        });
                    }
        }
    }
}());