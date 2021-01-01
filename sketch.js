const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;
var pendulum1,pendulum2,pendulum3,pendulum4,pendulum5;
var sling1,sling2,sling3,sling4,sling5;

function setup() {
  createCanvas(1200,800);
  
  engine=Engine.create();
  world=engine.world;
  ground=new Ground(width/2,10,width,20)
  pendulum1=new Pendulum(600,500,"blue")
  pendulum2=new Pendulum(700,500,"blue")
  pendulum3=new Pendulum(800,500,"blue")
  pendulum4=new Pendulum(500,500,"blue")
  pendulum5=new Pendulum(400,500,"blue")
  sling1=new Sling(pendulum1.body,{x:600,y:20})
  sling2=new Sling(pendulum2.body,{x:700,y:20})
  sling3=new Sling(pendulum3.body,{x:800,y:20})
  sling4=new Sling(pendulum4.body,{x:500,y:20})
  sling5=new Sling(pendulum5.body,{x:400,y:20})
  Engine.run(engine);
}

function draw() {
  background("black"); 
  Engine.update(engine);
  pendulum1.display();
  ground.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
}
function mouseDragged(){
  Matter.Body.setPosition(pendulum3.body,{x:mouseX,y:mouseY})
  
}
