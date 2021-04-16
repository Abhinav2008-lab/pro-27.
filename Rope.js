class Rope{
    constructor(bodyA,bodyB,xoffset){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB:{x:xoffset,y:0}
            //stiffness : 0.04,
            //length : 10
        }
        this.rope = Constraint.create(options);
        this.xoffset = xoffset;
        World.add(world, this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        stroke("blue");
        strokeWeight(3);

        line(pointA.x,pointA.y,pointB.x + this.xoffset,pointB.y);
    }
}