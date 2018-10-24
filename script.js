var schoolApp = angular.module('schoolApp',[]);
// On déclare un module schoolApp grace a la fonction angular.module

schoolApp.controller('studentsCtrl',function($scope){
// studentsCtrl est le nom du controller.
  $scope.firstName = 'Émilie';
  $scope.lastName = 'Gérard';
  $scope.age = '17';
  $scope.grade = 'Terminale';
// $scope liaison entre js et html.
});
