class Player {
  constructor(x, y, walls) {
    this.pos = createVector(x, y);
    this.walls = walls;
    this.rays = [];
    for (let i = 0; i < 360; i += 10) {
      this.rays.push(new Ray(this.pos, radians(i)));
    }
  }

  update() {
    this.pos.x = mouseX;
    this.pos.y = mouseY;

    for (let ray of this.rays) {
      ray.pos = this.pos;
      ray.show();

      // determine closest wall
      let closest = null;
      let record = Infinity;
      for (let wall of this.walls) {
        const pt = ray.intersect(wall);
        if (pt) {
          const d = p5.Vector.dist(this.pos, pt);
          if (d < record) {
            record = d;
            closest = pt;
          }
        }
      }
      if (closest) {
        stroke(230, 216, 12);
        line(this.pos.x, this.pos.y, closest.x, closest.y);
      }
    }
  }
}