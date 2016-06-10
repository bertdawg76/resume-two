angular.module('bertResume', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ui.bootstrap']);

angular.module('bertResume').config(function($urlRouterProvider, $stateProvider) {



  $urlRouterProvider.otherwise('/info');
  $stateProvider

      .state('login', {
        url: '/login',
        templateUrl: 'user/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'vm'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'user/signup.html',
        controller: 'SignupCtrl',
        controllerAs: 'vm'
      })
      .state('admin', {
        url:'/admin',
        templateUrl: 'admin/admin.html',
        controller: 'adminCtrl',
        controllerAs: 'admin'
      })
      .state('info', {
        url: '/info',
        templateUrl: 'info/info-view.html',
        controller: 'infoCtrl',
        controllerAs: 'display'
      })
      .state('viewSkill', {
        url: '/viewSkill/:id',
        templateUrl: 'info/info-details.html',
        controller: 'infoCtrl',
        controllerAs: 'display'
      })



});

angular.module('bertResume').run(function($rootScope, $state, Auth) {
  $rootScope.$on('$stateChangeStart', function (event, next) {
    if (next.authenticate) {
      Auth.isLoggedIn(function (loggedIn) {
        if (!loggedIn) {
          event.preventDefault();
          $state.go('login');
        }
      })
    }
  });
});