//"Flying Cookie"
//Journey Ford

let y = 0; //starting point for cookie to fall down

function setup() {

  createCanvas(600, 600);
  strokeWeight(8);  

}

function draw() 
{

  let diameter = 300;//cookie base
  let chipSize = 30;
  let centerX = 300//center declaration
  let centerY = y+50//center moves along y axis
  background(255,172,203);
  fill(255,239,219);
  stroke(205,133,63);
  //ellipse(300,350,300,300); changed this to the let statements
  ellipse(centerX, centerY, diameter, diameter);

  noStroke();
  fill(205, 133, 70);

  // ellipse(300,300,30,30);
  // ellipse(370,375,30,30);
  // ellipse(400,310,30,30);
  // ellipse(270,430,30,30);
  // ellipse(250,250,30,30);
  // ellipse(400,430,30,30);
  // ellipse(170,330,30,30);
  // ellipse(190,400,30,30);
  // ellipse(260,350,30,30);
  // ellipse(350,440,30,30);
  // ellipse(340,260,30,30);

  ellipse(centerX, centerY - 50, chipSize, chipSize);
  ellipse(centerX + 70, centerY + 25, chipSize, chipSize);
  ellipse(centerX + 100, centerY - 40, chipSize, chipSize);
  ellipse(centerX - 30, centerY + 80, chipSize, chipSize);
  ellipse(centerX - 50, centerY - 50, chipSize, chipSize);
  ellipse(centerX + 100, centerY + 80, chipSize, chipSize);
  ellipse(centerX - 130, centerY - 20, chipSize, chipSize);
  ellipse(centerX - 110, centerY + 50, chipSize, chipSize);
  ellipse(centerX - 40, centerY + 0, chipSize, chipSize);
  ellipse(centerX + 50, centerY + 90, chipSize, chipSize);
  ellipse(centerX + 40, centerY - 40, chipSize, chipSize);

y++//increment by 1
if(y >= height +(diameter)) //if y is greater than 0+300(the cookie)
{
  y = -diameter; //falls down on y axis
}
else
{
  if (y<= -100)
  {
    y = +diameter; //loops and doesn't disappear forever
  } // still doesn't reset loop from the bottom of the canvas to fly back up...
}

// if(y< height) this didn't work at all
// {
//   y = +diameter;
// }



}
