class Ball {
    constructor(x, y,diameter) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,diameter , options);
      this.diameter = diameter;
     
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill("pink");
      ellipse(0, 0, this.diameter, this.diameter);
      pop();
    }
  };
  







