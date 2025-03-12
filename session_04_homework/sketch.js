/* Journey F.
"Chocolate Chip Melt-O-Meter"

Timer should start when user clicks the screen, 
the idea was that the timer would count up from every time the screen was pressed
and would restart(it seems to not do that?) and there is supposed to be the title on
the screen but hasn't shown up for some reason. references used from stackoverflow
and p5.js.org combined for ideas

*/

//for image
let chip;
// timer
let timerStart = 0;
let timerCount = 0;
let timerLength = 1000;

// call image and load it first
function preload()
{
  chip = loadImage("images/chocolateChip.png");
}

function setup() 
{
  createCanvas(600, 600);
  //for image
  background(222,184,135)
  imageMode(CENTER);
  //for text
  textAlign(CENTER);
  textSize(55);
  fill(54,34,4);
}

function draw() 
{
  //text
  text("Chocolate Chip Melt-O-Meter", width / 2, 55); //not sure why this isn't working??

  background(222,184,135);
  image(chip, width - width / 2, height - height / 2, chip.width /2, chip.height /2);

if (mouseIsPressed)
  {
    let elapsedTime = millis() - floor(timerStart); //how long timer runs since being started
  //I thought "floor" code rounded to nearest whole?
  if(timerStart <= timerLength)
  {
    console.log("Chip is going to melt the longer it's on the oven timer!"); //"helpful for printing messages while debugging"
  }
  else
  {
    console.log("Melt timer is counting up: " + elapsedTime); //supposed to show the time passed?
  }
  }   
    
}


function mousePressed()//restart when chip is pressed
{
  timerStart = millis();
}
