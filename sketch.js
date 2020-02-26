function setup() {
  createCanvas(450, 500);// put setup code here
}

function draw() {
  background(220);
  var x = 0;
  
    ellipse (x, 50, 50, 50);
  x+=50;
    ellipse (x, 50, 50, 50);
  x+=50;
  
for (i=0; i < width; i+=50) {
  for (y=0; y < height; y+=50) {
        //for every x, do every y
    strokeWeight(10);
    fill (255);  
    ellipse(i, y, 30, 30); 
  }
}
}