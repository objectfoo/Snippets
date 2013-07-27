/**
* iOS needs setTimeout but works w/ 0,0
* android needs 0,1
**************************************/
(function (window, addEvent) {
  window[addEvent] && window[addEvent]('load', function () {
    setTimeout(function () {
      window.scrollTo(0, 1);
    }, 0);
  });
}(window, 'addEventListener'));


// Minified
(function(a,b){a[b]&&a[b]("load",function(){setTimeout(function(){a.scrollTo(0,1)},0)})})(window,"addEventListener");
