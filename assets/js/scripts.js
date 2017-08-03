// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function() {};
  var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());
if (typeof jQuery === 'undefined') {
  console.warn('jQuery hasn\'t loaded');
} else {
  console.log('jQuery has loaded');
}
// Place any jQuery/helper plugins in here.

$(function() {
  var windowWidth = $(window).width();
  if (windowWidth > 974) {
    var height = $('.container--main').height();
    $('aside.sidebar').css('min-height', height + 'px');
  }

  $('.hardis--title span').on('click', function(e) {
    if (!$(this).hasClass('hardis--title-a')) {
      $('.hardis--title-a').removeClass('hardis--title-a');
      $(this).addClass('hardis--title-a');
      $('.hardis-content--item-a').fadeOut('fast');
      $('.hardis-content--item').each(function(index, el) {
        if ($(this).hasClass('hardis-content--item-a')) {
          $(this).removeClass('hardis-content--item-a')
        } else {
          $(this).addClass('hardis-content--item-a')
          $(this).fadeIn('fast');
        }
      });
    }
  })

  $('.featured-video--desshort').on('click', function(e) {
    $(this).fadeOut('fast', function() {
      $('.featured-video--desfull').fadeIn('fast');
    });
  })
  $('.featured-video--desfull').on('click', function(e) {
    $(this).fadeOut('fast', function() {
      $('.featured-video--desshort').fadeIn('fast');
    });
  })

  $('.widget--asidenav a').click(function() {
    console.log(this)
  })

});

$(window).resize(function(event) {
  /* Act on the event */
  console.log($(window).width())
  var windowWidth = $(window).width();
  if (windowWidth > 974) {
    var height = $('.container--main').height();
    $('aside.sidebar').css('min-height', height + 'px');
  } else {
    $('aside.sidebar').css('min-height', '0px');
  }
});
