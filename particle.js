function Particle(x, y, exploded =false )
{
    this.exploded = exploded;
    this.pos = createVector(x, y);
    this.lifespan = 255;
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    if (!exploded) {
        this.vel = createVector(0, random(-5, -12));
    } else {
        this.vel = p5.Vector.random2D();
        this.vel.x *= random(random(2), random(3, 10));
        this.vel.y *= random(random(2), random(3, 10));
    }
    this.acc=createVector(0,0);

    this.applyForce= function(force)
    {
        this.acc.add(force);
    }
    this.update= function()
    {
        if (this.exploded)
        {
            this.vel.mult(0.95);    
            this.lifespan -= 4;
        }
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
    }
    this.show =function()
    {
        if (this.exploded) {
            strokeWeight(2);
            stroke(color(this.r, this.g, this.b), this.lifespan);   
        } else {
            strokeWeight(4);
            stroke(255);
        }
        point(this.pos.x,this.pos.y);
    }
    this.done=function ()
    {
        return this.lifespan < 0;
    }
}