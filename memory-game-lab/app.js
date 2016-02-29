  var body = document.getElementsByTagName('body')[0];

  var imgArray = ["img/img1.png","img/img1.png","img/img2.png","img/img2.png","img/img3.png", "img/img3.png", "img/img4.png", "img/img4.png", "img/img5.png", "img/img5.png", "img/img6.png", "img/img6.png", "img/img7.png", "img/img7.png", "img/img8.png", "img/img8.png"];

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
      box = document.createElement('img');
      box.id = "box" + i;
      box.className = 'box';
      box.setAttribute("src", imgArray[i]);
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

  var matchImg;
  var matchBox;

  var showBox = function() {
    body.addEventListener('click', function(event) {
      if (event.target.style.opacity == 1) {
        console.log("opa");
        event.target.style.opacity = 1;
        return;
      } else if (!matchImg) {
        matchBox = event.target.id;
        matchImg = event.target.src;
        event.target.style.opacity = 1;
      } else if (matchBox === event.target.id){
        event.target.style.opacity = 0;
        matchBox = undefined;
        matchImg = undefined;
      } else if (matchImg === event.target.src) {
        event.target.style.opacity = 1;
        matchBox = undefined;
        matchImg = undefined;
      } else if (matchImg !== event.target.src){
        event.target.style.opacity = 1;
        setTimeout(function(){
          document.getElementById(matchBox).style.opacity = 0;
          event.target.style.opacity = 0;
        },400);
        setTimeout(function(){
          matchBox = undefined;
          matchImg = undefined;
        },401);
      }
    });
  };

  randomArray(imgArray);
  createBoxes();
  createOverlay();
  showBox();
