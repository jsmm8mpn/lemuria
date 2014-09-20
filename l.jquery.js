!function($) {
  $.fn.lCheckbox = function(options) {
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
}(window.jQuery);