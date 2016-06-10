'use strict';

angular.module('bertResume')
    .directive('navbar', function () {
      return {
        templateUrl: 'nav/nav.html',
        restrict: 'E',
        controller: 'NavbarCtrl'
      };
    });