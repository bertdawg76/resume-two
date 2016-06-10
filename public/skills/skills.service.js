angular.module('bertResume').factory('Skill', function($http, $stateParams, Auth){

  var skill = {};

  skill.getAllSkill = function(){
    return $http.get('/api/Skill').success(function(response){
      console.log(response);
      return response.data;
    })
  };

  skill.getOneSkill = function(id){
    return $http.get('/api/Skill/' + id).success(function(response){
      console.log(response);
      return response.data;
    })
  };



  skill.createSkill = function(skill){
    return $http.post('/api/Skill', skill, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  skill.updateSkill = function(skill){
    console.log(skill);
    return $http.put('/api/Skill/' + skill._id, skill, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  skill.deleteSkill = function(id){
    console.log(id);
    return $http.delete('api/Skill/' + id, {headers: {Authorization: 'Bearer ' + Auth.getToken()}}).success(function(data){
      return data;
    })
  };

  return skill;



});