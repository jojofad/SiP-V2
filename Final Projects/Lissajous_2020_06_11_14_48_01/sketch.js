var clicks = 0;

let currentKey = 'a'

let phase = 0
let r = 200
let trailLength = 12

let params = {
  a: {
    xm: 2,
    ym: 3,
    spacing: 0.1,
    speed: 0.02
  },
}

let currentParams = params.a

function setup() {
  
  createCanvas(440, 440);
  colourpallette();
  textSize(20);
  textFont('Lexend Giga');

  // noStroke();
}

function keyPressed() {
  if (key in params) {
    currentParams = params[key]
    print(currentParams)
  }
}

function lisajool() {

push();
  translate(width / 2, height / 2)
  for (let n = 0; n < clicks; n++) {
    for (let i = 0; i < 20; i++) {
      let o = i * currentParams.spacing
      fill(deepblue)
      let x = cos(phase * currentParams.xm * (n + 4) * 0.08 + o + n * 0.1) * r
      let y = sin(phase * currentParams.ym * (n + 4) * 0.08 + o + n * 0.1) * r
      ellipse(x, y, 4, 4)
    }
  }

  phase += currentParams.speed
pop();
}

function mousePressed() {
  //add 1 to variable clicks
  clicks ++;
}

function titles() {
  textAlign(CENTER);
  fill('white');
  rect(80, height-35, 278, 25)
  fill(rust);
  text("CLICK TO ADD LINES", width/2, height-16)
  
}

function draw() {

  background(beige)
  strokeWeight(0.4);
  lisajool();
  titles();
  border();
  

}

