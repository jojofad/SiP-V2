let particles = [];

function setup() {
  createCanvas(440, 440);
  
  colourpallette();
  textSize(20);
  textFont('Lexend Giga');
  
  for(let i = 0;i<width/30;i++){
    
    particles.push(new Particle());
    
  }
}

function titles() {
  textAlign(CENTER);
  fill('white');
  rect(97, height-35, 245, 25)
  fill(rust);
  text("PARTICLE SYSTEM", width/2, height-16)
  
}

class Particle {

  constructor(){
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(5, 25);
    this.xSpeed = random(-0.5,1);
    this.ySpeed = random(-0.5,1);

  }

  moveParticle() {
    if(this.x < 0 || this.x > width)
      this.xSpeed*=-1;
    if(this.y < 0 || this.y > height)
      this.ySpeed*=-1;
    
    this.x+=this.xSpeed;
    this.y+=this.ySpeed;
  }
  
  joinParticles() {
    particles.forEach(element =>{
      
      let dis = dist(this.x,this.y,element.x,element.y);
      
      if(dis<250) {
        
        stroke(beige);
        strokeWeight(0.6);

        line(this.x,this.y,element.x,element.y);
        
      } else {
        
        stroke(rust);
        strokeWeight(0.2);
        
        line(this.x,this.y,element.x,element.y);
        
      }
    });
  }
  
  createParticle() {
    noStroke();
    fill(rust);
    circle(this.x,this.y,this.r);
  }
  
}

function draw() {
  background(deepblue);
  
  for(let i = 0;i<particles.length;i++) {

    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
    particles[i].createParticle();
  
  }
  
  titles();
  
  border();
  
}
