(function(){
  var abtCircle   = $('#about-circle');
  var resuCircle  = $('#resu-circle');
  var conCircle   = $('#con-circle');
  var projCircle  = $('#proj-circle');

  var abtBlinker  = new Blinker(abtCircle, 2000, 700, 1000);
  var resuBlinker = new Blinker(resuCircle, 2400, 1000, 1980);
  var conBlinker  = new Blinker(conCircle, 1000, 1000, 2800);
  var projBlinker = new Blinker(projCircle, 900, 600, 970);

  abtBlinker.pulse();
  conBlinker.pulse();
  resuBlinker.pulse();
  projBlinker.pulse();
  $('#about-holder').click(function(){
    console.log('clicked');
    showEls('.blurb');
  });
  $('#proj-holder').click(function(){
    console.log('clicked');
    showEls('.proj-viewer');
  });
  $('#con-holder').click(function(){
    showEls('.con-list');
  });
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
  blinker.blinkerEl.hover(function(){
    blinker.stopPulse(blinker.iD);
  }, function(){
    blinker.pulse()
  });
}

function showEls(display){
  $(display).toggle('slide', "left", 400);
  var dispSet = $(display).offset();
  $('body').animate({scrollTop: dispSet.top-50});
}

/* running pulse() within pulse() instead of using setInterval helped to avoid
speeding up the intervals on repeated window events */
