(function(){
  var abtCircle   = $('#about-circle');
  var resuCircle  = $('#resu-circle');
  var conCircle   = $('#con-circle');
  var projCircle  = $('#proj-circle');

  var abtBlinker  = new Blinker(abtCircle, 100, 300, 1000);
  var resuBlinker = new Blinker(resuCircle, 80, 800, 1980);
  var conBlinker  = new Blinker(conCircle, 70, 500, 2800);
  var projBlinker = new Blinker(projCircle, 20, 600, 970);

  abtBlinker.pulse();
  conBlinker.pulse();
  resuBlinker.pulse();
  projBlinker.pulse();
  $('.abt-header').click(function(){
    console.log('clicked');
    showEls('.blurb');
  });
  $('.proj-header, #proj-link').click(function(){
    console.log('clicked');
    showEls('.proj-viewer');
  });
  $('.con-header').click(function(){
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
