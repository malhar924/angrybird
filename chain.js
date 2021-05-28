class Chain{
    constructor(bodyA,bodyB){
        var newLog = {
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
    this.chain = Matter.Constraint.create(newLog);
    World.add(world,this.chain);}
    display(){
        var a = this.chain.bodyA.position;
        var b = this.chain.bodyB.position;
        strokeWeight(4);
        line(a.x,a.y,b.x,b.y);}
    }