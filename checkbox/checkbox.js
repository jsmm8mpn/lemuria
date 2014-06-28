!function($) {
  
  $.fn.lCheckbox = function(options) {
		if (!options)
			options = {};
    this.addClass('setting-b');
		if (!options.img)
			options.img = 'http://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png';
    this.append('<div class="setting-img centered" style="background-image: url(' + options.img + '); background-repeat: no-repeat; background-position: center"></div>');
    if (options.text) {
			this.append('<div>' + options.text + '</div>');
		}
    this.click(function() {
      $(this).toggleClass('true');
    });
  }
  
}(window.jQuery);