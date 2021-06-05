//where rN = randomNumber
//rDN = randomDiceNumber
//rDS = randomStringNumber

//returns a random number between 1 and 6 inclusive
function randomFunction(){
    //return random number
    return Math.floor(Math.random() * 6) + 1;
}

//turns number into string (for inserting into fontawesome i-tag)
function numberToString(rN){
    //convert number to text
    if(rN === 1) return "one";
    else if(rN === 2) return "two";
    else if(rN === 3) return "three";
    else if(rN === 4) return "four";
    else if(rN === 5) return "five";
    else if(rN === 6) return "six";
    else return "Number not on die!"
} 

//for player 1 dice throw
var rDN1 = randomFunction();
var rDS1 = numberToString(rDN1);
document.querySelector("div.diceOne").innerHTML = "<i class=\"fas fa-dice-" + rDS1 + "\"></i>";

//for player 2 ndice throw
var rDN2 = randomFunction();
var rDS2 = numberToString(rDN2);
document.querySelector("div.diceTwo").innerHTML = "<i class=\"fas fa-dice-" + rDS2 + "\"></i>";

//to change main heading based on winner
if(rDN1 > rDN2){
    document.querySelector("h1.mainHeading").innerHTML = "<i class=\"fas fa-flag\"></i> Player 1 Wins!";
} else if(rDN1 < rDN2){
    document.querySelector("h1.mainHeading").innerHTML = " Player 2 Wins! <i class=\"fas fa-flag\"></i>";
} else {
    document.querySelector("h1.mainHeading").innerHTML = "<i class=\"fas fa-flag\"></i> Draw! <i class=\"fas fa-flag\"></i>";
}