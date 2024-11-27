class iconObj{

    constructor(x, y, Size, type) {
        this.x = x;
        this.y = y;
        this.Size = Size; 
        this.color = color;
        this.type = type;
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
                this.icon = "";
                break;       
        
        }
    }

    draw() {
        push();
        fill("white");
        noStroke();
        translate(this.x,this.y);
        textSize(this.Size);
        text(this.icon, 0, 0);
        // fill("red");
        // rect(0, 0, 100, 100);
        pop();

    }


}

class answerBox{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.box = createInput();
        this.box.id("Box");
        this.box.position(x, y);
        this.box.hide();
    }

    setId(Id){
        this.box.id(Id);
    }

    show(){
        this.box.show();
    }
    hide(){
        this.box.hide();
    }
    
    Value(){
        return this.box.value();
    }
}

let iconCount = [];

class answerForm{
    constructor(x, y, areaW, areaH, type){
        this.x = x;
        this.y = y;
        this.box = new answerBox(x + areaW / 4 - 50 + areaW / 2, y);
        this.icon = new iconObj(x + areaW / 4 - 50 + areaW / 2 - 100, y + 20, 100, type);
    }

    draw(){
        this.box.show();
        this.icon.draw();
    }

    check(){
        // console.log(this.box.Value(), iconCount[this.icon.type], this.icon.type);
        if (this.box.Value() == ""){
            this.box.setId("Box");
        }else if (this.box.Value() == iconCount[this.icon.type]){
            this.box.setId("Box_OK");
        }else{
            this.box.setId("Box_WA");
        }
    }

    hide(){
        this.box.hide();
    }
}

let anwserForms = [];
let icons = [];




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
    // icon1 = new iconObj(random(pos1X + area1W / 10, pos1X + area1W - area1W / 10), random(pos1Y + area1W / 10, pos1Y + area1H - area1W / 10), area1W / 10, 0);

    for (let i = 0; i < 4; i++){
        // inputBox[i] = createInput();
        // inputBox[i].id("Box");
        // inputBox[i].position(pos2X + area2W / 4 - 50 + 1 * area2W / 2, pos2Y + area2H / 8 - 50 + i * area2H / 4);
        // inputBox[i].hide();    
        iconCount[i] = 0;
        anwserForms[i] = new answerForm(pos2X, pos2Y + area2H / 8 - 50 + i * area2H / 4, area2W, area2H, i);
    }

    for (let i = 0; i < 7; i++){
        icons[i] = [];
        for (let j = 0; j < 4; j++){
            let type = random(0, 4) | 0;
            let size =  area1W / 7 * 0.5;
            let x = random(pos1X + i * area1W / 7 + size / 2, pos1X + (i + 1) * area1W / 7 - size / 2);
            let y = random(pos1Y + j * area1H / 4 + (j == 0? size / 2: 0), pos1Y + (j + 1) * area1H / 4 - size);
            icons[i][j] = new iconObj(x, y, size, type);
            // console.log(x, y, type);
            iconCount[type]++;
        }
    }
    
}

function endPage2(){
    for (let i = 0; i < 4; i++)
            anwserForms[i].hide();
}

function drawPage2(){
    backHomeButton.draw();    

    for (let i = 0; i < 4; i++){
        anwserForms[i].draw();
    }

    for (let i = 0; i < 4; i++){
        anwserForms[i].check();
    }

    for (let i = 0; i < 7; i++)
        for (let j = 0; j < 4; j++) 
            icons[i][j].draw();
    //frame
    noFill();
    stroke(215,172,99);
    strokeWeight(3);

    rect(borderW, borderH, wRec, hRec);
    rect(pos1X, pos1Y, area1W, area1H);
    rect(pos2X, pos2Y, area2W, area2H);


    //text
    textSize(50);
    textFont('PL Benguiat Frisky');
    fill(215,172,99);
    textAlign(CENTER, TOP);
    text("Count the shapes", w/2, 30); //text

}