/* Journey Ford
"Cookie Chip"

Player will use the left and right arrows 
to move the plate under the cookie and 
click the screen to change the color of
the chocolate chips on the cookie. or 
we can call them M&M's
*/


let r = 255;
let g = 255;
let b = 255;

//ellipse variables for plate
let x = 0;
//let y = 0;
let xMove = 0;
//let yMove = 0;
let size = 30;



function setup()
{
  createCanvas(700, 700);  
  background(255,172,203);
}

function draw() 
{
  background(255,172,203);
  stroke(139,69,19);
  fill(205,133,63);
  ellipse(300,350,300,300); //cookie base

  
  if (keyIsDown(LEFT_ARROW))
  {
    xMove--;
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    xMove++;
  }
  //plate moves left and right
  fill(255,105,180);
  //ellipse(xMove + x,y,size,size);

  ellipse(xMove,500,500,30); //plate(but I wanna move this)
  x = width / 2;
  y = height / 2;

  // chips
  fill(r,g,b); //fill all chips with random colors

  ellipse(300,300,30,30);
  ellipse(370,375,30,30);
  ellipse(400,310,30,30);
  ellipse(270,430,30,30);
  ellipse(250,250,30,30);
  ellipse(400,430,30,30);
  ellipse(170,330,30,30);
  ellipse(190,400,30,30);
  ellipse(260,350,30,30);
  ellipse(350,440,30,30);
  ellipse(340,260,30,30);
}

function mousePressed()
{

  r = random(0,255);
  g = random(0,255);
  b = random(0,255);


}

