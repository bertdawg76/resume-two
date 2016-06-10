angular.module("bertResume").factory('Auth', function($http, $window){


  function saveToken(token) {
    if(token){
      $window.localStorage['resume-token'] = token;
    }

  }


  function getToken () {
    return $window.localStorage['resume-token'];
  }

  function isLoggedIn () {
    var token = getToken();

    if(token){
      var payload = JSON.parse($window.atob(token.split('.')[1]));

      return payload.exp > Date.now()/1000;
    } else {
      return false;
    }
  }



  function currentUser (){
    if(isLoggedIn()){
      var token = getToken();
      var payload = JSON.parse($window.atob(token.split('.')[1]));
      return {
        name: payload.name,
        role: payload.role


      }

    }
  }

  function isAdmin (){
    if(isLoggedIn() && currentUser().role === 'admin'){
      return true;
    }




  }

  function register(user) {
    return $http.post('/api/register', user).success(function(data){
      saveToken(data.token);
      console.log(data);
    });
  }

  function login(user) {
    return $http.post('/api/login', user).success(function(data){
      saveToken(data.token);
    });
  }

  function logOut(){
    $window.localStorage.removeItem('resume-token');
  }



  return {
    currentUser : currentUser,
    saveToken : saveToken,
    getToken : getToken,
    isLoggedIn : isLoggedIn,
    isAdmin : isAdmin,
    register : register,
    login : login,
    logOut : logOut
  };


});