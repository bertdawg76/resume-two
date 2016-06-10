'use strict';

angular.module('bertResume')
    .directive('bottom', function () {
      return {
        templateUrl: 'footer/footer.html',
        restrict: 'E',
        controller: 'footerCtrl'
      };
    });