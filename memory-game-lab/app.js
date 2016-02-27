  var body = document.getElementsByTagName('body')[0];
  var imgArray = ["red","red","orange","orange","yellow", "yellow", "green", "green", "blue", "blue", "purple", "purple", "brown", "brown", "pink", "pink"];


  var randomArray = function (array) {
    array.sort( function() {
      return 0.5 - Math.random();
    });
  };

  var createBoxes = function() {
    var boxContainer = document.createElement('section');
    boxContainer.className = 'boxContainer';
    body.appendChild(boxContainer);

    var box;

    for (var i = 0; i < 16; i++) {
      box = document.createElement('div');
      box.id = "box" + i;
      box.className = 'box';
      box.style.backgroundColor = imgArray[i];
      box.style.opacity = 0;
      boxContainer.appendChild(box);
    }
  };

  var createOverlay = function() {
    var overLayContainer = document.createElement('section');
    overLayContainer.className = 'overLayContainer';
    body.appendChild(overLayContainer);

    var overLay;

    for (var i = 0; i < 16; i++) {
      overLay = document.createElement('div');
      overLay.className = 'overLay';
      overLayContainer.appendChild(overLay);
    }
  };

  var matchColor;
  var matchBox;
  var clickCount = 0;

  var showBox = function() {
    body.addEventListener('click', function(event) {
      if (!matchColor) {
        matchBox = event.target.id;
        matchColor = event.target.style.backgroundColor;
        clickCount += 1;
        event.target.style.opacity = 1;
      } else if (matchColor === event.target.style.backgroundColor) {
        event.target.style.opacity = 1;
        matchColor = undefined;
        clickCount += 1;
      } else if (matchColor !== event.target.style.backgroundColor){
        event.target.style.opacity = 1;
        setTimeout(function(){
          document.getElementById(matchBox).style.opacity = 0;
          event.target.style.opacity = 0;
        },500);
        setTimeout(function(){
          matchBox = undefined;
          matchColor = undefined;
          clickCount += 1;
        },501);
      }
    });
  };

  randomArray(imgArray);
  createBoxes();
  createOverlay();
  showBox();
