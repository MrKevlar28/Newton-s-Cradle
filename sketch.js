
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,200,600,30);
	bob1 = new Bob(250,400,35);
	bob2 = new Bob(320,400,35);
	bob3 = new Bob(390,400,35);
	bob4 = new Bob(460,400,35);
	bob5 = new Bob(530,400,35);
	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  
  drawSprites();
 
}



