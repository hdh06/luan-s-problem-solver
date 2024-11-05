let buttonPage1;

function setupHomePage(){
    buttonPage1 = createButton("page1");
    buttonPage1.mouseClicked(function(){
        pageNumber = 1;
        buttonPage1.hide();
    });
    buttonPage1.size(100, 100);
    buttonPage1.position(100, 100); 
}

function drawHomePage(){
    buttonPage1.show();
}