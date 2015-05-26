// window.toggle to start stop
(function(win, body) {
  win.requestFrame = function(work) {
    var _work = function() {
      work();
      if (win.running) {
        requestAnimationFrame(_work);
      }
    };

    _work();
  };

  win.toggle = function() {
    if (win.running) {
      win.running = false;
    } else {
      win.running = true;
      body.innerHTML = '';
      win.requestFrame(draw);
    }
  };

  function draw() {
    body.innerHTML = +new Date();
  }
})(window, document.body);
