var randomNumber;
var aTeamInput;
var bTeamInput;
var responseHTML;
var aTeamScore = 0;
var bTeamScore = 0;
var aScoreHTML;
var bScoreHTML;
responseHTML = document.getElementById('response');
aScoreHTML = document.getElementById('teamAScore');
bScoreHTML = document.getElementById('teamBScore');

// generate random number
function generateNumber() {
    randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log('randomNumber==> ', randomNumber);
} 

// places the response into the HTML element
function youWonHTML (message) {
    document.getElementById('aTeamNumber').value ='';
    document.getElementById('bTeamNumber').value ='';
    responseHTML.innerHTML = message;
    //setTimeout(allDone, 1600);
    generateNumber();
}

function clearInput (message) {
    document.getElementById('aTeamNumber').value ='';
    document.getElementById('bTeamNumber').value ='';
    responseHTML.innerHTML = message;
 }

// reloads the page 
function allDone() {
    location.reload();
 }

function updateScore () {
    aScoreHTML.innerHTML = '<h2>Team A: ' + aTeamScore + '</h2>';
    bScoreHTML.innerHTML = '<h2>Team B: ' + bTeamScore + '</h2>';
}

function resetScores() {
    aTeamScore = 0;
    bTeamScore = 0;
    updateScore ()
}

//aScoreHTML.innerHTML = '<h2>Team A: ' + aTeamScore + '</h2>';
//bScoreHTML.innerHTML = '<h2>Team B: ' + bTeamScore + '</h2>';

 generateNumber();
 resetScores()
 
// this places the number from userInput into the console, but not to HTML
/* function getUserInput() {
    var userInput = document.getElementById('userNumber').value;
    console.log(userInput);
} look up javascript addeventlistener */

document.getElementById("whoWonBtn").addEventListener("click", function() {    
    aTeamInput = parseInt(document.getElementById('aTeamNumber').value);
    console.log('Team A Guess: ' + aTeamInput);    
    bTeamInput = parseInt(document.getElementById('bTeamNumber').value);
    console.log('Team B Guess: ' + bTeamInput);
    });

    // clears the input in the fields after click
 

// response button

document.getElementById("whoWonBtn").addEventListener("click", function() {    
    if (bTeamInput < 1 || bTeamInput > 10) {
        clearInput('You both must choose a number from 1 to 10. Please try again.');                  
    } else if (aTeamInput === bTeamInput) {
        clearInput('You must choose different numbers. Please try again.');           
    } else if (aTeamInput < 1 || aTeamInput > 10) {
        clearInput('You both must choose a number 1 to 10. Please try again.');         
    } else if (isNaN(bTeamInput) || isNaN(aTeamInput)) {
        clearInput('You both must enter a number 1 to 10.');
    } else if (aTeamInput === randomNumber) {
        youWonHTML('The number is ' + randomNumber + '. Team A guessed right! Play Again!'); 
        aTeamScore += 1;
        updateScore();
        if (aTeamScore === 5) {
            clearInput('<h1>Team A is the Winner!</h1>');
            resetScores()
            generateNumber();
        }
        console.log('Team A Score: ' + aTeamScore);      
    } else if (bTeamInput === randomNumber) {
        youWonHTML('The number is ' + randomNumber + '. Team B guessed right! Play Again!');
        bTeamScore += 1;
        updateScore();
        if (bTeamScore === 5) {
            clearInput('<h1>Team B is the Winner!</h1>'); 
            resetScores()
            generateNumber();
        }
        console.log('Team B Score: ' + bTeamScore);        
    } else {
        clearInput('Neither of those guesses is the number. Try again.');        
    } 
});


