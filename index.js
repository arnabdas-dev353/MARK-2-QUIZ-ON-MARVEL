var readlineSync = require('readline-sync');
var chalk = require('chalk');
var score = 0;

// HIGH-SCORE RECORD
var highScore = [
{
  name : chalk.yellow("Arnab"),
  score : chalk.cyan("15")
},{
  name : chalk.yellow("Akash"),
  score : chalk.cyan("14")
},{
  name : chalk.yellow("Amy"),
  score : chalk.cyan("13")
}];

// QUESTIONS RECORD
var question = [
  {
    question : chalk.yellowBright("\nQ1. What year was the first Iron Man movie released, kicking off the Marvel Cinematic Universe? (eg - 2022)\n"),
    answer : "2008"
  },{
     question : chalk.yellowBright("\nQ2. What is the name of Thor’s hammer?\n"),
    answer : "MJOLNIR"
  },{
     question : chalk.yellowBright("\nQ3. What is Captain America’s shield made of?\n"),
    answer : "VIBRANIUM"
  },{
     question : chalk.yellowBright("\nQ4. Who was the last holder of the Space Stone before Thanos claims it for his Infinity Gauntlet?\n"),
    answer : "LOKI"
  },{
     question : chalk.yellowBright("\nQ5. Who does the Mad Titan sacrifice to acquire the Soul Stone?\n"),
    answer : "GAMORA"
  },{
     question : chalk.yellowBright("\nQ6. Who is Black Panther’s sister?\n"),
    answer : "SHURI"
  },{
     question : chalk.yellowBright("\nQ7. Doctor Strange's original first name ?\n"),
    answer : "BENEDICT"
  },{
     question : chalk.yellowBright("\nQ8. Thor’s Mjolnir is made from the metal of a dying ___?\n"),
    answer : "STAR"
  },{
     question : chalk.yellowBright("\nQ9. Who is the firstborn child of Odin?\n"),
    answer : "HELA"
  },{
     question : chalk.yellowBright("\nQ10. On what planet was the Soul Stone in Infinity War?\n"),
    answer : "VORMIR"
  },{
     question : chalk.yellowBright("\nQ11.   What is the name of Tony's interactive computer assistant?\n"),
    answer : "JARVIS"
  },{
     question : chalk.yellowBright("\nQ12. How many Infinity Stones are there?\n"),
    answer : "SIX"
  },{
     question : chalk.yellowBright("\nQ13. What type of doctor is Doctor Strange?\n"),
    answer : "NEUROSURGEON"
  },{
     question : chalk.yellowBright("\Q14. Who is the Winter Soldier?\n"),
    answer : "BUCKY"
  },{
     question : chalk.yellowBright("\nQ15. Who rescued Tony Stark and Nebula from space?\n"),
    answer : "CAPTAIN MARVEL"
  }];

// FUNCTION WELCOME
function welcome() {
  var userName = readlineSync.question(chalk.blue("May I Know Your Name Please? \n"));
  var w = chalk.bold.yellowBright(userName);
  console.log(chalk.yellow("Hello "+w+" !, Welcome to QUIZ-ON-MARVEL.\n"));

  console.log(chalk.bold.yellow("HERE ARE SOME RULES : \n1. IF THERE IS ANY MISTAKE IN YOUR SPELLING, YOU WILL LOOSE SCORE. \n2. USE LETTERS OR WORDS TO ANSWER EXCEPT THE 1ST QUESTION. \n3. AND SORRY FOR THESE RULES, THIS IS MANDATORY AS THE CODE IS VERY SENSITIVE. \n4. ENJOY YOUR GAME! : "));

  console.log("----------------------------------------------");
}

// FUNCTION PLAY
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log(chalk.green("You're right! 🥳🤩\n"));
    score++;
  } else {
    console.log(chalk.red("You're wrong! 😟\n"));
    score--;
  }
  console.log(chalk.blue("\nYour Current Score --> "+score));
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
  console.log(chalk.yellow("\nYAY! You SCORED: ", score+" out of 15 🤩🤩🤩🤩🤩🤩🤩\n"));
  console.log(chalk.bgRed("\nCheck out the HIGH SCORES.\n\n\nIf you want to be there send me the screenshot of the score, I'll update.\n"));
  highScore.map(score => console.log(score.name, " : ", score.score))
}

// FUNCTION CALLING
welcome();
game();
showScores();

