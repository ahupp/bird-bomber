
NUM_ENEMIES = 10;

ticks = 0;
drops = []

GROUND_HEIGHT = 50;



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < NUM_ENEMIES; i++) {
    drops.push(new Enemy(random(0, windowWidth)));
  }

}



function ground() {
  return windowHeight - GROUND_HEIGHT;
}

class Enemy {
  constructor(x) {
    this.x = x;
  }

  draw() {
    fill("blue");
    stroke("black");
    rect(this.x, ground() - 30, 20, 30);
    return this;
  }
}

class Drop {
  constructor(x, y, ticks) {
    this.x = x;
    this.y = y;
    this.start = ticks;
  }

  draw(ticks) {
    this.y += 1;
    if (this.y > ground()) {
      return new Explode(this.x, ground(), ticks);
    }
    fill("blue");
    stroke("black");
    ellipse(this.x, this.y, 10, 10);
    return this;
  }
}

class Explode {
  static EXPLODE_TIME = 50;
  constructor(x, y, ticks) {
    this.x = x;
    this.y = y;
    this.start = ticks;
  }

  radius(ticks) {
    return ticks - this.start
  }

  draw(ticks) {
    let explodeTime = this.radius(ticks);
    if (explodeTime < Explode.EXPLODE_TIME) {
      fill("red");
      circle(this.x, this.y, explodeTime * 2);
      return this;
    } else {
      return null;
    }
  }
}


function draw() {
  background("gray");

  clear();
  fill("green");
  stroke("black");
  rect(mouseX, mouseY, 50, 30);

  rect(0, windowHeight - GROUND_HEIGHT, windowWidth, GROUND_HEIGHT);

  drops = drawAll(drops);

  let explodes = drops.filter((d) => d instanceof Explode);
  let enemies = drops.filter((d) => d instanceof Enemy);

  for (let e of enemies) {
    let hit = false;
    for (let ex of explodes) {
      //let dist = Math.sqrt((e.x - ex.x) ** 2 + (e.y - ex.y) ** 2);
      let dist = Math.abs(e.x - ex.x);
      console.log("Distance", dist, e, ex);
      if (dist < ex.radius(ticks)) {
        console.log("Enemy hit by explosion", e, ex);
        drops = drops.filter((d) => d !== e);
      }
    }
  }

  ticks += 1;
}

function drawAll(items) {
  let nextItems = [];
  for (let i of items) {
    let next = i.draw(ticks);
    if (next) {
      nextItems.push(next);
    }
  }
  return nextItems;
}

function mousePressed() {
  drops.push(new Drop(mouseX, mouseY, ticks));
}
