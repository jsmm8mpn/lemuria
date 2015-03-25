var l = angular.module('radioEx', ['l']);
l.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
	$scope.numbers = ['1', '2', '3'];
	$scope.devices = ['Desktop', 'Laptop', 'Tablet'];
	$scope.food = [{
		text: 'Apple',
		img: '../icons/food/apple13.png',
		value: 'a'
	},{
		text: 'Carrot',
		img: '../icons/food/carrot3.png',
		value: 'c'
	},{
		text: 'Grapes',
		img: '../icons/food/grapes1.png',
		value: 'g'
	}];
}]);