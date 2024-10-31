let h, w;

let backgroundColor = [146, 216, 212]
let strokeColor = [215, 172, 99]

class Shape{
  constructor(x, y, len, type){//type: 0 is square, 1 is circle, 2 is triangle, 3 is star
    this.x = x;
    this.y = y;
    this.len = len;
    this.type = type;
  }

  drawTriangleCenterAt(x, y, len){
    let v1 = createVector(0, -len / Math.sqrt(3)); 
    let v2 = v1.copy();
    v2.rotate(PI / 3 * 2);
    let v3 = v1.copy();
    v3.rotate(-PI / 3 * 2);
    triangle(x + v1.x, y + v1.y, x + v2.x, y + v2.y, x + v3.x, y + v3.y);
  }
  
  drawStarCenterAt(x, y, len){
    len /= 1.5;
    let v1 = createVector(0, -len);
    let v2 = createVector(0, len / 3);
    let a = 2 * PI / 5;
    v2.rotate(a * 3);
  
    beginShape();
    noStroke();
    for (let i = 0; i < 5; i++){
      // point(x + v1.x, y + v1.y);
      // point(x + v2.x, y + v2.y);
  
      vertex(x + v1.x, y + v1.y);
      vertex(x + v2.x, y + v2.y);
  
      // console.log(v1.x, v1.y);
      // console.log(v2.x, v2.y);
  
      // points.push(v1);
      // points.push(v2);
      
      v1.rotate(a);
      v2.rotate(a);
    }
  
    // points.push(v1);
    // points.push(v2);
    endShape(CLOSE);
  
    // console.log(points);
  
    // stroke("white");
    // strokeWeight(3);
  }  

  draw(){
    fill("white");
    noStroke();

    switch(this.type){
      case 0:
        square(this.x - this.len / 2, this.y - this.len / 2, this.len);
        break;
      case 1:
        circle(this.x, this.y, this.len);
        break;
      case 2:
        this.drawTriangleCenterAt(this.x, this.y, this.len);
        break;
      case 3:
        this.drawStarCenterAt(this.x, this.y, this.len);
        break;
      default:
        break;  
    }
  }
}

orderUpper = [];
orderLower = [];

function drawPage1(){
  borderW = 60;
  borderH = 90;
  wRec = w - 2 * borderW;
  hRec = h - 2 * borderH;
  shapeWidth = 130;

  //frame
  noFill();
  stroke(215,172,99);
  strokeWeight(3);

  rect(borderW, borderH, wRec, hRec);

  //text
  textSize(50);
  textFont('Verdana');
  fill(215,172,99);
  textAlign(CENTER, TOP);
  text("Match the shapes", w/2, 30); //text
  
  //draw the shapes
  let disW = wRec / 4;
  let disH = hRec / 2;
  for (let i = 0; i < 4; i++){
    let s1 = new Shape(borderW + disW / 2 + i * disW, borderH + disH / 2, shapeWidth, orderUpper[i]);
    let s2 = new Shape(borderW + disW / 2 + i * disW, borderH + disH / 2 + disH, shapeWidth, orderLower[i]);

    s1.draw();
    s2.draw();
  }
}

function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);

  //create shuffle order for Page 1
  orderUpper = shuffle([0, 1, 2, 3]);
  orderLower = shuffle([0, 1, 2, 3]);
}

pageNumber = 1;

function draw() {
  background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  drawPage1();
}
