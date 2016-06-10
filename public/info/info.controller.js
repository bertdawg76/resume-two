angular.module('bertResume').controller('infoCtrl', function($stateParams, $scope, Info, Skill, $uibModal){
  var vm = this;
  init();
  initAlso();
  function init(){
    Info.getAllInfo().then(function(project){
      console.log(project);
      vm.projects = project.data;
    });
  }

  function initAlso(){
    Skill.getAllSkill().then(function(skills){
      console.log(skills);
      vm.skills = skills.data;
    })
  }
  Info.getOneInfo($stateParams.id)
      .then(function (response) {
        console.log(response);
        $scope.project = response.data;

      });

  $scope.getProject = function(id){
    Info.getOneInfo(id)
        .then(function(response){
          console.log(response);
          $scope.oneProject = response.data;
        })
  };

  /*Skill.getOneSkill($stateParams.id)
   .then(function (response) {
   console.log(response);
   $scope.skill = response.data;

   })*/

  $scope.getProject = function(id) {
    Info.getOneInfo(id)
        .then(function(response){
          console.log(response);
          $scope.oneProject = response.data;
          var modalInstance = $uibModal.open({
            templateUrl: 'info/modal.html',
            controller: 'modalCtrl',
            resolve: {
              oneProject: function (){
                return $scope.oneProject;
              }
            }
          })
        });

  }




});