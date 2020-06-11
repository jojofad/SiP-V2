let x,y;
let pSize = 440;

var clicks = 0;

function setup() {
  createCanvas(440,440);  
  colourpallette();
  textSize(20);
  textFont('Lexend Giga');
}


function draw() {
  background(beige);
  strokeWeight(0.4);
  patternTime();
  titles();
  border();
  

}

function titles() {
  textAlign(CENTER);
  fill('white');
  rect(80, height-35, 278, 25)
  fill(rust);
  text("CLICK TO ADD LINES", width/2, height-16)
  
}

function mousePressed() {
  clicks ++;
}

function patternTime(x,y) {

  
  for(let i=0; i<pSize; i++){
      for(let i=0; i<TWO_PI; i+=PI/clicks){
        stroke(rust);
        line(pSize-pSize/16,pSize-pSize/16, pSize/2 + ((pSize/3)*cos(i)), pSize/2 + ((pSize/3)*sin(i)));
        stroke(rust);    
        line(pSize/16,pSize/16, pSize/2 + ((pSize/3)*cos(i)), pSize/2 + ((pSize/3)*sin(i)));
        stroke(deepblue);
        line(pSize/16,pSize-pSize/16, pSize/2 + ((pSize/3)*cos(i)), pSize/2 + ((pSize/3)*sin(i)));
        stroke(deepblue);
        line(pSize-pSize/16,pSize/16, pSize/2 + ((pSize/3)*cos(i)), pSize/2 + ((pSize/3)*sin(i)));
  }
}
}
