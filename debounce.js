// based on underscore
function debounce(fn, delay, context) {
  var timeout;
  delay = delay || 100;

  return function () {
    var args = arguments;

    function delayed() {
      timeout = null;
      fn.apply(context, args);
    }

    clearTimeout(timeout);
    timeout = setTimeout(delayed, delay);
  };
}
