const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var boxes = [];
var ground, ground1, ground2, ground3;

function setup() {
    createCanvas(400, 400);
    rectMode(CENTER);
    engine = Engine.create();
    world = engine.world;


    // Ground
    var groundOptions = {isStatic: true};
    ground = Bodies.rectangle(200, 375, 400, 50, groundOptions);
    World.add(world, ground);

}

function draw() {
    background(0);
    Engine.update(engine);

    for(i = 0; i < boxes.length; i++) {
        boxes[i].show();
    }

    engine.gravity = {x: 0, y: 1}
}

function mouseDragged() {
    boxes.push(new Box(mouseX, mouseY, 10, 10))
}