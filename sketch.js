const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;




var engine, world;

var players=[];
var divisions=[];
var plinkos=[];

var divisionHeight=[];



function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;


    for(var k=0;k<=width;k=k+80){

      divisionHeight.push(new Division (k,height-divisionHeight/2,
        10,divisionHeight))
      }
      
      for(var j=40;j<=width;j=j+50){
        plinkos.push(new Plinko(j,75));
      }

      if (frameCount%60===0){
        players.push(new players(random(width/2-10,width/2+10,10,10)));
      }
    
    for(var j=15;j<=width-10;j=j+50){
      plinkos.push(new Plinko(j,175));
    }

ground = new Ground (240,470,480,25);




}

function draw() {
  background("lightblue");  

  

 



for(var k=40;k<divisions.length;k++){
  divisions[k].display();
}

for(var j=40;j<players.length;j++){
  players[j].display();
}


drawSprites();
  Engine.update(engine);
 
  
  

ground.display();


}