/* Journey Ford
"Cookie Chip Final"

Should be able to do when finished:
Move the plate back and forth with the left and
right arrow keys, 
*/

//chips in array, cookie in class
//looped color change of chips, key press to start and stop
//another key press to restart
//timer that triggers chip color, boolean code for timer, counter++
// modulo or framecount
//int count



let cookie;
// let chipSize = 30;
let lastColor = 0;
let interval = 1000; //for 1 second timer
let xMove = 0; //for plate
let timerOn = true
let chipColor = []; //chip color array

// //ellipse variables for plate, hold off for now
// let x = 0;
// //let y = 0;
// let xMove = 0;
// //let yMove = 0;
// let size = 30;



function setup()
{
  createCanvas(700, 700);  
  background(255,172,203);
  cookie = new Cookie(); //cookie class

  for (let i = 0; i<11; i++)
  {
    chipColor.push(randomColor()); //adds value to end of an array. extends length by one, p5.js
  }
}


function draw()
{
  background(255,172,203);
  
  //put cookie under plate
  fill(255,105,180);
  ellipse(xMove+300, 500, 500, 30); //plate centered with xMove, p5.js
  //cookie on top of plate
  stroke(139,69,19);
  fill(205,133,63);
  ellipse(xMove+300,350,300,300); //cookie will move with plate

  //movement key presses
  if (keyIsDown(LEFT_ARROW))
  {
    xMove--;
    print(xMove);
  }
  if (keyIsDown(RIGHT_ARROW))
  {
    xMove++;
  }

  //timer code
  if (timerOn && millis() - lastColor > interval)
  {
    updateChipColor(); //run in the draw loop and will update onstantly, p5.js
    lastColor = millis();
  }

  //drawing chips
  cookie.displayChips();
}

// cookie with chips(array) on it, but chips aren't showing??
class Cookie 
{
  constructor() 
  {
    this.x = 300;
    this.y = 350;
    this.size = 300;

    this.chipPosition =
    [
    ellipse(xMove + 70, 375, 30, 30),
    ellipse(xMove + 140, 450, 30, 30),
    ellipse(xMove + 170, 380, 30, 30),
    ellipse(xMove + 100, 480, 30, 30),
    ellipse(xMove + 80, 300, 30, 30),
    ellipse(xMove + 170, 480, 30, 30),
    ellipse(xMove - 130, 380, 30, 30),
    ellipse(xMove - 110, 450, 30, 30),
    ellipse(xMove - 40, 400, 30, 30),
    ellipse(xMove + 50, 490, 30, 30),
    ellipse(xMove + 40, 290, 30, 30)
    ];
  }

  displayChips() //showing each chip(but it's now displaying the chips)
  {
  noStroke();
  for (let i=0; i<this.chipPosition; i++) //loops chip placements
  {
    fill(chipColor[i]); //fills in with random colors assigned in the array for chips
    let x= xMove + this.x +this.chipPosition[i]; //x coordinate when moving 
    let y= this.y + this.chipPosition[i]; //y coodinate when moving
    ellipse(x, y, 30, 30);
  }
  
    //when r key is pressed, timer is on, if not pressed, it is off
    function keyPressed() 
    {
      if (key == "r" || key == "R")
      {
        timerOn = !timerOn;
        if(timerOn) //when restarted, color time will reset, insight from my friend
        {
          lastColor = millis();
        }
      }
    }
  }
}





function randomColor()
{
  return color(random(255),random(255),random(255)); //random colors, value is returned as value after loop, "The Coding Train"
}

function updateChipColor()
{
  for(let i=0;i<chipColor.length; i++)
  {
    chipColor[i] = randomColor();
  }
}
//if chip color timer doesn't work, might go back to drawing loop
//and allowing different colors to be used with each key press...