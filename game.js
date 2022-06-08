
//first trial
var userClickedPattern = [];
var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

var level = 0;



// next sequence code
function nextSequence() {

    userClickedPattern = [];

  level++;

  $("h1").text("level " + level );

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);

  $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColor);
  animatePress(randomChosenColor);
}




// for button clicks then calls next sequence
  $(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);
    animatePress(userChosenColor);

    checkAnswer(userClickedPattern.length-1);
  });


  // changing h1 io level 1 and calling next sequence only once
  $(document).one("keydown", function (event) {

    $("h1").text("level " + level );

  nextSequence();

  });




  // check ansewr
  function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {

    if (userClickedPattern.length === gamePattern.length) {

      setTimeout(  function() {
          nextSequence();
        }, 1000);


    }

  }
  else {

    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();

    $("body").addClass("game-over");

    function removeGame() {
      $("body").removeClass("game-over");
    }

    setTimeout (removeGame,1000);

    $("h1").text("Game Over, press any key to Restart" );

    startOver();

  }
}





// start over
function startOver() {
level = 0;
gamePattern = [];

$(document).one("keydown", function (event) {

  $("h1").text("level " + level );

nextSequence();

});

}



// play sound
function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}



// animations upon clicks
function animatePress(currentColor){
var presser  = $("#" + currentColor);
presser.addClass("pressed");
setTimeout(timer, 100);

function timer() {
  presser.removeClass("pressed");
}

}







//second trial
// var gamePattern = [];
// for (i =0; i < (randy + 1); i++) {
// gamePattern.push(nextSequence());
//
// }
// var buttonColors = ["red", "blue", "green", "yellow"];
// var randy = gamePattern.length;
//
//
// function nextSequence(colorChange) {
//   var randomNumber = Math.floor(Math.random()*4);
//   var randomChosenColor = buttonColors[randomNumber];
//   return randomChosenColor;
//
// }







// //Angela's solution
// var gamePattern = [];
//
// var buttonColors = ["red", "blue", "green", "yellow"];
//
//
// function nextSequence() {
//   var randomNumber = Math.floor(Math.random()*4);
//   var randomChosenColor = buttonColors[randomNumber];
//
// gamePattern.push(randomChosenColor);
// }

//Animations

// for (i = 0; i < $(".btn").length; i++) {
//   $(".btn")[i].click(function() {
// var buttonClick = this.innerHTML;
// animate(buttonClick);
//
//   });
// }
//
// function animate(animation) {
// switch (animation) {
//   case "#green":
//
//   var greenSound = new Audio("sounds/green.mp3");
//   greenSound.play();
//
//     break;
//
//     case "blue":
//
//     var blueSound = new Audio("sounds/blue.mp3");
//     blueSound.play();
//
//       break;
//
//       case "red":
//
//       var redSound = new Audio("sounds/red.mp3");
//       redSound.play();
//
//         break;
//
//         case "yellow":
//
//         var yellowSound = new Audio("sounds/yellow.mp3");
//         yellowSound.play();
//
//           break;
//
//   default: var wrongSound = new Audio("sounds/wrong.mp3");
//   wrongSound.play();
//
//
// }
// }
