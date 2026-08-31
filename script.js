class vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(v) { return new vec2(this.x + v.x, this.y + v.y); }
    a(v) { return new vec2(this.x + v, this.y + v); }
    sub(v) { return new vec2(this.x - v.x, this.y - v.y); }
    s(v) { return new vec2(this.x - v, this.y - v); }
    mul(v) { return new vec2(this.x * v.x, this.y * v.y); }
    m(v) { return new vec2(this.x * v, this.y * v); }
    div(v) { return new vec2(this.x / v.x, this.y / v.y); }
    d(v) { return new vec2(this.x / v, this.y / v); }
    dot(v) { return this.x * v.x + this.y * v.y; }
    length() { return Math.sqrt(this.dot(this)); }
    normalize() { const l = this.length(); return new vec2(this.x / l, this.y / l); }
}


