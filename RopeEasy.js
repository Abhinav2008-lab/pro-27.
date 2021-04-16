class RopeEasy{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB
        }
        this.ropeeasy = Constraint.create(options);
        World.add(world, this.ropeeasy);
    }
    display(){
        var pointA = this.ropeeasy.bodyA.position;
        var pointB = this.ropeeasy.pointB;

        stroke("green");
        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}