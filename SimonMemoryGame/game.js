buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userPattern = [];
var level=0;

// Monitors Button Clicks 
$(".btn").click(function(){
    var userColor = $(this).attr("id");
    userPattern.push(userColor);
    playSound(userColor);
    animatePress(userColor);
    checkAnswer(userPattern.length-1);
})

// Monitors KeyBoard Presses 
$(document).keypress(function(){
    if(!level){
        $("#level-title").text("Level " + level);
        nextSequence();
    }
})

// Function to start sequence of steps at increasing level and at the start of the game 
function nextSequence(){
    userPattern=[]
    level++;
    $("#level-title").text("Level " + level);
    var num = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[num];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

// Function to play appropriate sound according to color 
function playSound(reqSound){
    var sound = new Audio("sounds/" + reqSound + ".mp3");
    sound.play();
}

// Function to animate Button when clicked 
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currLevel){
    if(gamePattern[currLevel] == userPattern[currLevel]){
        if(userPattern.length === gamePattern.length){
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("Game Over, Press any key to restart!");
        startOver();
    }
}

function startOver(){
    level=0;
    gamePattern=[];
}





