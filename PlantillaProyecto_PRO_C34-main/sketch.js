var sofia;
var cB1,cB2,cB3,cB4,cB5,cB6,cB7,cB8,cB9,cB10,cB11,cB12,cB12,cB13,cB14,cB15,cB16,cB17,cB18,cB19,cB20,cB21;
var target


function preload(){

}

function setup(){
createCanvas(400,400);
//crea el personaje del juego
sofia = createSprite(20, 25, 18, 18);
sofia.shapeColor = "purple";
sofia.velocityX = 0;
sofia.velocityY = 0;
 
//crea el laberinto
cB1 = createSprite(10, 70, 100, 20);
cB1.shapeColor = "brown";

cB2 = createSprite(100, 50, 20, 100);
cB2.shapeColor = "brown";

cB3 = createSprite(75, 135, 100, 20);
cB3.shapeColor = "brown";

cB4 = createSprite(150, 40, 100, 20);
cB4.shapeColor = "brown";

cB5 = createSprite(160, 140, 20, 100);
cB5.shapeColor = "brown";

cB6 = createSprite(250, 90, 20, 100);
cB6.shapeColor = "brown";

cB7 = createSprite(325, 70, 100, 20);
cB7.shapeColor = "brown";

cB8 = createSprite(340, 145, 20, 100);
cB8.shapeColor = "brown";

cB9 = createSprite(260, 170, 100, 20);
cB9.shapeColor = "brown";

cB10 = createSprite(0, 250, 100, 20);
cB10.shapeColor = "brown";

cB11 = createSprite(50, 250, 20, 100);
cB11.shapeColor = "brown";

cB12 = createSprite(140, 225, 100, 20);
cB12.shapeColor = "brown";

cB13 = createSprite(350, 225, 175, 20);
cB13.shapeColor = "brown";

cB14 = createSprite(225, 265, 20, 100);
cB14.shapeColor = "brown";

cB15 = createSprite(175, 305, 100, 20);
cB15.shapeColor = "brown";

cB16 = createSprite(250, 390, 100, 20);
cB16.shapeColor = "brown";

cB17 = createSprite(340, 145, 20, 100);
cB17.shapeColor = "brown";

cB18 = createSprite(350, 285, 100, 20);
cB18.shapeColor = "brown";

cB19 = createSprite(330, 370, 20, 100);
cB19.shapeColor = "brown";

cB20 = createSprite(90, 325, 20, 100);
cB20.shapeColor = "brown";

cB21 = createSprite(150, 350, 20, 100);
cB21.shapeColor = "brown";

target = createSprite(395, 375, 10, 50);
target.shapeColor = "yellow";



}

function draw() {
background("black");

if(sofia.bounce(target)){
    textSize(40);
    fill("red");
    text("¡Ganaste!", 130, 200);
}

if(keyDown("UP_ARROW")){
    sofia.velocityX = 0
    sofia.velocityY = -4;
}

if(keyDown("DOWN_ARROW")){
    sofia.velocityX = 0;
    sofia.velocityY = 4;
}

if(keyDown("RIGHT_ARROW")){
    sofia.velocityX = 4;
    sofia.velocityY = 0; 
}

if(keyDown("LEFT_ARROW")){
    sofia.velocityX = -4;
    sofia.velocityY = 0;
    
}

if(sofia.bounce(target)){
    textSize(40);
    fill("red");
    text("¡Ganaste!", 130, 200);
}

sofia.bounceOff(cB1);
sofia.bounceOff(cB2);
sofia.bounceOff(cB3);
sofia.bounceOff(cB4);
sofia.bounceOff(cB5);
sofia.bounceOff(cB6),
sofia.bounceOff(cB7);
sofia.bounceOff(cB8);
sofia.bounceOff(cB9);
sofia.bounceOff(cB10);
sofia.bounceOff(cB11);
sofia.bounceOff(cB12);
sofia.bounceOff(cB13);
sofia.bounceOff(cB14);
sofia.bounceOff(cB15);
sofia.bounceOff(cB16);
sofia.bounceOff(cB17);
sofia.bounceOff(cB18);
sofia.bounceOff(cB19);
sofia.bounceOff(cB20);
sofia.bounceOff(cB21);
sofia.collide(target);

textSize(19);
text("Copa", 350, 340);
textSize(19);
text("Sofia", 30, 43);

drawSprites()

}
