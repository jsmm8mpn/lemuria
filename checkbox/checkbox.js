!function($) {
  
  $.fn.lCheckbox = function() {
    this.addClass('large-checkbox-field');
    this.append('<input class="large-checkbox" id="large-checkbox" type="checkbox"/>');
    this.append('<label class="large-checkbox-label" for="large-checkbox"></label>');
  };
  
  $.fn.lCheckbox2 = function(options) {
    this.addClass('setting-b');
    this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
    this.append('<div>' + options.text + '</div>');
    this.click(function() {
      $(this).toggleClass('true');
    });
  }
  
}(window.jQuery);