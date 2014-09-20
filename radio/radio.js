var l = angular.module('radioEx', ['l']);
l.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.angular = true;
  $scope.favoriteIcon = 'heart.gif';
  $scope.favoriteText = 'Favorite';
  
  $scope.$watch('angular', function() {
    if (!$scope.angular) {
      $timeout(function() {
        $('#plain').lCheckbox();
        $('#icon').lCheckbox({
          img: 'heart.gif'
        });
        $('#text').lCheckbox({
          img: 'heart.gif',
          text: 'Favorite'
        });
      });
    }
  });
}]);