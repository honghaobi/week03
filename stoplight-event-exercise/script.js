/*
  Write JS to make this stoplight work.

  When I click on the 'stop' button,
    the top light should turn red.
  When I click on the 'slow' button
    the middle light should turn orange.
  When I click on the 'go' button
    the bottom light should turn green.
*/


var stopButton = document.querySelector("#stopButton");
var slowButton = document.querySelector("#slowButton");
var goButton = document.querySelector("#goButton");

var stopLight = document.querySelector("#stopLight");
var slowLight = document.querySelector("#slowLight");
var goLight = document.querySelector("#goLight");

stopButton.addEventListener("click", stoplightOn);
slowButton.addEventListener("click", slowlightOn);
goButton.addEventListener("click", golightOn);

function stoplightOn(){
  stopLight.style.backgroundColor = "red";
  slowLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "black";
}

function slowlightOn(){
  stopLight.style.backgroundColor = "black";
  slowLight.style.backgroundColor = "orange";
  goLight.style.backgroundColor = "black";
}

function golightOn(){
  stopLight.style.backgroundColor = "black";
  slowLight.style.backgroundColor = "black";
  goLight.style.backgroundColor = "green";
}
