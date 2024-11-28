let h, w;

let backgroundColor = [146, 216, 212]
let strokeColor = [215, 172, 99]

function setup() {
  h = windowHeight, w = windowWidth;
  createCanvas(w, h);

  setUpHomeButtonIcon();
  setupHomePage();
  setupPage1();
  setupPage2();
  setupPage3();
}

let pageNumber = 3;
// x = 100, y = 100

function draw() {
  background(backgroundColor[0], backgroundColor[1], backgroundColor[2]);
  console.log(pageNumber);
  endPage2();
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
}

isMouseClicked = false;

function mouseClicked() {
  if (pageNumber == 3){
    isMouseClicked = true;
  }


}
