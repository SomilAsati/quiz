var canvas, backgroundImage;
var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getStae();
  quiz.start();

}


function draw(){
  background("pink");
if(contestantCount === 4 ){
  quiz.update(1);
}
  
if(gameState === 1){
  clearInterval();
  quiz.play();
  
}
}
