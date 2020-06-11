var gutter = 2;

function border(){

  f = gutter / 2; // define x
  g = gutter / 2; // define y
  noFill();
  stroke(rust);
  strokeWeight(10);
  rect(f, g, width - gutter, height - gutter);
  var f1 = gutter; // coordinate x1
  var g1 = gutter; // coordinate y1

  var f2 = width - gutter; // coordinate x2
  var g2 = height - gutter; // coordinate x2

  
}