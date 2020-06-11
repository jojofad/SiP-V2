let oscillators = [];
let envelopes = [];
let numOscillators = 20;

let positions = Array(numOscillators).fill(null);

var colfreq1 = [70, 105, 172, 210, 264, 342, 396, 421, 528, 630]//colundi scale


function setup() {
  createCanvas(440, 440);
  colourpallette();
  textSize(20);
  textFont('Lexend Giga');

  osc = new p5.Oscillator('sine');

  for (let i = 0; i < numOscillators; i++) {
    let osc = new p5.SinOsc();
    osc.freq(random(colfreq1));
    // osc.amp(0, 0.1);
    oscillators[i] = osc;

    let envelope = new p5.Envelope();
    envelope.setADSR(0.001, 0.3, 0.1, 1.5);
    envelope.setRange(0.2, 0);
    envelopes[i] = envelope;
  }
  fft = new p5.FFT();
  // console.log(2%0.4);
}

function titles() {
  textAlign(CENTER);
  fill('white');
  rect(59, height-35, 320, 25)
  fill(rust);
  text("COLUNDI FREQUENCIES", width/2, height-16)
  
}

function draw() {
  
  background(222, 100, 100, 4%3);
  
  push();
  translate(width/2, height/2);
  snail();
  pop();
  
  titles();

  border();
  
function snail(){
  
  for (let i = 0; i < numOscillators; i++) {
    let theta = radians((numOscillators - i + 3) * frameCount / 15);
    let x = cos(theta) * (i + 1) * 10;
    let y = sin(theta) * (i + 1) * 10;

    if (positions[i]) {
      
      if (y > 0 && positions[i].y < 0) {
        oscillators[i].start(); 
        envelopes[i].play(oscillators[i]);
        noStroke();
        
      }
      positions[i].x = x
      positions[i].y = y;
    } else {
      positions[i] = createVector(x, y);
    }

    fill(deepblue);
    ellipse(x, y, 10, 10);

  }
} 


  
}