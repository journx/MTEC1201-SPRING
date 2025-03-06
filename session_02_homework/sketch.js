/*
  Journey F.
  "Deisgn the Cookie"
  My idea was to allow the users to draw
  chocolate chips on the cookie

*/

let frostingX = 10;
let frostingY = 10;
let frostingLocation = 0;




function setup() {

  createCanvas(600, 600); //once
  strokeWeight(8);  
  background(255,172,203);
  fill(255,239,219);
  stroke(139,115,85);
  ellipse(300,300,300,300);
}

function draw() {  //forever

  
  //background(r,g,b); [i do not need this!!]
  noStroke();
  fill(101,67,33);
  ellipse(pmouseX,pmouseY, frostingX+2, frostingY-2, 20);
}

function mousePressed(){ //once clicked, will reset

  strokeWeight(8);  
  background(255,172,203);
  fill(255,239,219);
  stroke(139,115,85);
  ellipse(300,300,300,300);

}