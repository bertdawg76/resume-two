'use strict';

angular.module('bertResume')
    .controller('LoginCtrl', function(Auth, $location, $state) {
      var vm = this;

      vm.pageHeader = {
        title: 'Sign in to Berts resume'
      };

      vm.credentials = {
        email : "",
        password : ""
      };

      // vm.returnPage = $location.search().page || '/';

      vm.onSubmit = function () {
        vm.formError = "";
        if (!vm.credentials.email || !vm.credentials.password) {
          vm.formError = "All fields required, please try again";
          return false;
        } else {
          vm.doLogin();
        }
      };

      vm.doLogin = function() {
        vm.formError = "";
        Auth
            .login(vm.credentials)
            .error(function(err){
              vm.formError = err;
            })
            .then(function(){
              $state.go('info');
            });
      };


    });