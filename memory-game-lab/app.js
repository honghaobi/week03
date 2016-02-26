(function(){
  "use strict";

  var body = document.getElementsByTagName('body')[0];

  var createBoxes = function() {
    var boxContainer = document.createElement('section');
    boxContainer.className = 'boxContainer';
    body.appendChild(boxContainer);

    var box;

    for (var i = 1; i <= 16; i++) {
      box = document.createElement('div');
      box.id = "box" + i;
      box.className = 'box';
      boxContainer.appendChild(box);
    }
  };

  var createOverlay = function() {
    var overLayContainer = document.createElement('section');
    overLayContainer.className = 'overLayContainer';
    body.appendChild(overLayContainer);

    var overLay;

    for (var i = 1; i <= 16; i++) {
      overLay = document.createElement('div');
      overLay.className = 'overLay';
      overLayContainer.appendChild(overLay);
    }
  };

  // var showBox = function{
  //
  // }






  createBoxes();
  createOverlay();

})();
