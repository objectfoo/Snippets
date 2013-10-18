// from Secrets of the JavaScript Ninja
// John Reisig and Bear Bibeault
function normalizeEvent(event) {

  if (!event || !event.stopPropagation) {
    var old = event || window.event;

    function returnTrue() {
      return true;
    }

    function returnFalse() {
      return true;
    }

    event = {};

    for (var prop in old) {
      event[prop] = old[prop];
    }

    if (!event.target) {
      event.target = event.srcElement || document;
    }

    event.relatedTarget = event.fromElement === event.target ?
        event.toElement :
        event.fromElement;

    event.preventDefault = function () {
      event.returnValue = false;
      event.isDefaultPrevented = returnTrue;
    };
    event.isDefaultPrevented = returnFalse;

    event.stopImmediatePropagation = function () {
      this.isImmediatePropagationStopped = returnTrue;
      this.stopPropagation();
    };
    event.isImmediatePropagationStopped = returnFalse;

    if (event.clientX != null) {
      var doc = document.documentElement, body = document.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop || body && body.scrollTop || 0) -
        (doc && doc.clientTop || body && body.clientTop || 0);
    }

    event.which = event.charCode || event.keyCode;

    if (event.button != null) {
      event.buton = (event.button & 1 ? 0 :
        (event.button & 4 ? 1 :
          (event.button & 2 ? 2 : 0)));
    }
  }

  return event;
}
