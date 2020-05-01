const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint; 

var world,engine;
var box1,box2,box3,box4,box5,box6,box7,box,box9,box10,box11
var platform,platform2,platform3;
var ball;
var chain;

function setup(){
createCanvas(900,600)
engine = Engine.create();
world = engine.world;

box1=new Box(667,373,30,30);

box2=new Box(698,373,30,30,);
box3=new Box(637,373,30,30);
box4=new Box(610,373,30,30);
box5=new Box(682,342,30,30);
box6=new Box(651,342,30,30);
box7=new Box(620,342,30,30);
box8=new Box(665,310,30,30);
box9=new Box(634,310,30,30);
box10=new Box(650,279,30,30);



platform=new Platform(780,400,400,20);
platform2=new Platform(400,590,1000,25);



ball=new Ball(100,425,25,25)

chain=new Slingshot(ball.body,{x:80,y:450})

}
function draw(){
  Engine.update(engine);
  background("black");
  platform.display();
  platform2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  
  ball.display();
}
  function mouseReleased() {
    chain.fly();
}
function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}