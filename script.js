(function(){
  var abtBlinker  = new Blinker('.about-circle', 1800, 1400);
  var projBlinker = new Blinker('.proj-circle', 2700, 1300);
  var resuBlinker = new Blinker('.resu-circle', 1900, 1900);
  var conBlinker  = new Blinker('.con-circle', 6000, 1200);

  setTimeout(function(){
    abtBlinker.pulse();
    projBlinker.pulse();
    resuBlinker.pulse();
    conBlinker.pulse();
  }, 90);


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
  $('.resu-header').click(function(){
    window.open("https://drive.google.com/open?id=0B00DPsAoUxCldnZERjFJZHllbEUw");
  })
// end iife
})();

function Blinker(element, puffSpeed, blinkSpeed){
  var blinker = this;
  blinkSpeed != null ? blinker.blinkSpeed = blinkSpeed : 230;
  blinker.blinkerEl = $(element);
  blinker.iD;
  blinker.grow = function(){
    blinker.blinkerEl.toggle("puff",{mode: 'show'}, puffSpeed);
  };
  blinker.pulse = function(){
    blinker.grow();
    blinker.iD = setTimeout(function() {
      blinker.pulse();
    }, blinker.blinkSpeed);
  };
  blinker.stopPulse = function(stopperId) {
    clearTimeout(stopperId);
  }
  blinker.blinkerEl.hover(function(){
    blinker.blinkerEl.stop(true, true).css('opacity', '1');
    blinker.stopPulse(blinker.iD);
  }, function(){
    blinker.pulse();
  });
}

function showEls(display){
  $(display).toggle('slide', "left", 400);
  var dispSet = $(display).offset();
  $("html,body").animate({scrollTop: dispSet.top-50});
}

/* running pulse() within pulse() instead of using setInterval helped to avoid
speeding up the intervals on repeated window events */
