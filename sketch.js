var Engine = Matter.Engine,
var World = Matter.World,
var Events = Matter.Events,
var Bodies = Matter.Bodies;
var gameState = "start";
var gameState = "end";
 
var particles = [];
var plinkos = [];

var divisionHeight = 300;
var score = 0;
var particle;
var turn = 0;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  score.pos.x = 50;
  score.pos.y = 50;

  division1 = new Division(60,600,10,200);
  division2 = new Division(120,600,10,200);
  division3 = new Division(180,600,10,200);
  division4 = new Division(240,600,10,200);
  division5 = new Division(300,600,10,200);
  division6 = new Division(480,600,10,200);


   for (var k = 0; k <= width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");

  textSize(20)
  text("100",85,450);

  textSize(20)
  text("200",150,450);

  textSize(20)
  text("500",220,450);

  textSize(20)
  text("200",270,450);

  textSize(20)
  text("100",340,450);

  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  if(particle===null)
  {
    particle.display();
     
    if(particle.body.position.y>760)
    {
      if(particle.body.position < 300)
      {
        score = score + 500;
        particle = null;
        if(count >= 5) gameState = "end";
      }
    }
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(turn === 5)
   {
     gameState = "end";
   }

   if(gameState = "end")
   {
     textSize(40)
     text("Game Over", 400,400);
   }


}

function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}