/* 
"Cookie Chip Final"
  by Journey Ford

user should be able to move the left and right arrows
to move the cookie on the plate, click the screen to allow the 
chips to change random colors, and use the "r" and "R" key
to reset the chip colors, cookie position, and background
cookie loop. 
*/

let xMove = 0;
let cookies = []
let numCookies = 25;
let r = 255;
let g = 255;
let b = 255;

//doesn't change
const cookieSize = 300;
const chipSize = 30;

let plateY = 500;

function setup()
{
  createCanvas(700, 700);  
  background(255,172,203);

  //cookies falling loop, p5.js
  for (let i = 0; i< numCookies; i++)
  {
  cookies.push(new Cookie(random (width), random(-height, 0), random(10,30)));
  }//random code(insight from friend) will place cookies all over the background
  //cookies will be random sizes falling randomly

  ellipseMode(CENTER); //center cookie in middle of screen
}

function draw() 
{
  background(255,172,203);
  //looped cookies code
  for(let cookie of cookies) //calling class object
  {
    cookie.y += cookie.speed //move cookies down, p5.js
    if (cookie.y > height) //loop to the top of the screen, insight from friend
    {
      cookie.y = -cookie.size;
      cookie.x = random(width);
    }
    cookie.display(); //this will draw the cookie
  }

  //for when the plate moves
  if (keyIsDown(LEFT_ARROW))
  {
    xMove--;
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    xMove++;
  }

  //plate code
  let plateX = xMove+width/2; //will show how far plate moves and keeps it centered, insight from friend
  fill(255,105,180);
  noStroke();
  ellipse(plateX, plateY, 500,30); //draws the plate

  //make cookie onto plate
  let cookieX = plateX;
  let cookieY = plateY - cookieSize / 2;
  stroke(139,69,19);
  fill(205, 133, 63);
  ellipse(cookieX, cookieY, cookieSize, cookieSize);


  //drawing chips on main cookie
  drawChip(cookieX-90, cookieY-90);
  drawChip(cookieX-60, cookieY-30);
  drawChip(cookieX-30, cookieY+75);
  drawChip(cookieX-80, cookieY+80);
  drawChip(cookieX+80, cookieY+80);
  drawChip(cookieX-100, cookieY+20);
  drawChip(cookieX+100, cookieY+20);
  drawChip(cookieX-40, cookieY+40);
  drawChip(cookieX-40, cookieY+40);
  drawChip(cookieX+50, cookieY-80); 
}

function mousePressed()
{
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}

function drawChip(x, y) {
  fill(r, g, b);//random chip colors
  noStroke();
  ellipse(x, y, chipSize, chipSize);
}
//reset chips to white and plate position code
function keyPressed() {
  if (key === 'r' || key === 'R') 
  {
    r = 255;
    g = 255;
    b = 255;

    xMove = 0;

    //and reset background cookies loop
    for (let cookie of cookies) {
      cookie.x = random(width);
      cookie.y = random(-height, 0);
    }
  }
}

//cookie class to display repeat cookies in background
class Cookie 
{
  constructor(x,y,size)
  {
    this.x = x;
    this.y = y
    this.size = size;
    this.speed = random(1,3);
  }

  display()
  {
    fill(205, 133, 63);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size);
  }
}