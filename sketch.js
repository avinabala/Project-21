var canvas;
var music;
var box
var surface1, surface2, surface3, surface4

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(660,600);

    //create 4 different surfaces
    surface1 = createSprite(65,580,120,20)
    surface1.shapeColor = "blue"

    surface2 = createSprite(240,580,120,20)
    surface2.shapeColor = "yellow"

    surface3 = createSprite(415,580,120,20)
    surface3.shapeColor = "pink"

    surface4 = createSprite(590,580,120,20)
    surface4.shapeColor = "green"

    //create box sprite and give velocity
    box = createSprite(300,300,40,40)
    box.shapeColor = "white"
    box.velocityX = 5
    box.velocityY = 5


}

function draw() {
    background("black")
    text(mouseX + ',' + mouseY, 10,45)

    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);


    //add condition to check if box touching surface and make it box

    if (surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor = "blue"
        music.play();
    } 
    if (surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor = "yellow" 
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();  
    }
    if (surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor = "pink"
        music.play();
    } 
    if (surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor = "green"  
        music.play();  
    }

    drawSprites();
}
