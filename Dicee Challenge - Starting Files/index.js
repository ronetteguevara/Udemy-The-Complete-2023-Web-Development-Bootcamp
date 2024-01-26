var mainHeading = document.querySelector("h1");
var randomNumber1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
var randomNumber2 = Math.floor(Math.random() * (6 - 1 + 1) + 1) ;

function diceGame(){
    if (randomNumber1 > randomNumber2) {
        mainHeading.innerText = "🚩 Player 1 Wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        mainHeading.innerText = "🚩 Player 2 Wins!";
    }
    else if (randomNumber1 === randomNumber2) {
        mainHeading.innerText = "🚩 Draw!";
    };

    if (randomNumber1 === 1) {
        document.querySelector(".img1");
        image.src="./images/dice1.png";
    }
    else if (randomNumber1 === 2) {
        document.querySelector(".img1").src="./images/dice2.png";
    }
    else if (randomNumber1 === 3) {
        document.querySelector(".img1").src="./images/dice3.png";
    }
    else if (randomNumber1 === 4) {
        document.querySelector(".img1").src="./images/dice4.png";
    }
    else if (randomNumber1 === 5) {
        document.querySelector(".img1").src="./images/dice5.png";
    }
    else {
        document.querySelector(".img1").src="./images/dice6.png";
    };

    if (randomNumber2 === 1) {
        document.querySelector(".img2").src="./images/dice1.png";
    }
    else if (randomNumber2 === 2) {
        document.querySelector(".img2").src="./images/dice2.png";
    }
    else if (randomNumber2 === 3) {
        document.querySelector(".img2").src="./images/dice3.png";
    }
    else if (randomNumber2 === 4) {
        document.querySelector(".img2").src="./images/dice4.png";
    }
    else if (randomNumber2 === 5) {
        document.querySelector(".img2").src="./images/dice5.png";
    }
    else {
        document.querySelector(".img2").src="./images/dice6.png";
    };
}
