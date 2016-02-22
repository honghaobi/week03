var body = document.getElementsByTagName('body')[0];
var box;
function createCanvas(){
  for (var i = 0; i < 2048; i++) {
    box = document.createElement('div');
    box.id = i;
    box.className = "empty";
    box.style.width = "20px";
    box.style.height = "20px";
    box.style.border = "solid 1px";
    box.style.float = "left";
    box.style.backgroundColor = "white";
    body.appendChild(box);
  }

}

createCanvas();


function colorPicker(){
  document.getElementById('0').style.backgroundColor = "red";
  document.getElementById('1').style.backgroundColor = "orange";
  document.getElementById('2').style.backgroundColor = "yellow";
  document.getElementById('3').style.backgroundColor = "green";
  document.getElementById('4').style.backgroundColor = "blue";
  document.getElementById('5').style.backgroundColor = "purple";
  document.getElementById('6').style.backgroundColor = "pink";
  document.getElementById('7').style.backgroundColor = "brown";
  document.getElementById('8').style.backgroundColor = "gray";
  document.getElementById('9').style.backgroundColor = "white";
  document.getElementById('10').style.backgroundColor = "black";
  for (var i = 0; i < 11; i++) {
    document.getElementById(i).className = "colorSelect";
  }
}

colorPicker();

var selectColor;

function clickItem(event){
  if (event.target.className == "colorSelect") {
    selectColor = event.target.style.backgroundColor;
  } else {
    event.target.style.backgroundColor = selectColor;
  }
}

body.addEventListener("click", clickItem);
// body.addEventListener("mouseover", clickItem);
