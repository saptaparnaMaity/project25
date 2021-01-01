const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
var dustbin1,ground;
function preload(){

}

	

function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);
    

	
	engine = Engine.create();
	world = engine.world;

  
    paper = new Paper(100,658);
    dustbin1= new Dustbin(680,650,150,150);
    
ground= new Ground(450,660,900,10);
       

	 
	
	
	 Engine.run(engine);
  
}


function draw() {
    rectMode(CENTER);
  background("white");
  keyPressed();
 
  
 paper.display();
 ground.display();
 dustbin1.display();
 
 drawSprites();
 
}

function keyPressed() {
 if (keyWentDown(UP_ARROW)) {
    Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-140});

    
  }
}





