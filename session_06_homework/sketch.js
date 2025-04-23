//"Cakes and Cookies"
// by Journey Ford
/*user SHOULD be allowed to press the space 
bar in oder to erase the images on the screen
and press the "r" or "R" key to restore them again
*/
let cookie;
let cake;

//cookies and cakes falling set up
let numDesserts = 25;
let positionX = [];
let positionY = [];
let desserts = [];

let move = 2;

//cookie + cake photo
function preload() 
{
  cookie = loadImage("images/cookie1.png");
  cake = loadImage("images/cake.png");
}

function setup()
{
  createCanvas(700, 700);  
  imageMode(CENTER);
  for (let i = 0; i < numDesserts; i++)
  {
    positionX[i] = random(width);
    positionY[i] = random(-height, 0);//start randomly on top of canvas
    desserts[i] = floor(random(2)); //either cookie or cake randomly chosen
  }
}

function draw() 
{
  background(255,172,203);
  //trouble with sizing...
  //image(cookie, width / 2, height / 2);
  //image(cake, width / 200, height/ 200);
  //image(cake, width/200, height-height/200, cake.width/20*2, cake.height/20*2);

  for (let i = 0; i < numDesserts; i++)
  {
    
    let img;
    if (desserts[i] === 0)
    {
      img = cookie;
    } else 
    {
      img = cake;
    }
    image(img, positionX[i], positionY[i], img.width / 10, img.height / 10);

    positionY[i] += 2;

    if (positionY[i] > height + 50) {
      positionY[i] = random(-10, 0);
      positionX[i] = random(width);
      desserts[i] = floor(random(2));
  }
}
}

function keyPressed() 
{//make the cakes and cookies disappear
  if (key === " ")//space
  {
    positionX = [];
    positionY = [];
    desserts = []; 
  } else if (key === "r" || key === "R")
  { //doesn't restore cakes and cookies??
    positionX[i] = random(width);
    positionY[i] = random(-height, 0);
    desserts[i] = floor(random(2));
  }
}