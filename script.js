/**
 @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("canvas1");
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
    this.image.src = "enemies/enemy1.png";
    // this.speed = Math.random() * 4 - 2;
    this.spriteWidth = 293;
    this.spriteHeight = 155;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas.width - this.width);
    this.y = Math.random() * (canvas.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
  }
  update() {
    this.x += Math.random() * 5 - 2.5;
    this.y += Math.random() * 5 - 2.5;

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
const no_of_enemy = 50;
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

//  canvas 2 frame
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

const CANVAS_WIDTH2 = (canvas2.width = 500);
const CANVAS_HEIGHT2 = (canvas2.height = 1000);

let gameFrame2 = 0;

// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };
class Enemy2 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemies/enemy2.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 266;
    this.spriteHeight = 188;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas2.width - this.width);
    this.y = Math.random() * (canvas2.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 0.2;
    this.curve = Math.random() * 7;
  }
  update() {
    this.x -= this.speed;
    this.y += this.curve * Math.sin(this.angle);
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas2.width;
    }

    // animate sprite
    if (gameFrame2 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx2.strokeRect(this.x, this.y, this.width, this.height);
    ctx2.drawImage(
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

const no_of_enemy2 = 50;
const enemyArray2 = [];
for (let i = 0; i < no_of_enemy2; i++) {
  enemyArray2.push(new Enemy2());
}

function animate2() {
  ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2);
  enemyArray2.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame2++;
  requestAnimationFrame(animate2);
}

animate2();

// canvas 3 frame animation
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

const CANVAS_WIDTH3 = (canvas3.width = 500);
const CANVAS_HEIGHT3 = (canvas3.height = 1000);

let gameFrame3 = 0;

// enemy1 = {
//   x: 0,
//   y: 0,
//   width: 200,
//   height: 200,
// };
class Enemy3 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemies/enemy3.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 218;
    this.spriteHeight = 177;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas3.width - this.width);
    this.y = Math.random() * (canvas3.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.angle = 0;
    this.angleSpeed = Math.random() * 2 + 0.5;
    this.curve = Math.random() * 200 + 50;
  }
  update() {
    this.x =
      this.curve * Math.sin((this.angle * Math.PI) / 360) +
      canvas3.width / 2 -
      this.width / 2;
    this.y =
      this.curve * Math.cos((this.angle * Math.PI) / 180) +
      canvas3.height / 2 -
      this.height / 2;
    this.angle += this.angleSpeed;
    if (this.x + this.width < 0) {
      this.x = canvas3.width;
    }

    // animate sprite
    if (gameFrame3 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx3.strokeRect(this.x, this.y, this.width, this.height);
    ctx3.drawImage(
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

const no_of_enemy3 = 10;
const enemyArray3 = [];
for (let i = 0; i < no_of_enemy3; i++) {
  enemyArray3.push(new Enemy3());
}

function animate3() {
  ctx3.clearRect(0, 0, CANVAS_WIDTH3, CANVAS_HEIGHT3);
  enemyArray3.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame3++;
  requestAnimationFrame(animate3);
}

animate3();

// canvas 4 frame animation
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

const CANVAS_WIDTH4 = (canvas4.width = 500);
const CANVAS_HEIGHT4 = (canvas4.height = 1000);

let gameFrame4 = 0;

class Enemy4 {
  constructor() {
    this.image = new Image();
    this.image.src = "enemies/enemy4.png";
    this.speed = Math.random() * 4 + 1;
    this.spriteWidth = 213;
    this.spriteHeight = 213;
    this.width = this.spriteWidth / 2.5;
    this.height = this.spriteHeight / 2.5;
    this.x = Math.random() * (canvas4.width - this.width);
    this.y = Math.random() * (canvas4.height - this.height);
    this.newX = Math.random() * (canvas4.width - this.width);
    this.newY = Math.random() * (canvas4.height - this.height);
    this.frame = 0;
    this.flapSpeed = Math.floor(Math.random() * 3 + 1);
    this.interval = Math.floor(Math.random() * 200 + 50);
  }
  update() {
    // this.x = 0;
    // this.y = 0;
    let dx = this.x - this.newX;
    let dy = this.y - this.newY;

    this.x -= dx / 20;
    this.y -= dy / 20;

    if (gameFrame4 % this.interval === 0) {
      this.newX = Math.random() * (canvas4.width - this.width);
      this.newY = Math.random() * (canvas4.height - this.height);
    }
    if (this.x + this.width < 0) {
      this.x = canvas4.width;
    }

    // animate sprite
    if (gameFrame4 % this.flapSpeed === 0) {
      this.frame > 4 ? (this.frame = 0) : this.frame++;
    }
  }
  draw() {
    // ctx4.strokeRect(this.x, this.y, this.width, this.height);
    ctx4.drawImage(
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

const no_of_enemy4 = 10;
const enemyArray4 = [];
for (let i = 0; i < no_of_enemy4; i++) {
  enemyArray4.push(new Enemy4());
}

function animate4() {
  ctx4.clearRect(0, 0, CANVAS_WIDTH4, CANVAS_HEIGHT4);
  enemyArray4.forEach((enemy) => {
    enemy.update();
    enemy.draw();
  });
  gameFrame4++;
  requestAnimationFrame(animate4);
}

animate4();
