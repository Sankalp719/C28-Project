class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 12
        }
        this.slingshot = Constraint.create(options);
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA=null
    }

    display(){
        if(this.slingshot.bodyA){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.pointB;
       
        strokeWeight(4);
        console.log(line);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}