
let folder = "fonts/";
let folderShots = "shots/";
let fontChoice;

let sourceText;
let poem;
let gloria;
let startIndex = 0;
let frameArray =[3, 5, 8, 13, 21, 34, 55];
let timeArray = [15, 30, 45, 60];

let timeChoice;
let fontLoaded;
let shotLoaded;

let shotArray = ["stones24.png",
                 "stones48.png",
                 "stones72.png",
                 "stones96.png"];

let fontArray = ["RobotoMono-Bold.ttf",
                 "RobotoMono-BoldItalic.ttf",
                 "RobotoMono-ExtraLight.ttf",
                 "RobotoMono-ExtraLightItalic.ttf",
                 "RobotoMono-Italic.ttf",
                 "RobotoMono-Light.ttf",
                 "RobotoMono-LightItalic.ttf",
                 "RobotoMono-Medium.ttf",
                 "RobotoMono-MediumItalic.ttf",
                 "RobotoMono-Regular.ttf",
                 "RobotoMono-SemiBold.ttf",
                 "RobotoMono-SemiBoldItalic.ttf",
                 "RobotoMono-Thin.ttf",
                 "RobotoMono-ThinItalic.ttf"];

function preload() {
  shotLoaded = round(random(3));
  console.log(shotLoaded);
  fontChoice = round(random(13));
  gloria = loadImage("stones.png");
  sourceText = loadStrings("gloria.txt");
  gloria = loadImage(folderShots + shotArray[shotLoaded]);
  fontLoaded = loadFont(folder + fontArray[fontChoice]);
}
//-------------------------------------------------------SETUP
function setup() {
  let canvas =  createCanvas(1080, 1920);
  canvas.position(windowWidth/2-width/2, windowHeight/2-height/2);
  poem = sourceText.join(' ');
  textFont(fontLoaded);
  textStyle(NORMAL);
  timeChoice = random(timeArray);
  setInterval(reloadPage, 1000*timeChoice);
}
//-------------------------------------------------------DRAW
function draw() {
  background(10);
  frameRate(0.1*random(frameArray));
  
  let charIndex = startIndex;
  let w = width / gloria.width;
  let h = height / gloria.height;

  gloria.loadPixels();

    for (let j = 0; j < gloria.height; j++) {
  for (let i = 0; i < gloria.width; i++) {
      const pixelIndex = (i + j * gloria.width) * 4;
      const r = gloria.pixels[pixelIndex + 0];
      const g = gloria.pixels[pixelIndex + 1];
      const b = gloria.pixels[pixelIndex + 2];
      const avg = (r + g + b) / 3;
      
      noStroke();
    
    //----------------------------color change
      fill(255, 0, 0, avg+40);
    if (avg > 125) {
      fill(255, 255, 255, avg);
    }
    //----------------------------------
    
      textSize(w*1);
      textAlign(CENTER, CENTER);
      
      text(poem.charAt(charIndex % poem.length), i * w + w * 0.5, j * h + h * 0.5);
      charIndex++;
    }
  } 
  startIndex++;
}

function mousePressed() {
   save();   
}
//----------------------------------reLoad
function reloadPage() {
    window.location.reload();
  }

  function keyPressed() {
    reloadPage();
  }