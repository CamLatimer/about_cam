(function(){
  var abtCircle  = $('#about-circle');
  var conCircle  = $('#con-circle');
  var projCircle = $('#proj-circle');

  var abtBlinker = new Blinker(abtCircle, 2000, 700, 500);
  var conBlinker = new Blinker(conCircle, 1000, 1000, 400);
  var projBlinker = new Blinker(projCircle, 900, 600, 200);

  abtBlinker.pulse();
  conBlinker.pulse();
  projBlinker.pulse();
// end iife
})();

function Blinker(element, growPerc, puffSpeed, blinkSpeed){
  var blinker = this;
  blinkSpeed != null ? blinker.blinkSpeed = blinkSpeed : 230;
  blinker.blinkerEl = element;
  blinker.iD;
  blinker.grow = function(){
    blinker.blinkerEl.toggle("puff",{percet: growPerc}, puffSpeed);
  };
  blinker.pulse = function(){
    blinker.grow();
    blinker.iD = setTimeout(function() {
      blinker.pulse();
    }, blinker.blinkSpeed);
  };
  blinker.stopPulse = function(stopperId) {
    blinker.blinkerEl.show();
    clearTimeout(stopperId);
  }
}



/* running pulse() within pulse() instead of using setInterval helped to avoid
speeding up the intervals on repeated window events */
