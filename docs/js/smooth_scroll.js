(function($) {
  $.fn.smoothscroll = function(option) {
    var settings = $.extend({
      speed: 1000
    }, option);

    $(this).click(function() {
      $('html, body').animate({
        scrollTop: $(this.getAttribute('href')).length ? $(this.getAttribute('href')).offset().top : 0
      }, settings.speed);

      return false;
    });

    return this;
  };
})(jQuery);

$(document).ready(function() {
  $('a[href^=#]').smoothscroll({
    speed: 500
  });
});