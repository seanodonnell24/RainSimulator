//I collaborated with my partner that is in the same level class as me.

class Rain {
  constructor() {
    this.x = width / 2;
    this.y = 0;
    this.ySpeed = 0;
    this.balls = [];
    this.lightning = [];
    this.lightningTimer = 100;
  }
  fall() {
    this.y = this.y + this.ySpeed;
    this.x = this.x - 3;
    if (this.y > height) {
      for (let b = 0; b < 1; b++) {
        this.balls[b] = new Splash(this.x, this.y);
        this.balls[b].show();
        this.balls[b].explode();
        this.y = random(-50, -100);
      }
    }

    if (this.x < 0) {
      this.x = random(width, width + 20);
    }
  }

  show() {
    stroke(173, 216, 230);
    line(this.x, this.y, this.x - (7 * PI) / 6, this.y + 10);
  }

  changeX() {
    this.x = random(0, width);
  }

  changeY() {
    this.y = random(-50, -500);
  }

  lightSpeed() {
    this.ySpeed = random(4, 5);
    this.ySpeed = this.ySpeed + 0.5;
  }

  mediumSpeed() {
    this.ySpeed = random(7, 7.7);
    this.ySpeed = this.ySpeed + 1;
  }

  heavySpeed() {
    this.ySpeed = random(9, 10);
    this.ySpeed = this.ySpeed + 1.3;
  }
}
//Have the rain hit the ground and then call this class. It will make a blue shape go up, and then back down again to make a splash effect. 
class Splash {
  constructor(xpos, ypos) {
    this.x = xpos;
    this.y = ypos;
    this.yvel = -5;
    this.yvel2 = 0.05;
    this.lightVel2 = 0.05;
    this.mediumVel2 = 0.01;
    this.heavyVel2 = 0.001;
    this.lightVel = -5;
    this.mediumVel = -10;
    this.heavyVel = -25;
  }

  explode() {
    this.ypos = this.ypos + this.yvel;
    this.yvel = this.yvel + this.yvel2;
  }

  show() {
    fill(173, 216, 230);
    ellipse(this.x, this.y, 6, 9);
  }
}

let rainDrop = [];
let x;
let y;
let n = 251;
let q = 501;
let l = 1001;
let button1;
let button2;
let button3;
let p = 0;
let g = 0;
let v;
let lightningTimer = 100;
let xLightning = 0;
let yLightning = 0;
let lightningChance = 1000000000000000000;

function setup() {
  fullscreen();
  createCanvas(600, 400);
  let button1 = createButton("Light Rain");
  let button2 = createButton("Medium Rain");
  let button3 = createButton("Heavy Rain");
  button1.position(170, 350);
  button2.position(260, 350);
  button3.position(370, 350);
  button1.mouseClicked(lightRain);
  button2.mouseClicked(mediumRain);
  button3.mouseClicked(heavyRain);
  for (let i = 0; i < 1000; i++) {
    rainDrop.push(new Rain());
    rainDrop[i].changeX();
    rainDrop[i].changeY();
  }
}

function draw() {
  background("black");
  for (let x = 0; x < width; x++) {
    let t = (noise((x + p) / 200) + 0.001) * 400;
    stroke("gray");
    line(x, t, x + 1, t);
    line(x, t, x, 0);
  }
  p = p + 0.5;
  if (n > 250) {
  } else {
    for (let n = 0; n < 250; n++) {
      rainDrop[n].show();
      rainDrop[n].fall();
      rainDrop[n].lightSpeed();
    }
  }
  if (q > 500) {
  } else {
    for (let q = 0; q < 500; q++) {
      rainDrop[q].show();
      rainDrop[q].fall();
      rainDrop[q].mediumSpeed();
    }
  }
  if (l > 900) {
  } else {
    for (let l = 0; l < 900; l++) {
      rainDrop[l].show();
      rainDrop[l].fall();
      rainDrop[l].heavySpeed();
    }
  }

  if (lightningTimer < 1) {
    lightning();
  } else {
    lightningTimer = random(0, lightningChance);
    xLightning = random(100, 500);
  }
}
function lightning() {
  stroke("yellow");
  line(xLightning, 0, xLightning, yLightning + 25);
  if (yLightning > height) {
    background("white");
    if (yLightning > height * 2.2) {
      background("black");
      lightningTimer = random(0, lightningChance);
      yLightning = 0;
    }
  }
  if (yLightning < height * 2.2) {
    yLightning = yLightning + 20;
  }
}
function lightRain() {
  n = 0;
  q = 501;
  l = 1001;
  yLightning = 0;
  lightningChance = 1000;
}

function mediumRain() {
  n = 251;
  q = 0;
  l = 1001;
  yLightning = 0;
  lightningChance = 400;
}

function heavyRain() {
  n = 251;
  q = 501;
  l = 0;
  yLightning = 0;
  lightningChance = 150;
}

//This code is from a non graded formative assignment that I did previously.

