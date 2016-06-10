angular.module('bertResume').factory('Info', function($http, $stateParams, Auth){

  var info = {};

  info.getAllInfo = function(){
    return $http.get('/api/Info').success(function(response){
      console.log(response);
      return response.data;
    })
  };

  info.getOneInfo = function(id){
    return $http.get('/api/Info/' + id).success(function(response){
      console.log(response);
      return response.data;
    })
  };



  info.createInfo = function(product){
    return $http.post('/api/Info', product, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  info.updateInfo = function(product){
    console.log(product);
    return $http.put('/api/Info/' + product._id, product, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  info.deleteInfo = function(id){
    console.log(id);
    return $http.delete('api/Info/' + id, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  return info;



});