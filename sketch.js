let h, w;
let where = [0,1,2,3];
var i;
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

let shapeWidth;

let xCircle;
let xSquare;
let xTrianglePoint1;
let xTrianglePoint2;
let xTrianglePoint3;
function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);
  borderW = 60;
  borderH = 90;
  wRec = w - 2 * borderW;
  hRec = h - 2 * borderH;
  wDis = wRec / 4;
  hDis = hRec / 2;
  
  y1 = borderH + hDis / 2 - 130 /2;
  y2 = y1 + 130 / 2;
  y3 = y2 + 130 / 2;
  y6 = h - (borderH + hDis / 2 - 130 /2);
  y5 = y6 - 130 / 2;
  y4 = y5 - 130 / 2;
  
  
  xCircle = borderW + wDis / 2;
  xSquare = xCircle + wDis - 130 /2;
  xTrianglePoint1 = xCircle + 2 * wDis;
  xTrianglePoint2 = xSquare +  wDis;
  xTrianglePoint3 = xTrianglePoint2 + 130;
  
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

    fill("white");
    noStroke();

    circle(xCircle, y2, 130);
    square(xSquare, y1, 130)
    triangle(xTrianglePoint1, y1, xTrianglePoint2, y3, xTrianglePoint3, y3);
    triangle(xTrianglePoint1 + wDis, y3, xTrianglePoint2 +wDis, y1, xTrianglePoint3 + wDis, y1);

    circle(xCircle, y5, 130);
    square(xSquare, y4, 130)
    triangle(xTrianglePoint1, y4, xTrianglePoint2, y6, xTrianglePoint3, y6);
    triangle(xTrianglePoint1 + wDis, y6, xTrianglePoint2 +wDis, y4, xTrianglePoint3 + wDis, y4);
  
    // stroke("red");
    // line(0, y1, w, y1);
    // line(0, y2, w, y2);
    // line(0, y3, w, y3);
    // line(0, y4, w, y4);
    // line(0, y5, w, y5);
    // line(0, y6, w, y6);
  

}

function draw() {
  background(146, 216, 212);

  drawPage1();
}
