// alert("hi");
let gamePattern = [];
let userClickedPattern =[];
let buttonColours = ["red","blue","green","yellow"];

let level = 0;
let started = false;

    $(document).on("keydown", () => {
        if(!started) {
        nextSequence();
        started = true;
        }
    });

// $('.btn').click((event) => {
//     let buttonId = $(event.currentTarget).attr('id');
//     let userChosenColour = buttonId;
//     userClickedPattern.push(userChosenColour);
//     playSound(userChosenColour);
//     animatePress(userChosenColour);
//     checkAnswer(userChosenColour.length-1);
// });

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    playSound(userChosenColour);
    animatePress(userChosenColour);
  
    checkAnswer(userClickedPattern.length-1);
  });

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}

function nextSequence() {
    userClickedPattern =[];
    let randomNumber = Math.floor(Math.random()*4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").html(`Level ${level}`);
}

function playSound(name){
    let sound = new Audio(`./sounds/${name}.mp3`);
    sound.play();
}

function animatePress(currentColour){
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}


//1. Create a new function called startOver().
function startOver() {

    //3. Inside this function, you'll need to reset the values of level, gamePattern and started variables.
    level = 0;
    gamePattern = [];
    started = false;
  }

