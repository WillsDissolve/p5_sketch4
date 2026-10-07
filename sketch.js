let bgColor = 'black';
let circleX = 250;
let circleY = 250;
let circleSize = 200;
let circleColor = 'black';

function setup(){
  createCanvas(500,500);
  background(bgColor);
}

function draw(){
  fill("#3D3D3D");
  stroke('black');
  arc(350,350,20,30, radians(30),radians(260));
  
  fill(circleColor);
  strokeWeight(25);
  stroke("#6CC24A");
  ellipse(circleX, circleY, circleSize);
  
  fill(106, 193, 76);
  noStroke();
  rect(188,235,125,30);
  
  fill('black');
  strokeWeight(2);
  stroke('white');
  scale(0.5, 1.2);
  line(150,390,250,390);
  
}