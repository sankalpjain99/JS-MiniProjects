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
    level++;
    $("#level-title").text("Level " + level);
    var num = Math.floor(Math.random()*4);
    var randomChosenColor = buttonColors[num];
    gamePattern.push(randomChosenColor);
    $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

// Function to play appropriate sound according to color 
function playSound(color){
    var sound = new Audio("sounds/" + color + ".mp3");
    sound.play();
}

// Function to animate Button when clicked 
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColor).removeClass("pressed");
    }, 100);
}





