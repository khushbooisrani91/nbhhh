class Sling{
   constructor(bodyA,pointB){
    var options={
      bodyA:bodyA,
      pointB:pointB,
      stiffness:1,
      lenght:220
    }
    this.pointB=pointB
    this.sling=Constraint.create(options)
    World.add(world,this.sling)
   }
   fly(){
    this.sling.bodyA=null;
}
attach(body){
   this.sling.bodyA=body
} 
display(){
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position
        var pointB=this.pointB
        push();
        strokeWeight(3.5)
        stroke("#fff")
        fill("white")
        line(pointB.x,pointB.y,pointA.x,pointA.y)
        pop();
    }
}
}