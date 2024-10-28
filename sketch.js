let h, w;
function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);
}

function drawPage1(){
  noFill();
  stroke("gold");
  strokeWeight(3);
  let borderW = 60;
  let borderH = 90;
  let wRec = w - 2 * borderW;
  let hRec = h - 2 * borderH;
  rect(borderW, borderH, wRec, hRec);


  fill("white");
  noStroke();

  let wDis = wRec / 4;
  let hDis = hRec / 2;


  let xCircle = borderW + wDis / 2;
  let yCircle = borderH + hDis / 2;
  // circle(xCircle, yCircle, 100);

   for (let i = 0; i < 4; i++)
       for (let j = 0; j < 2; j++)
          circle(xCircle + i * wDis, yCircle + j * hDis, 130);

  textSize(50);
  stroke("gold");
  fill("gold");
  text("Match the Shapes", 290, 85);

}

function draw() {
  background(146, 216, 212);

  drawPage1();
}