let homeButtonIcon;
let backHomeButton;

function setUpHomeButtonIcon(){
    homeButtonIcon = loadImage("images/home.png");

    backHomeButton = new homeButton(0, 0);
}

class homeButton{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(){
        // stroke("black"); //clickable area check -> 25 25 52 52
        // rect(25, 25, 52, 52);
        image(homeButtonIcon, this.x, this.y, 100, 100, 0, 0, homeButtonIcon.width, homeButtonIcon.height);

        if (mouseIsPressed && mouseX >= this.x + 25 && mouseX <= this.x + 25 + 52 && mouseY >= this.y + 25 && mouseY <= this.y + 25 + 52){
            pageNumber = 0;
        }
    }
}


