/*
Journey F.
Crumbl Cookie
The concept of my sketch is to create a Crumbl Cookie order.
With the use of the colors and shapes similar to an actual
Crumbl box, I'd like to digitize a fun twist on the desserts.
*/

function setup() {

  createCanvas(650, 500);
  rectMode(CENTER); 
  background(255,172,203);

  fill(139,115,85); //why isn't the stroke color changing??
  strokeWeight(15);
  

  fill(255,239,219);
  stroke(139,115,85);
  ellipse(300,300,300,300);

  fill(89,39,32);
  stroke(89,39,32);
  ellipse(300,300,30,30);
  ellipse(200,250,30,30);
  ellipse(250,405,30,30);
  ellipse(300,200,30,30);
  ellipse(350,250,30,30);
  ellipse(400,270,30,30);
  ellipse(350,400,30,30);

  fill(288,113,122); //why doesn't it show a different color?
  line(0,650,0,0); //left line vertical
  line(650,0,0,0); //top line horizontal
  line(650,0,650,650); //right line vertical
  line(0,0,650,0); //not sure how to show the bottom line horizontal
}

