let h, w;

let backgroundColor = [146, 216, 212]
let strokeColor = [215, 172, 99]

function drawHomePage(){

}

function drawPage2(){

}

function drawPage3(){

}

function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);

  setupHomePage();
  setupPage1();
  setupPage2();
  setupPage3();
}

let pageNumber = 0;
// x = 100, y = 100

function draw() {
  background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  switch(pageNumber){
    case 0:
      drawHomePage();
      break;
    case 1:
      drawPage1();
      break;
    case 2:
      drawPage2();
      break;
    case 3:
      drawPage3();
      break;
    default:
      drawHomePage();
      break;
  }

    background(146, 216, 212);
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

    stroke('white');
    rect(w/2, h/2 + -60, 1/4 * w, 65);
    rect(w/2, h/2 + 20, 1/4 * w, 65);
    rect(w/2, h/2 + 100, 1/4 * w, 65);



}
