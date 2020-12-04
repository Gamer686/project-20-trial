var car, wall;
var speed,weight,rating;
var deformation;
var state ="Present"

function setup() {
 createCanvas(1600,400);
  wall =createSprite(1500, 200, 60, height/2);
 wall.shapeColor=color(80,80,80);
 car = createSprite(50,200,50,50);
 }

function draw() {
  background("black");  

  if(state==="Present"){
    textSize(20);
    fill("white");
 text("press Space Bar.",600,50);
  }
 if(keyDown("space")){
   state="running";
 }
  
  if(state==="running"){
  height = Math.round(random(55,70));
 

    car.velocityX = speed;
   if( car.collide(wall)){
     (state="end")
   }
  
    if(wall.x-car.x<wall.width/2+ car.width/2){
    car.velocityX=0;
    deformation=Math.round(0.5*weight*speed*speed/22500);
    speed=Math.round(random(55,90));
    weight=Math.round(random(400,1500));
  }

   
   // state="end"
  }
if(state==="end"){
  if(deformation>= 100){
    car.shapeColor="green"
    rating="BAD";
  }
  if(deformation< 100 && deformation>=180){
    car.shapeColor="yellow"
    rating="AVERAGE";
  }
  if(deformation< 180){
    car.shapeColor="red"
    rating="GOOD";
  }
  if(deformation>=100){
    fill("green");
  }
  if(deformation< 100 && deformation>=180){
    fill("yellow");
    }
    if(deformation< 180){
      fill("red");
    }
    
    textSize(20);
text("speed:"+speed+"km/h",200,50);
text("weight:"+weight+"kg",400,50);
text("Deformation:"+deformation,600,50);

textSize(25);
text("rating:"+rating,800,50);

text("press 'R' to reset",150,50);
if(keyDown("r")){
  reset();
}
}

 drawSprites();
}

function reset(){
  state="Present"
  car.x=50;
  car.shapeColor=color(127,127,127);
}

