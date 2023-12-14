/**
 @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas3");
const ctx = canvas.getContext("2d");

const CANVAS_WIDTH = (canvas.width = 500);
const CANVAS_HEIGHT = (canvas.height = 1000);

// const enemyImage = new Image();
// enemyImage.src = "enemies/enemy1.png";

let gameFrame = 0;

// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };
class Enemy {
  constructor() {
    this.image = new Image();
    this.image.src = "enemies/enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    // this.angle = Math.random() * 2;
    this.angle = 0;
    this.angleSpeed = Math.random() * 2 + 0.5;
    this.curve = Math.random() * 200 + 50;
  }
  update() {
    this.x =
      this.curve * Math.sin((this.angle * Math.PI) / 360) +
      canvas.width / 2 -
      this.width / 2;
    this.y =
      this.curve * Math.cos((this.angle * Math.PI) / 180) +
      canvas.height / 2 -
      this.height / 2;
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas.width;
    }

    // animate sprite
    if (gameFrame % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx.strokeRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      this.image,
      this.frame * this.spriteWidth,
      0,
      this.spriteWidth,
      this.spriteHeight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
}

// const enemy1 = new Enemy();
const no_of_enemy = 10;
const enemyArray = [];
for (let i = 0; i < no_of_enemy; i++) {
  enemyArray.push(new Enemy());
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  //   enemy1.update();
  //   enemy1.draw();
  enemyArray.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame++;
  requestAnimationFrame(animate);
}

animate();
