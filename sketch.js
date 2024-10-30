let h, w;
let oder = [0,1,2,3];

let locCircle;
let locSquare;
let locTriangle;
let locInvertedTriangle;

let borderW;
let borderH;
let wRec;
let hRec;
let wDis;
let hDis;

let y1;
let y2;
let y3;
let y4;
let y5;
let y6;

let sW = 130;//shapeWidth

let xCircle;
let xSquare;
let xTriangle1;
let xTriangle2;
let xTriangle3;
function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);
  borderW = 60;
  borderH = 90;
  wRec = w - 2 * borderW;
  hRec = h - 2 * borderH;
  wDis = wRec / 4;
  hDis = hRec / 2;
  
  y1 = borderH + hDis / 2 - sW /2;
  y2 = y1 + sW / 2;
  y3 = y2 + sW / 2;
  y6 = h - (borderH + hDis / 2 - sW /2);
  y5 = y6 - sW / 2;
  y4 = y5 - sW / 2;
  
  oder1 = shuffle(oder);
  oder2 = shuffle(oder);
  
}

function randomLocation1(){
    
  locCircle = oder1[0];
  locSquare = oder1[1];
  locTriangle = oder1[2];
  locInvertedTriangle = oder1[3];
  
  xCircle = borderW + wDis / 2 + locCircle * wDis;
  
  xSquare = borderW + wDis / 2 - sW /2 + locSquare * wDis;
  
  xTriangle1 = borderW + wDis / 2 + locTriangle * wDis;
  xTriangle2 = borderW + wDis / 2 - sW /2 + locTriangle * wDis;
  xTriangle3 = borderW + wDis / 2 - sW /2 + sW + locTriangle * wDis;
  
  xInvertedTriangle1 = borderW + wDis / 2 + locInvertedTriangle * wDis;
  xInvertedTriangle2 = borderW + wDis / 2 - sW /2 + locInvertedTriangle * wDis;
  xInvertedTriangle3 = borderW + wDis / 2 - sW /2 + sW + locInvertedTriangle * wDis;
}

function randomLocation2(){
    
  locCircle = oder2[0];
  locSquare = oder2[1];
  locTriangle = oder2[2];
  locInvertedTriangle = oder2[3];
  
  xCircle = borderW + wDis / 2 + locCircle * wDis;
  
  xSquare = borderW + wDis / 2 - sW /2 + locSquare * wDis;
  
  xTriangle1 = borderW + wDis / 2 + locTriangle * wDis;
  xTriangle2 = borderW + wDis / 2 - sW /2 + locTriangle * wDis;
  xTriangle3 = borderW + wDis / 2 - sW /2 + sW + locTriangle * wDis;
  
  xInvertedTriangle1 = borderW + wDis / 2 + locInvertedTriangle * wDis;
  xInvertedTriangle2 = borderW + wDis / 2 - sW /2 + locInvertedTriangle * wDis;
  xInvertedTriangle3 = borderW + wDis / 2 - sW /2 + sW + locInvertedTriangle * wDis;
}

function drawPage1(){
    noFill();
    stroke(215,172,99);
    strokeWeight(3);

    rect(borderW, borderH, wRec, hRec); //frame

    textSize(50);
    textFont('Verdana');
    fill(215,172,99);
    textAlign(CENTER, TOP);
    text("Match the shapes", w/2, 30); //text
}
function drawShape1(){
    fill("white");
    noStroke();

    circle(xCircle, y2, sW);
    square(xSquare, y1, sW);
    triangle(xTriangle1, y1, xTriangle2, y3, xTriangle3, y3);
    triangle(xInvertedTriangle1, y3, xInvertedTriangle2, y1, xInvertedTriangle3, y1);
}

function drawShape2(){
    fill("white");
    noStroke();
  
    circle(xCircle, y5, sW);
    square(xSquare, y4, sW);
    triangle(xTriangle1, y4, xTriangle2, y6, xTriangle3, y6);
    triangle(xInvertedTriangle1, y6, xInvertedTriangle2, y4, xInvertedTriangle3, y4);
}

function check(){  
    stroke("red");
    line(0, y1, w, y1);
    line(0, y2, w, y2);
    line(0, y3, w, y3);
    line(0, y4, w, y4);
    line(0, y5, w, y5);
    line(0, y6, w, y6);
  

}

function draw() {
  background(146, 216, 212);

  drawPage1();
  randomLocation1();
  drawShape1();
  randomLocation2();
  drawShape2();
}
