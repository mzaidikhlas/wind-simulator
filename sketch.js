/*
Developed by https://github.com/mzaidikhlas
*/

var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=ca4d95a5190d960961997673c70a62ea';
var input;
var position = Array();

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  var button = select('#submit');
  button.mousePressed(weatherAsk);

  for(i=0; i<400; i++){
  	position[i] = createVector(random(0,width), random(0,height));
  }
  wind = createVector();
  input = select('#city');
}

function weatherAsk() {
  var url = api + input.value() + apiKey;
  loadJSON(url, gotData);
}

function gotData(data) {
  weather = data;
}

function draw() {
  background(255);
  if (weather) {
    var speed = weather.wind.speed;
    var degree = radians(weather.wind.deg);
    wind = p5.Vector.fromAngle(degree);

    console.log(speed);
 


   	for(i=0; i<400; i++){
   		position[i].add(wind);

   		noStroke();
   		fill(50,205,50,200);
   		ellipse(position[i].x*speed, position[i].y*speed, 16, 16);
  		if (position[i].x > width)
  			position[i].x = 0;
  		if (position[i].x < 0)
  			position[i].x = width;
  		if (position[i].y > height) 
  			position[i].y = 0;
  		if (position[i].y < 0) 
  			position[i].y = height;
  	}
  }
}
