//VARIABLES

  var randomNumber;
  var wins;
  var losses;
  var userScore;
  var inputArray;
  var num;
  var points;
  var bubVal;
  var grumpyVal;
  var venusVal;
  var henriVal;

//FUNCTIONS
function init(){
  randomNumber = Math.floor(19 + (Math.random() * 120));
  wins = 0;
  losses = 0;
  bubVal =  Math.floor(1 + (Math.random() * 12));
  grumpyVal =  Math.floor(1 + (Math.random() * 12));
  venusVal =  Math.floor(1 + (Math.random() * 12));
  henriVal =  Math.floor(1 + (Math.random() * 12));
  inputArray =[];
  userScore =0;
}

function reset() {
  randomNumber = Math.floor(19 + (Math.random() * 120));
  bubVal =  Math.floor(1 + (Math.random() * 12));
  grumpyVal =  Math.floor(1 + (Math.random() * 12));
  venusVal =  Math.floor(1 + (Math.random() * 12));
  henriVal =  Math.floor(1 + (Math.random() * 12));
  inputArray =[];
  userScore = 0;
   $('#wins').html(wins);
   $('#losses').html(losses);
    $('#randomNumber').html(randomNumber);
    $('#score').html(userScore);
  }
 

function winLose() {
    if(userScore > randomNumber) {
      alert("YOU LOSE!");
      losses += 1;
      reset();
    };
    if (userScore == randomNumber) {
      alert("YOU WIN!!!");
      wins += 1;
      reset();
    };
  }
      
  function addPoints() {
    for(var i=0; i <= inputArray.length; i++) {
    userScore += inputArray[i];
    };
  };

$(document).ready(function(){

 init();
    $('#wins').html(wins);
   $('#losses').html(losses);
   $('#score').html(userScore);
    $('#randomNumber').html(randomNumber);
  });

  // Crystal click functions

  $('#bub').click(function() {
    inputArray.push(bubVal);
    userScore += bubVal;
    $('#score').html(userScore);
    winLose();
  });

   $('#grumpy').click(function() {
    inputArray.push(grumpyVal);
    userScore += grumpyVal;
    $('#score').html(userScore);
    winLose();
  }); 

   $('#venus').click(function() {
    inputArray.push(venusVal);
    userScore += venusVal;
    $('#score').html(userScore);
    winLose();
  });

   $('#henri').click(function() {
    inputArray.push(henriVal);
    userScore += henriVal;
    $('#score').html(userScore);
    winLose();
  });
