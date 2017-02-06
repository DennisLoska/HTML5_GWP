'use strict';
var BRICK_WIDTH = 40;
var BRICK_HEIGHT = 20;
var BRICK_ROWS = 3;
var BRICK_COLS = 8;

var canvas;
var context;
var ball;
var paddle;
var bricks = [];
var timer;


function Ball(mapWidth, mapHeight) {
    this.mapWidth = mapWidth;
    this.mapHeight = mapHeight;
    this.radius = 10;
    this.speedX = 3;
    this.speedY = -3;
    this.cx = Math.floor(mapWidth / 2)
    this.cy = mapHeight - 100;
    this.color = "green";
    this.running = true;
}
// bounce off the wall
Ball.prototype.update = function () {
        if (this.running) {
            this.cx += this.speedX;
            this.cy += this.speedY;
            if (this.cx - this.radius < 0 || this.cx + this.radius > this.mapWidth)
                this.speedX = -this.speedX;
            if (this.cy - this.radius < 0)
                this.speedY = -this.speedY;
            else if (this.cy + this.radius > this.mapHeight) {
                this.running = false;
                alert("GAME OVER");
                document.location.reload();
            }
        }
    }
    //create the ball
Ball.prototype.draw = function (context) {
    context.beginPath();
    context.fillStyle = this.color;
    context.arc(this.cx, this.cy, this.radius, 0, Math.PI * 2, true)
    context.closePath();
    context.fill();
}

//when the ball move and collide with rect
Ball.prototype.collide = function (rect) {
    if (!this.running)
        return;
    var p = {
        x: this.cx,
        y: this.cy
    };
    if (p.x < rect.left)
        p.x = rect.left;
    else if (p.x > rect.right)
        p.x = rect.right;
    if (p.y < rect.top)
        p.y = rect.top;
    else if (p.y > rect.bottom)
        p.y = rect.bottom;

    var dx = this.cx - p.x;
    var dy = this.cy - p.y;
    var isCollided = (dx * dx + dy * dy) <= this.radius * this.radius;
    if (isCollided) {
        if (p.x == rect.left || p.x == rect.right)
            this.speedX = -this.speedX;
        if (p.y == rect.top || p.y == rect.bottom)
            this.speedY = -this.speedY;
    }
    return isCollided;
}

//create the rectangle
function Rect(left, top, width, height, color) {
    this.MAX_SPEED = 2;
    this.width = width;
    this.height = height;

    this.left = left;
    this.top = top;
    this.right = this.left + width;
    this.bottom = this.top + height;

    this.color = color;
}
Rect.prototype.moveTo = function (x) {
    this.left = x - this.width / 2;
    this.right = this.left + this.width;
}

Rect.prototype.draw = function (context) {
    context.fillStyle = this.color;
    context.fillRect(this.left, this.top, this.width, this.height);
}

function mousemove(move) {
    var x = move.pageX - canvas.offsetLeft;
    paddle.moveTo(x);
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

//draw the brick, ball and rect
function draw() {
    clear();
    for (var i = 0; i < BRICK_ROWS; i++) {
        for (var j = 0; j < BRICK_COLS; j++) {
            if (bricks[i][j])
                bricks[i][j].draw(context);
        }
    }
    ball.draw(context);
    paddle.draw(context);
}

function update() {
    ball.update();
    for (var i = 0; i < BRICK_ROWS; i++) {
        for (var j = 0; j < BRICK_COLS; j++) {
            if (bricks[i][j] && ball.collide(bricks[i][j]))
                bricks[i][j] = null;
        }
    }
    ball.collide(paddle);
    draw();
}

function init() {
    var paddleWidth = 100;
    var paddleHeight = 20;
    canvas = document.getElementById("canvas");
    canvas.onmousemove = mousemove;
    context = canvas.getContext("2d");

    ball = new Ball(canvas.width, canvas.height);
    paddle = new Rect((canvas.width - paddleWidth) / 2, canvas.height - paddleHeight - 20, paddleWidth, paddleHeight, "red")

    bricks = new Array(BRICK_ROWS);
    for (var i = 0; i < BRICK_ROWS; i++) {
        bricks[i] = new Array(BRICK_COLS);
        for (var j = 0; j < BRICK_COLS; j++) {
            bricks[i][j] = new Rect(j * (BRICK_WIDTH + 5) + 10, i * (BRICK_HEIGHT + 5) + 10, BRICK_WIDTH, BRICK_HEIGHT, "blue")
        }
    }
    timer = window.setInterval(update, 800 / 60);
}

/*
window.onload = function(){
    init();
}
*/
