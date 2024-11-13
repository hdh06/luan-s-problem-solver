class exButton{
    constructor(x, y, xLen, yLen, buttonText, toPageNumber){
        this.x = x;
        this.y = y;
        this.xLen = xLen;
        this.yLen = yLen;
        this.buttonText = buttonText;
        this.toPageNumber = toPageNumber;
    }

    isMouseInBorder(){
        return ((mouseX >= this.x) && (mouseX <= this.x + this.xLen) && (mouseY >= this.y) && (mouseY <= this.y + this.yLen));
    }

    draw(){
        noStroke();
        fill("white");
        rect(this.x + this.yLen / 2, this.y, this.xLen - this.yLen, this.yLen);

        circle(this.x + this.yLen / 2, this.y + this.yLen / 2, this.yLen);
        circle(this.x + this.xLen - this.yLen / 2, this.y + this.yLen / 2, this.yLen);

        textSize(20);
        fill("black");
        textFont('PL Benguiat Frisky');
        textAlign(CENTER, CENTER);
        text(this.buttonText, this.x, this.y, this.xLen, this.yLen);

        // console.log(this.isMouseInBorder());

        // text("mouse", mouseX, mouseY);

        if (mouseIsPressed && this.isMouseInBorder()){
            pageNumber = this.toPageNumber;
        }
    }


}

let buttonPage1;
let buttonPage2;
let buttonPage3;
function setupHomePage(){
    // buttonPage1 = createButton("page1");
    // buttonPage1.hide();
    // buttonPage1.mouseClicked(function(){
    //     pageNumber = 1;
    //     buttonPage1.hide();
    // });
    // buttonPage1.size(100, 100);
    // buttonPage1.position(100, 100); 

    buttonPage1 = new exButton(w/2, h/2 + -60, 1/4 * w, 65, "Exercise 1", 1);
    buttonPage2 = new exButton(w/2, h/2 + 20, 1/4 * w, 65, "Exercise 2", 2);
    buttonPage3 = new exButton(w/2, h/2 + 100, 1/4 * w, 65, "Exercise 3", 3);
}

function drawHomePage(){
    // buttonPage1.show();
    // background(146, 216, 212);
    // textsize(50);
    // text('Luans problem solver', 200, 200);
    textSize(100);
    textAlign(CENTER);
    textFont('PL Benguiat Frisky');
    textStyle(BOLD);
    fill(208,172,100);
    text('Luans problem solver',w / 2, h / 3);
  
    textSize(100);
    textAlign(CENTER);
    textFont('PL Benguiat Frisky');
    textStyle(BOLD);
    fill('white');
    text('Luans problem solver',w / 2 - 10, h / 3 - 10);
  
    // stroke('white');
    // fill("yellow");
    // rect(w/2, h/2 + -60, 1/4 * w, 65);
    // rect(w/2, h/2 + 20, 1/4 * w, 65);
    // rect(w/2, h/2 + 100, 1/4 * w, 65);

    // image(homeButtonIcon, 0, 0, 100, 100, 0, 0, homeButtonIcon.width, homeButtonIcon.height);

    buttonPage1.draw();
    buttonPage2.draw();
    buttonPage3.draw();
}