var readlineSync = require('readline-sync');
var score = 0;

// HIGH-SCORE RECORD
var highScore = [
{
  name : "Arnab",
  score : 15
},{
  name : "Akash",
  score : 14
},{
  name : "Amy",
  score : 13
}];

// QUESTIONS RECORD
var question = [
  {
    question : "\nQ1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? (eg - 2022)\n",
    answer : "2008"
  },{
     question : "\nQ2. What is the name of Thor’s hammer?\n",
    answer : "MJOLNIR"
  },{
     question : "\nQ3. What is Captain America’s shield made of?\n",
    answer : "VIBRANIUM"
  },{
     question : "\nQ4. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\n",
    answer : "LOKI"
  },{
     question : "\nQ5. Who does the Mad Titan sacrifice to acquire the Soul Stone?\n",
    answer : "GAMORA"
  },{
     question : "\nQ6. Who is Black Panther’s sister?\n",
    answer : "SHURI"
  },{
     question : "\nQ7. Doctor Strange's original first name ?\n",
    answer : "BENEDICT"
  },{
     question : "\nQ8. Thor’s Mjolnir is made from the metal of a dying ___?\n",
    answer : "STAR"
  },{
     question : "\nQ9. Who is the firstborn child of Odin?\n",
    answer : "HELA"
  },{
     question : "\nQ10. On what planet was the Soul Stone in Infinity War?\n",
    answer : "VORMIR"
  },{
     question : "\nQ11.   What is the name of Tony's interactive computer assistant?\n",
    answer : "JARVIS"
  },{
     question : "\nQ12. How many Infinity Stones are there?\n",
    answer : "SIX"
  },{
     question : "\nQ13. What type of doctor is Doctor Strange?\n",
    answer : "NEUROSURGEON"
  },{
     question : "\Q14. Who is the Winter Soldier?\n",
    answer : "BUCKY"
  },{
     question : "\nQ15. Who rescued Tony Stark and Nebula from space?\n",
    answer : "CAPTAIN MARVEL"
  }];

// FUNCTION WELCOME
function welcome() {
  var userName = readlineSync.question("May I Know Your Name Please? \n");

  console.log("Hello! "+userName+"!, Welcome to QUIZ-ON-MARVEL.\n");

  console.log("HERE ARE SOME RULES : \n1. IF THERE IS ANY MISTAKE IN YOUR SPELLING, YOU WILL LOOSE SCORE. \n2. USE LETTERS OR WORDS TO ANSWER EXCEPT THE 1ST QUESTION. \n3. AND SORRY FOR THESE RULES, THIS IS MANDATORY AS THE CODE IS VERY SENSITIVE. \n4. ENJOY YOUR GAME! : ");

  console.log("----------------------------------------------");
}

// FUNCTION PLAY
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You're right! 🥳🤩\n");
    score++;
  } else {
    console.log("You're wrong! 😟\n");
    score--;
  }
  console.log("\nYour Current Score --> "+score);
}


//  FUNCTION GAME
function game() {
for (var i=0; i<question.length; i++) {
  var currentQuestion = question[i];
  play(currentQuestion.question,currentQuestion.answer)
}
}

// FUNCTION SHOW SCORES
function showScores() {
  console.log("\nYAY! You SCORED: ", score+" out of 15 🤩🤩🤩🤩🤩🤩🤩\n");
  console.log("\nCheck out the HIGH SCORES. \nIf you want to be there send me the screenshot of the score, I'll update.\n");
  highScore.map(score => console.log(score.name, " : ", score.score))
}

// FUNCTION CALLING
welcome();
game();
showScores();

