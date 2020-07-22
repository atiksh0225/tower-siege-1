var slingshot ;
var platform ;
const World= Matter.World;
const Bodies = Matter.Bodies;
var box1, box2;
var engine, world;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);

  box1 = new Box(330, 235, 30, 40); 
  box2 = new Box(360, 235, 30, 40);

}

function draw() {
  background(255,255,255);  
 
 

 
 box1.display();
 box2.display();
 
 
 
 
  drawSprites();
}