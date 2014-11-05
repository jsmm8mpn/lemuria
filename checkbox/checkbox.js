var l = angular.module('checkboxEx', ['l']);
l.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.favoriteIcon = 'heart.gif';
  $scope.favoriteText = 'Favorite';
}]);