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
    String() {return `(${this.x}, ${this.y}`}
}

let answer = document.querySelector("input").value;



function Create_Question(){
    const r = Math.floor(Math.random() * 5);
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    let q = new vec2(num1,num2);

    const num3 = Math.floor(Math.random() * 100);
    const num4 = Math.floor(Math.random() * 100);
    let w = new vec2(num1,num2);
    let res = 0;
    let opper = "";
    switch (r){
        case 0:
            res = q.add(w);
            opper = "added";
            break;
        case 1:
            res = q.sub(w);
            opper = "Subtracted";
            break;
        case 2:
            res = q.mul(w);
            opper = "Multiplied";
            break;
        case 3:
            res = q.div(w);
            opper = "divided";
            break;
        case 4:
            res = q.dot(w);
            opper = "dot";

        // case 5:
        //     opper = "Length"
        //     res = q.length();
        //     break;
    }
    document.getElementById("question").innerText = `${q.String()} ${opper} ${w.String()}`;
    return answer;
}
alert(Create_Question());

