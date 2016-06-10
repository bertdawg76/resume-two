angular.module('bertResume').controller('adminCtrl', function($scope, Info, Skill){
  var vm = this;
  //vm.items = [];
  $scope.project = {};


  init();
  initAlso();
  function init() {
    Info.getAllInfo().then(function (response) {
      console.log(response);
      vm.projects = response.data;

    });

  }

  function initAlso() {
    Skill.getAllSkill().then(function (response) {
      console.log(response);
      vm.skills = response.data;

    });

  }


  $scope.createInfo = function (info) {
    console.log($scope.info);
    Info.createInfo($scope.info).then(function (response) {
      console.log(response);
      $scope.info = '';
      init();
    });

  };

  $scope.createSkill = function (skill) {
    console.log($scope.skill);
    Skill.createSkill($scope.skill).then(function (response) {
      console.log(response);
      $scope.skill = '';
      initAlso();
    });

  };

  $scope.removeInfo = function (id) {
    console.log(id);
    Info.deleteInfo(id).then(function (response) {
      console.log(response);
      init()
    })
  };

  $scope.removeSkill = function (id) {
    console.log(id);
    Skill.deleteSkill(id).then(function (response) {
      console.log(response);
      initAlso()
    })
  };


  $scope.updateInfo = function (id, info) {
    console.log(id, info);
    Info.updateInfo(id, info).then(function (response) {
      console.log(response);
      $scope.oneInfo = '';
      $scope.editProject = false;
      init()
    })
  };

  $scope.updateSkill = function (id, skill) {
    console.log(id, skill);
    Skill.updateSkill(id, skill).then(function (response) {
      console.log(response);
      $scope.oneSkill = '';
      $scope.editIt = false;
      initAlso()
    })
  };

  $scope.editInfo = function (id) {
    console.log(id);
    $scope.editProject = true;
    Info.getOneInfo(id).then(function (response) {
      console.log(response);
      $scope.oneInfo = response.data.data;
    });
  };

  $scope.editSkill = function (id) {
    console.log(id);
    $scope.editIt = true;
    Skill.getOneSkill(id).then(function (response) {
      console.log(response);
      $scope.oneSkill = response.data.data;
    });
  };
});