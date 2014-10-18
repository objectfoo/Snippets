// Throttle Function
// Nicholas Zakas, Professional JavaScript for Web Developers: pg. 753
function throttle(fn, delay, context) {
  delay = delay || 100;

  clearTimeout(fn.tId);
  fn.tId = setTimeout(function () {
    fn.call(context);
  }, delay);
}
