
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	Engine.run(engine);
	b1=new bob(200,200,10)
	base1=new base(200,200,50,50)
	constraint1=new constraintt(base1,{x:200,y:200})
	r=new rope(200,200)
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  b1.display();
  base1.display();
  c1.display();
  r.display();
  drawSprites();
 
}



