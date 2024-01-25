var yourName = prompt("What is your name?");
var theirName = prompt("What is your lover's name?");

var result = Math.random();
result = result * 100;
result = Math.floor(result) + 1;

if (result >= 75) {alert("Congratulations! You are " + result + "% compatible. :)");}
if (result <= 74 && result >= 30) {alert("You are " + result + "% compatible.");}
else {alert("You are only " + result + "% compatible. :(");}
