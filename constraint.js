class constraintt{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.con = Matter.Constraint.create(options);
        World.add(world, this.con);
    }
    chain

    display(){
        var pointA = this.con.bodyA.position;
        var pointB = this.con.bodyB.position;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    
}