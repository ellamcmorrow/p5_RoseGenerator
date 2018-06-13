
var d = 8; //denominator
var n = 5; //numerator
var sliderD; //denominator slider
var sliderN; //numerator slider
var sizeSlider; //numerator slider
var strokeColor;
var colorVal;
var originalAngle=0;
var text1,text2,text3, text4,text5,text6,text7,text8,tex9,text10;
var cnv;
var spead;
var aVelocity = 0;
var aAcceleration = 0.001;

function setup() {
  cnv=createCanvas(800, 600);
  cnv.position(350,50); //indent canvas 

  //create text div
  text3 = createDiv('<h3>-------------------------------------</h3>');
  text3.position(10, 30);


  text = createDiv('<h3>ROSE PATTERN GENERATOR </h3>');
  text.position(10, 60);

  text2 = createDiv('<h3>-------------------------------------</h3>');
  text2.position(10, 90);

  sliderD = createSlider(20, 100, 20, 1); //createSlider(min,max,[value],[step]) > value =default  step=ticksizeSlider
  sliderD.position(10, 190);
  text5 = createDiv('DENOMINATOR');
  text5.position(12,175);

  sliderN = createSlider(20, 50, 20, 1);
  sliderN.position(10, 240);
  text7 = createDiv('NUMERATOR');
  text7.position(12,225); 


  sizeSlider = createSlider(100, 400, 100, 1);
  sizeSlider.position(10, 290);
  text9= createDiv('SIZE');
  text9.position(12,275); 

  angleSlider = createSlider(0, 360, 0, 10);
  angleSlider.position(10, 340);
  text9= createDiv('ROTATE');
  text9.position(10,325); 

  colorSlider = createSlider(100, 255, 255, 1); //number between 100-255 
  colorSlider.position(10, 390);
  text11= createDiv('BRIGHTNESS');
  text11.position(12,375); 


  text = createDiv("<i class='far fa-save'></i> 'S'");
  text.position(15, 450);

  text2 = createDiv('<i class="far fa-trash-alt"></i> DELETE/BACKSPACE');
  text2.position(15, 480);



  sliderD.input(draw);//sliders  take input values which are then used to draw the rose pattern
  sliderN.input(draw);
  sizeSlider.input(draw);
  colorSlider.input(draw);
  angleSlider.input(draw);




}

function draw() {

  d = sliderD.value();// by sliding you're dividing by different numerators denominators.
  n =sliderN.value();
  size=sizeSlider.value(); //will change the radius size down below
  col=colorSlider.value(); 
  angle=angleSlider.value();//changes the angle of rotation
  

  var k = n / d; //rose patterns are changed  
  background(0);
  push(); //only the rose pattern will be affected 
  translate(width / 2, height / 2); //translate origin to centre 
  stroke(col); //stroke colour changed based on color slider 
  beginShape();
  noFill();
  strokeWeight(10* mouseX); //stroke weight changes a tiny bit when slider is slid


  for (var a = 0; a < TWO_PI *50 ; a += 0.2) { //loop through angles 
    /*formula calculates the radius based an angle (a) and k (d/n)*/
    var r = size * cos(k * a);//size- sizeSlider changes the radius value which changes the size of the rose pattern
    /* Converting polar to cartesian coordinates*/ 
    var x = r * cos(a);//CAH
    var y = r * sin(a);//SAH
    vertex(x, y); //connect x,y
  }

  rotate(angle); //rotate pattern by angleSlider input value
  aVelocity += aAcceleration; //angular VALV-causes rose pattern to turn
  angle += aVelocity; // increment the angle by speed in given angular direction
  endShape(CLOSE); //CLOSE connects the beginning to the end of the shape
  pop(); //end of push() pop() 
  noLoop(); //causes draw to only execute once,otherwise it will be continually running

}

function keyReleased() {
  if (keyCode == DELETE || keyCode == BACKSPACE) background(0); //clear canvas 
  if (key == 's' || key == 'S') { //save canvas as image when s button is pressed
    save(cnv, 'myCanvas.jpg'); // save canvas as myCanvas.jpg
  }
}




