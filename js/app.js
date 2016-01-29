console.log('linked');

(function() {
  var state = {
    k1: 0,
    k2: 0,
    p1: 0,
    p2: 0
  };

  var p1meter = document.querySelector('meter.meter1');
  var p2meter = document.querySelector('meter.meter2');
  var p1img = document.querySelector('.player_1_img');
  var p2img = document.querySelector('.player_2_img');

  function initialize(){
  	p1img.style.backgroundImage = "url(img/goku1.jpg)";
  	p2img.style.backgroundImage = "url(img/veg1.jpg)";
  }

  function render() {
    p1meter.value = state.p1.toString();
    p2meter.value = state.p2.toString();

 
    if (state.p1 >= 0.5 && state.p1 < 1){
    	p1img.style.backgroundImage = "url(img/goku2.jpg)";
    }else if (state.p1 >= 1){
    	p1img.style.backgroundImage = "url(img/goku3.jpg)";
    }

    if (state.p2 >= 0.5 && state.p2 < 1){
    	p2img.style.backgroundImage = "url(img/veg2.jpg)";
    }else if (state.p2 >= 1){
    	p2img.style.backgroundImage = "url(img/veg3.jpg)";
    }
  }

  function keyPress (e) {
    var key = e.keyCode;
    if (key === 65 || key === 68) {
      if (key !== state.k1) {
        state.k1 = key;
        state.p1 += 0.01;
      }
    }

    if (key === 37 || key === 39) {
      if (key !== state.k2) {
        state.k2 = key;
        state.p2 += 0.01;
      }
    }

    render();
  }

  document.body.addEventListener('keyup', keyPress);
  initialize();
})();
