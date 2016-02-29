  var body = document.getElementsByTagName('body')[0];

  var imgArray = ["img/img1.png","img/img1.png","img/img2.png","img/img2.png","img/img3.png", "img/img3.png", "img/img4.png", "img/img4.png", "img/img5.png", "img/img5.png", "img/img6.png", "img/img6.png", "img/img7.png", "img/img7.png", "img/img8.png", "img/img8.png"];

  var randomArray = function(array) {
    array.sort(function() {
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

  var createTracker = function(){
    gameTracker = document.createElement('div');
    gameTracker.className = 'gameTracker';
    body.appendChild(gameTracker);

    timer = document.createElement('div');
    timer.className = 'timer';
    count = document.createElement('div');
    count.className = 'count';
    gameTracker.appendChild(timer);
    gameTracker.appendChild(count);

    gameWon = document.createElement('div');
    gameLost = document.createElement('div');
    gameWon.innerHTML = "RAD!! YOU WON DUDE!!";
    gameWon.className = 'gameWon';
    gameLost.innerHTML = "NOO!! TIMES UP BRO!!";
    gameLost.className = 'gameLost';
    gameWon.style.opacity = 0;
    gameLost.style.opacity = 0;
    body.appendChild(gameWon);
    body.appendChild(gameLost);
  };

  var matchImg;
  var matchBox;
  var clickCount = 0;
  var matchCount = 0;
  var gameWon = document.getElementsByClassName('gameWon');
  var gameLost = document.getElementsByClassName('gameLost');

  var showBox = function() {
    body.addEventListener('click', function(event) {
      if (event.target.style.opacity == 1) {
        event.target.style.opacity = 1;
        clickCount += 1;
      } else if (!matchImg) {
        event.target.style.opacity = 1;
        matchBox = event.target.id;
        matchImg = event.target.src;
        clickCount += 1;
      } else if (matchBox === event.target.id) {
        event.target.style.opacity = 0;
        matchBox = undefined;
        matchImg = undefined;
        clickCount += 1;
      } else if (matchImg === event.target.src) {
        event.target.style.opacity = 1;
        matchBox = undefined;
        matchImg = undefined;
        matchCount += 1;
        clickCount += 1;
          if (matchCount === 8) {
            console.log("you won");
            gameWon();
          }
      } else if (matchImg !== event.target.src) {
        event.target.style.opacity = 1;
        clickCount += 1;
        setTimeout(function() {
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

  var gameWon = function (){
    gameWon.style.opacity = 1;
  };

  var gameLost = function (){

  };


  randomArray(imgArray);
  createBoxes();
  createOverlay();
  createTracker();
  showBox();
