let rects = [];

function setupPage3(){
    borderW = 60;
    borderH = 90;
    wRec = w - 2 * borderW;
    hRec = h - 2 * borderH;
    shapeWidth = wRec / 5 - 40;
    shapeHeight = hRec / 2 -40;

    let disW = wRec / 5;
    let disH = hRec / 2;

    for (let i = 0; i < 5; i++){
        rects[i] = new Rect(borderW + disW / 2 + i * disW, borderH + disH / 2, shapeWidth, shapeHeight);
        rects[i+5] = new Rect(borderW + disW / 2 + i * disW, borderH + disH / 2 + disH, shapeWidth, shapeHeight);
    }

}

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
    text("Match the shapes", w/2, 30);
    
    for (let i = 5; i < 10; i++)
        rects[i].draw();
      
      for (let i = 0; i < 5; i++)
        rects[i].draw();

}

class Rect {
    constructor(x,y,wid,hei){
        this.x = x;
        this.y = y;
        this.hei = hei;
        this.wid = wid;
    }

    drawRectangleAtCenter(x,y,wid,hei){
        
        fill(228,243,243);
        stroke(228,243,243);
        rect(x - wid/2,y - hei/2,wid,hei);
        fill(228,243,243);
        stroke(146, 216, 212);
        rect(x - wid/2 + 6,y - hei/2 + 6,wid - 12,hei - 12);

        fill(146, 216, 212);
        textFont('Verdana');
        noStroke();
        textSize(wid - 20);
        text("?", x , y - (wid - 20) / 2 );
        
    }

    draw(){

        this.drawRectangleAtCenter(this.x, this.y, this.wid, this.hei);
    }
}


