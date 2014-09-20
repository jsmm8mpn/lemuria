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
      var img;
      if (scope.img)
        img = '<img src="' + scope.img + '"/>';
      else 
        img = '<img class="checkbox-img"/>';
      //this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
      html.append('<div class="setting-img centered">' + img + '</div>');

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

l.directive('lRadio', function() {
  return {
    restrict: 'A',
    scope: {
      img: '=',
      text: '='
    },
    link: function(scope, element) {
      var html = $('<div class="l-radio"></div>');
      
      var img;
      if (scope.img) {
        img = '<img src="' + scope.img + '"/>';
        html.append('<div class="setting-img centered">' + img + '</div>');
      }

      if (scope.text) {
        html.append('<div class="setting-text">' + scope.text + '</div>');
      }

      var checkbox = element;
      html.click(function() {
        //$(this).toggleClass('true');
        checkbox.prop('checked', !checkbox.prop('checked'));
      });

      html.insertAfter(element);
      element.hide();
    }
  };
});