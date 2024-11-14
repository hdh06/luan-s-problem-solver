class iconObj{

    constructor(x, y, Size, type) {
        this.x = x;
        this.y = y;
        this.Size = Size; 
        this.angle = random(-PI / 2, PI / 2);

        this.icon = "";

        switch(type){
            case 0:
                this.icon = "♥";
                break;
            case 1:
                this.icon = "♦";
                break;
            case 2:
                this.icon = "♣";
                break;
            case 3:
                this.icon = "♠";
                break;
            default:
                this.icon = "...";
                break;       
        
        }
    }

    draw() {

        push();
        fill("white");
        noStroke();
        translate(this.x,this.y);
        rotate(this.angle);
        textSize(this.Size);
        text(this.icon, 0, 0);
        pop();

    }


}

let icon1;

function setupPage2(){
    borderW = 60;
    borderH = 90;
    wRec = w - 2 * borderW;
    hRec = h - 2 * borderH;
    padding = 15;

    area1W = wRec / 10 * 6.5 - 2 * padding;
    area1H = hRec - 2 *  padding;
    pos1X = borderW + padding;
    pos1Y = borderH + padding;

    area2W = wRec / 10 * 3.5 - padding;
    area2H = area1H;
    pos2X = borderW + wRec / 10 * 6.5;
    pos2Y = pos1Y;  
    icon1 = new iconObj(random(pos1X + area1W / 10, pos1X + area1W - area1W / 10), random(pos1Y + area1W / 10, pos1Y + area1H - area1W / 10), area1W / 10, 0);

}

function drawPage2(){
    backHomeButton.draw();    

    //frame
    noFill();
    stroke(215,172,99);
    strokeWeight(3);

    rect(borderW, borderH, wRec, hRec);
    rect(pos1X, pos1Y, area1W, area1H);
    rect(pos2X, pos2Y, area2W, area2H);


    icon1.draw();


    //text
    textSize(50);
    textFont('Verdana');
    fill(215,172,99);
    textAlign(CENTER, TOP);
    text("Count the shapes", w/2, 30); //text

}