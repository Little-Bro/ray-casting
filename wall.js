class Wall {
  constructor(x1, y1, x2, y2) {
    this.origin = createVector(x1, y1);
    this.end = createVector(x2, y2);
  }
  show() {
    stroke(255);
    line(this.origin.x, this.origin.y, this.end.x, this.end.y);
  }
}