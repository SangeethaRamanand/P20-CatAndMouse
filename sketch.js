var garden
var cat, catImg1, catImg2, catImg3;
var mouse, mouseImg1, mouseImg2, mouseImg3;



function preload() {
    //load the images here
    garden = loadImage("garden.png")

    catImg1 =  loadAnimation("cat1.png");
    catImg2 = loadAnimation("cat2.png", "cat3.png");
    catImg3 = loadAnimation("cat4.png");

    mouseImg =  loadAnimation("mouse1.png");
    mouseImg2 = loadAnimation("mouse2.png", "mouse3.png");
    mouseImg3 = loadAnimation("mouse4.png");
}

function setup(){
    createCanvas(1000,800);

    // create cat and add Image
    cat = createSprite(750,650,50,50);
    cat.addAnimation("cat",catImg1);
    cat.addAnimation("catRunning", catImg2);
    cat.addAnimation("catLastImage", catImg3);
    cat.scale = 0.15;

    // create mouse and add Image
    mouse = createSprite(150,650,50,50);
    mouse.addAnimation("mouse",mouseImg);
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.addAnimation("mouseLastImage", mouseImg3);
    mouse.scale = 0.1;
}

function draw() {

    background(garden);
    //Write condition here to evalute if cat and mouse collide
    keyPressed();
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
       
        cat.changeAnimation("catLastImage");

        
        mouse.scale=0.15;
        mouse.changeAnimation("mouseLastImage");
    } 

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
    cat.velocityX = -5; 
    cat.changeAnimation("catRunning");
    
    mouse.changeAnimation("mouseTeasing");
}

}
