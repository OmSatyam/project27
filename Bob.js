class Bob{
   constructor(x,y,radius){
     var options = {
        'isStatic': false,
        'restitution':1,
        'friction':0
        
     }  
   this.body = Matter.Bodies.circle(x,y,radius,options);
   this.radius = radius;
   World.add(world,this.body);
   }

display(){
    var pos = this.body.position;
    fill("pink");
    push();
    translate(pos.x,pos.y);
    ellipseMode(RADIUS);   
    ellipse(0,0,this.radius,this.radius);
    pop();
}
}