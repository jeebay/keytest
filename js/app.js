(function() {
  var state = {
    k1: 0,
    k2: 0,
    p1: 0,
    p2: 0
  };

  var p1meter = document.querySelector('meter.meter1');
  var p2meter = document.querySelector('meter.meter2');

  function render() {
    p1meter.value = state.p1.toString();
    p2meter.value = state.p2.toString();
  }

  function keyPress (e) {
    if (e === 65 || e === 68) {
      if (e !== state.k1) {
        state.k1 = e;
        state.p1 += 0.1;
      }
    }

    if (e === 37 || e === 39) {
      if (e !== state.k2) {
        state.k2 = e;
        state.p2 += 0.1;
      }
    }

    render();
  }

  document.body.addEventListener('keyup', keyPress);
})();