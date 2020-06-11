

function setup() {
  
  
  createCanvas(440, 440);
  colourpallette();
  textSize(20);
  textFont('Lexend Giga');

}


function draw() {


  border();
  pattern();
  titles();
  
}

function pattern(){
  
  strokeWeight(0.4);
  colorMode(HSB, 240);
  
  push();
  
  translate (width / 2, height / 2);
  
  let div = frameCount%200.5;
  
  stroke(mouseX, mouseY, 200);
  
  let sides = 100;
  let step = 360 /sides;
  
  rotate(div);
  
  beginShape();
  
  for (let i = 0; i <= 240; i += step) { 
    let theta = radians(i-div);
    let amp;
    if (i% (step * 182)===0) {
      amp = 120;
    } else {
      amp = mouseX;
    }
    
    let x = cos(theta) * amp;
    let y = sin(theta) * amp;
    vertex(x, y);

  endShape();
  
  }
  pop();
}

function titles() {
  textAlign(CENTER);
  fill('white');
  rect(110, height-35, 220, 25)
  fill(rust);
  text("CLICK TO RESET", width/2, height-16)
  
}

function mousePressed() {
  clear();
}


