(function(){
  var abtCircle   = $('#about-circle');
  var resuCircle  = $('#resu-circle');
  var conCircle   = $('#con-circle');
  var projCircle  = $('#proj-circle');

  var abtBlinker  = new Blinker(abtCircle, 20, 2000, 2000);
  var projBlinker = new Blinker(projCircle, 100, 2000, 2000);
  var resuBlinker = new Blinker(resuCircle, 100, 1000, 1000);
  var conBlinker  = new Blinker(conCircle, 100, 6000, 6000);

  setTimeout(function(){
    abtBlinker.pulse();
    projBlinker.pulse();
    resuBlinker.pulse();
    conBlinker.pulse();
  }, 1000);


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
