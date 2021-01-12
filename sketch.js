
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint  = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bob1 = new Bob(200,550,35);
	bob2 = new Bob(270,550,35);
	bob3 = new Bob(340,550,35);
	bob4 = new Bob(410,550,35);
	bob5 = new Bob(480,550,35);

	roof = new Roof(340,200,400,30);

  rope1 = new Rope(bob3.body,roof.body,0,0);
  rope2 = new Rope(bob2.body,roof.body,-70,0);
  rope3 = new Rope(bob1.body,roof.body,-140,0);
  rope4 = new Rope(bob4.body,roof.body,70,0);
  rope5 = new Rope(bob5.body,roof.body,140,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(250);
  
  drawSprites();
 
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
   if(keyCode === LEFT_ARROW){
     Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-720,y:0});
   }
}

