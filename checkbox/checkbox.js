var l = angular.module('l', []);
l.directive('lCheckbox', function() {
  return {
    restrict: 'A',
    scope: {
      img: '=',
      text: '='
    },
    link: function(scope, element) {
      var html = $('<div class="l-checkbox"></div>');
      //this.addClass('setting-b');
      if (!scope.img)
        scope.img = 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
      //this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
      html.append('<div class="setting-img centered"><img src="' + scope.img + '"/></div>');

      if (scope.text) {
        html.append('<div>' + scope.text + '</div>');
      }

      var checkbox = element;
      html.click(function() {
        $(this).toggleClass('true');
        checkbox.prop('checked', !checkbox.prop('checked'));
      });

      html.insertAfter(element);
      element.hide();
    }
  };
});
l.controller('MainController', ['$scope', '$timeout', function($scope, $timeout) {
  $scope.angular = true;
  $scope.favoriteIcon = 'heart.gif';
  $scope.favoriteText = 'Favorite';
  
  $scope.$watch('angular', function() {
    if (!$scope.angular) {
      $timeout(function() {
        $('#plain').lCheckbox2();
        $('#icon').lCheckbox2({
          img: 'heart.gif'
        });
        $('#text').lCheckbox2({
          img: 'heart.gif',
          text: 'Favorite'
        });
      });
    }
  });
}]);

!function($) {
  
//  function compile(el) {
//    var start = el?$(el).find('.l-checkbox'):$('.l-checkbox');
//    start.each(function() {
//      var el = $(this);
//      var options = {};
//      options.img = el.attr('data-l-src') || 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
//      el.append('<div class="setting-img centered"><img src="' + options.img + '"/></div>');
//      var text = el.attr('data-l-text');
//      if (text) {
//        el.append('<div>' + text + '</div>');
//      }
//      el.click(function() {
//        $(this).toggleClass('true');
//      });
//    }); 
//  }
  
  function compile(el) {
    var start = el?$(el).find('.l-checkbox'):$('.l-checkbox');
    start.each(function() {
      var el = $('<div class="l-checkbox"></div>');
      var options = {};
      options.img = el.attr('data-l-src') || 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
      el.append('<div class="setting-img centered"><img src="' + options.img + '"/></div>');
      var text = el.attr('data-l-text');
      if (text) {
        el.append('<div>' + text + '</div>');
      }
      var checkbox = $(this);
      el.click(function() {
        $(this).toggleClass('true');
        checkbox.prop('checked', !checkbox.prop('checked'));
      });
      el.insertAfter(this);
      $(this).hide();
    }); 
  }
  
  $.fn.lCheckbox = function(options) {
		if (!options)
		  options = {};
    this.addClass('setting-b');
		if (!options.img)
			options.img = 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
    //this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
    this.append('<div class="setting-img centered"><img src="' + options.img + '"/></div>');

		if (options.text) {
			this.append('<div>' + options.text + '</div>');
		}
    this.click(function() {
      $(this).toggleClass('true');
    });
  };
  
  $.fn.lCheckbox2 = function(options) {
		if (!options)
		  options = {};
    var html = $('<div class="l-checkbox"></div>');
    //this.addClass('setting-b');
		if (!options.img)
			options.img = 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
    //this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
    html.append('<div class="setting-img centered"><img src="' + options.img + '"/></div>');

		if (options.text) {
			html.append('<div>' + options.text + '</div>');
		}
    
    var checkbox = this;
    html.click(function() {
      $(this).toggleClass('true');
      checkbox.prop('checked', !checkbox.prop('checked'));
    });
    
    html.insertAfter(this);
    this.hide();
  };
  
//  $.fn.lCompile = function() {
//    compile(this);
//  };
//  
//  $(window).on('load', function () {
//    compile();
//  });
  
}(window.jQuery);