var thickness,wall;

var bullet,speed,weight;





function setup() {
  createCanvas(1600,400);
 bullet= createSprite(50, 200, 150, 50);
 wall= createSprite(1200,200,thickness,height/2)

thickness=random(22,83)
  speed=random(223,321)
  weight=random(30,52)
}

function draw() {
  background(12,11,11);  
  wall.shapeColor=color(80,80,80)
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness * thickness *thickness)

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }
  
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x +bullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}


  

