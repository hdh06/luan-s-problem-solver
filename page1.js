let currentlyDragging = false;

class Shape{
  constructor(x, y, len, type, canBeDrag, color){//type: 0 is square, 1 is circle, 2 is triangle, 3 is star
    this.x = x;
    this.y = y;
    this.orX = x;
    this.orY = y;
    this.len = len;
    this.type = type;
    this.dragging = false;
    this.canBeDrag = canBeDrag;
    this.color = color;
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
    fill(this.color);
    noStroke();

    if (this.dragging == false && this.canBeDrag == true && this.color == "red"){
        this.x = this.orX;
        this.y = this.orY;
    }

    if (this.canBeDrag){
      if (mouseIsPressed == false && this.dragging == true){
        currentlyDragging = false;
        this.dragging = false;
      }

      if (this.dragging){
        // console.log(true);
        this.x = mouseX;
        this.y = mouseY;
      }
    }

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

    if (this.canBeDrag && currentlyDragging == false && mouseIsPressed && dist(this.x, this.y, mouseX, mouseY) < this.len / 2){
      this.dragging = true;
      currentlyDragging = true;
      // console.log(true);
    }
  }
}

let orderUpper = [];
let orderLower = [];

let shapes = [];

function setupPage1(){
  //create shuffle order for Page 1
  orderUpper = shuffle([0, 1, 2, 3]);
  orderLower = shuffle([0, 1, 2, 3]);

  //put the shape in original place
  borderW = 60;
  borderH = 90;
  wRec = w - 2 * borderW;
  hRec = h - 2 * borderH;
  shapeWidth = 130;
  let disW = wRec / 4;
  let disH = hRec / 2;
  for (let i = 0; i < 4; i++){
    shapes[i] = new Shape(borderW + disW / 2 + i * disW, borderH + disH / 2, shapeWidth, orderUpper[i], true, "white");
    shapes[i + 4] = new Shape(borderW + disW / 2 + i * disW, borderH + disH / 2 + disH, shapeWidth, orderLower[i], false, "white");
  }
}

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
  for (let i = 4; i < 8; i++)
    shapes[i].draw();
  
  for (let i = 0; i < 4; i++)
    shapes[i].draw();

  for (let i = 0; i < 4; i++){
      minIndex = 4;
      for (let j = 4; j < 8; j++){
        if (dist(shapes[i].x, shapes[i].y, shapes[j].x, shapes[j].y) < dist(shapes[i].x, shapes[i].y, shapes[minIndex].x, shapes[minIndex].y))
          minIndex = j;
      }
      if (shapes[i].type == shapes[minIndex].type){
        if (dist(shapes[i].x, shapes[i].y, shapes[minIndex].x, shapes[minIndex].y) <= 30){
          shapes[i].color = "green";
          shapes[i].x = shapes[minIndex].x;
          shapes[i].y = shapes[minIndex].y;
        }
        else 
          shapes[i].color = "white";
      }
      else{
        if (dist(shapes[i].x, shapes[i].y, shapes[minIndex].x, shapes[minIndex].y) <= 30){
          shapes[i].color = "red";
        }
        else 
          shapes[i].color = "white";
      }
  }

  backHomeButton.draw();
}