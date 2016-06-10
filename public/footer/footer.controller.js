'use strict';

angular.module('bertResume')
    .controller('footerCtrl', function ($scope, Auth, $rootScope, $state, $window, $timeout) {
      $scope.menu = [

        {
          'title': 'Info',
          'state': 'info'
        }

      ];

      $scope.isCollapsed = true;
      $scope.isLoggedIn = Auth.isLoggedIn;
      $scope.isAdmin = Auth.isAdmin;
      $scope.currentUser = Auth.currentUser;
      //$scope.logOut = Auth.logOut;
      $scope.logOut = function() {
        Auth.logOut();
        $state.go('info');
      };






    });