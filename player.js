class Player{
    constructor(x,y,radius){
        var options = {
            'isStatic': false,
            'restitution':0.8,
            'friction':1,
            'density':0.6
        }

        this.radius=radius;

    this.body = Bodies.circle(x,y,radius,options);
    this.color=color(random(0,255),random(0,255),random(0,255))
    World.add(world,this.body);
    }
    display()
    {
        var round =this.body.position;
        var angle = this.body.angle;
        push();   
        ratate (angle);
        fill (this.color);
        ellipseMode(RADIUS);
        ellipse(round.x, round.y, this.radius);
        pop();
    }
    
    }