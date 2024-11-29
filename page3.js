let cards = [];
let oders = [1,2,3,4,5,6,1,2,3,4,5,6];

function setupPage3(){
    borderW = 60;
    borderH = 90;
    wRec = w - 2 * borderW;
    hRec = h - 2 * borderH;
    boxHeight = hRec / 2 - 40;
    boxWidth = wRec / 6 - 40;
    shape = boxWidth * 2 / 3;

    let disW = wRec / 6;
    let disH = hRec / 2;

    oders = shuffle(oders);

    console.log(oders);

    for (let i = 0; i < 2; i++){
        cards[i] = [];
        for (let j = 0; j < 6; j++){
            if (i == 0){
                cards[i][j] = new Card(borderW + disW / 2 + j * disW, borderH + disH / 2 + disH * i, boxWidth, boxHeight,shape,oders[j],false);
            } else {
                cards[i][j] = new Card(borderW + disW / 2 + j * disW, borderH + disH / 2 + disH * i, boxWidth, boxHeight,shape,oders[j + 6],false);
            }            
        }
    }
    

}

selected = [];
timeDelayed = 2;
timeRecord = -1;

function drawPage3(){
    backHomeButton.draw();

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
    text("Match the cards", w/2, 30);

    for (let i = 0; i < 2; i++){
        for (let j = 0; j < 6; j++){
            cards[i][j].draw();
        }
    }
    if (isMouseClicked){
        isMouseClicked = false;
    }

    if (selected.length == 2 && timeRecord == -1){
        timeRecord = second();
    }

    if (selected.length == 2 && timeRecord != -1 && second() - timeRecord == timeDelayed){
        if (selected[0].type == selected[1].type && selected[0].x != selected[1].x){
            selected[0].canBeFlip = false;
            selected[1].canBeFlip = false;
        }else{
            selected[0].fliped();
            selected[1].fliped();
        }
        selected = [];
        timeRecord = -1;
    }
}

class Card {
    constructor(x,y,wid,hei,shape,type,state){
        this.x = x;
        this.y = y;
        this.hei = hei;
        this.wid = wid;
        this.shape = shape;
        this.type = type;
        this.state = state;
        this.canBeFlip = true;
    }

    drawRectangleAtCenter(x,y,wid,hei){
        rect(x - wid/2,y - hei/2,wid,hei); 
    }

    drawBox(x,y,wid,hei){
        fill(228,243,243);
        strokeWeight(2);
        stroke(228,243,243);
        this.drawRectangleAtCenter(x,y,wid,hei);
        fill(228,243,243);
        stroke(146, 216, 212);
        this.drawRectangleAtCenter(x,y,wid - 12,hei - 12);

        fill(146, 216, 212);
        textFont('Verdana');
        noStroke();
        textSize(wid - 20);
        text("?", x , y - (wid - 20) / 2 );
    }

    drawFlippedBox(x,y,wid,hei){
        fill(228,243,243);
        stroke(228,243,243);
        this.drawRectangleAtCenter(x,y,wid,hei);        
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
        
            vertex(x + v1.x, y + v1.y);
            vertex(x + v2.x, y + v2.y);
            
            v1.rotate(a);
            v2.rotate(a);
        }
        endShape(CLOSE);

    }

    drawXInBox(x,y,wid,hei){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(146, 216, 212);
        textFont('PL Benguiat Frisky');
        noStroke();
        textSize(wid - 20);
        text("x", x , y - (wid - 20) / 2 );

    }

    drawPlusInBox(x,y,wid,hei){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(146, 216, 212);
        textFont('PL Benguiat Frisky');
        noStroke();
        textSize(wid - 20);
        text("+", x , y - (wid - 20) / 2 );
        
    }

    drawSquareInBox(x,y,wid,hei,shape){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(228,243,243);
        strokeWeight(5);
        stroke(146, 216, 212);
        this.drawRectangleAtCenter(x,y,shape,shape);
        noStroke();
        // fill(228,243,243);
        // this.drawRectangleAtCenter(x,y, shape * 11 / 12, shape * 11 / 12);

    }


    drawTriangleInBox(x,y,wid,hei,shape){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(228,243,243);
        strokeWeight(5);
        stroke(146, 216, 212);
        this.drawTriangleCenterAt(x,y,shape);
        noStroke();

    }

    drawStarInBox(x,y,wid,hei,shape){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(146, 216, 212);
        this.drawStarCenterAt(x,y,shape);
        fill(228,243,243);
        this.drawStarCenterAt(x,y, shape * 9 / 12, shape * 9 / 12);

    }

    drawCircleInBox(x,y,wid,hei,shape){

        fill(228,243,243);
        this.drawFlippedBox(x,y,wid,hei);
        fill(228,243,243);
        strokeWeight(5);
        stroke(146, 216, 212);
        circle(x,y,shape);
        noStroke();
    }


    isInside(x,y){
        return (this.x - this.wid / 2 <= x && x <= this.x + this.wid/2 && this.y - this.hei / 2 <= y && y <= this.y + this.hei/2); 
    }

    draw(){
        if (!this.state)
            this.drawBox(this.x, this.y, this.wid, this.hei);
        else {
            switch(this.type){
                case 1:
                    this.drawXInBox(this.x, this.y, this.wid, this.hei);
                    break;
                case 2:
                    this.drawPlusInBox(this.x, this.y, this.wid, this.hei);
                    break;
                case 3:
                    this.drawSquareInBox(this.x, this.y, this.wid, this.hei, this.shape);
                    break;
                case 4:
                    this.drawTriangleInBox(this.x, this.y, this.wid, this.hei, this.shape);
                    break;
                case 5:
                    this.drawStarInBox(this.x, this.y, this.wid, this.hei, this.shape);
                    break;
                case 6:
                    this.drawCircleInBox(this.x, this.y, this.wid, this.hei, this.shape);
                    break;
                default:
                    break;
            }
        }

        if (selected.length < 2 && this.canBeFlip && isMouseClicked && this.isInside(mouseX,mouseY))
            this.fliped();
    }

    fliped() {
        if(this.state == true){
            this.state = false;
        } else {
            this.state = true;
        }
        selected.push(this);
    }
}


