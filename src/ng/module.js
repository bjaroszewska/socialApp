angular.module('app', [
    'ngRoute'
])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.hashPrefix('');
  }]);