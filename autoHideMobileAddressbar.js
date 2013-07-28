/**
* iOS needs setTimeout but works w/ 0,0
* android needs 0,1
* ignore if page is scrolled more than 20px
**************************************/
(function (window, addEvent) {
  if (!window.location.hash && window[addEvent]) {
    window[addEvent]('load', function () {
      if ((window.pageYOffset || document.body.scrollTop || 0) < 20) {
        window.scrollTo(0, 1);
        window.scrollTo(0, 0);
      }
    });
  }
})(window, 'addEventListener');


// Minified 177 Bytes
(function(a,b){if(!a.location.hash&&a[b])a[b]("load",function(){20>(a.pageYOffset||document.body.scrollTop||0)&&(a.scrollTo(0,1),a.scrollTo(0,0))})})(window,"addEventListener");
