// Generate Random Numbers 
var num1 = Math.random();
num1 = Math.floor(num1*6)+1;
var num2 = Math.random();
num2 = Math.floor(num2*6)+1;

// Set Image according to number 
images = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"]
var leftDice = document.querySelector(".img1");
leftDice.setAttribute("src", "images/"+images[num1-1]);

var rightDice = document.querySelector(".img2");
rightDice.setAttribute("src", "images/"+images[num2-1]);

// Change Title according to result 
heading = document.querySelector("h1");
if(num1 === num2){
    heading.innerHTML = "Draw";
}
else if(num1>num2){
    heading.innerHTML = "🚩 Player 1 Wins!";
}
else{
    heading.innerHTML = "Player 2 Wins! 🚩";
}

