var canvas ;
var music ;
var edge ;
var movingBox;
var surface1 , surface2 , surface3 , surface4 ; 


function preload(){

    music = loadSound("music.mp3");

}


function setup(){

    canvas = createCanvas(800,600);

    movingBox = createSprite(random(20,750));
    movingBox.shapeColor = "white";
    movingBox.velocityY=4;
    movingBox.velocityY=9;

    surface1 = createSprite(700,580,140,20);
    surface2 = createSprite(520,580,140,20);
    surface3 = createSprite(340,580,140,20);
    surface4 = createSprite(160,580,140,20);

}

function draw() {

    background(0,0,0);

    edge = createEdgeSprites();
    movingBox.bounceOff(edge);

    music.play();

    surface1.shapeColor = "yellow";
    surface2.shapeColor = "green";
    surface3.shapeColor = "red";
    surface4.shapeColor = "blue";

    
    if (surface1.isTouching(movingBox) && movingBox.bounceOff(surface1)) {

       movingBox.shapeColor = "yellow";
       
       music.stop();
       
    }

    
    if (surface2.isTouching(movingBox) && movingBox.bounceOff(surface2)) {

        movingBox.shapeColor = "green";
        movingBox.velocityX=0;
        music.stop();

     }

     if (surface3.isTouching(movingBox) && movingBox.bounceOff(surface3)) {

        movingBox.shapeColor = "red";
        movingBox.velocityX=0;
      
        music.stop();

     }

     if (surface4.isTouching(movingBox) && movingBox.bounceOff(surface4)) {

        movingBox.shapeColor = "blue";
        movingBox.velocityX=0;
        music.stop();

     }

  drawSprites();
}
