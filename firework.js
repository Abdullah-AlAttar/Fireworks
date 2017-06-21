function FireWork() {
    this.firework = new Particle(random(width), (height));
    this.exploded = false;
    this.particles = [];


    this.done = function ()
    {
        return this.exploded && this.particles.length == 0;
    }    
    this.update = function () {
        if (!this.exploded) {
            this.firework.applyForce(gravity);
            this.firework.update();
            if (this.firework.vel.y >= 0) {
                this.exploded = true;
                this.explode();
            }
        }
        for (var i = this.particles.length-1; i >=0 ; --i) {
            this.particles[i].applyForce(gravity);
            this.particles[i].update();
            if (this.particles[i].done())
            {
                this.particles.splice(i, 1);    
            }
        }
    }
    this.show = function () {
        if (!this.exploded) {
            this.firework.show();
        }
        for (var i = 0; i < this.particles.length; ++i) {
            this.particles[i].show();
        }

    }
    this.explode = function () {
        for (var i = 0; i < 100; ++i) {
            var p = new Particle(this.firework.pos.x, this.firework.pos.y,true);
            this.particles.push(p);
        }
    }
}