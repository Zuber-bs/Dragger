class Box {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        var bodyOptions = {
            restitution: 1,
        }
        this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, bodyOptions);
        World.add(world, this.body);
        Body.setDensity(this.body, 50);
        this.body.angularSpeed = 10;
    }

    show() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);
        rect(0, 0, this.w, this.h);
        pop();
        console.log(this.body);
    }
}