window.onload = function() {
    console.log("I liiive!");
//Variables
//each button contains both an integer (0 by default) and the id of the html element
//paladinButton
var paladinButton = {
    damageBonus: "4",
    damageMax: "8",
    buttonId: "paladinBtn",
    roundDamage: "0"
}
//barbarianButton
var barbarianButton = {
    damageBonus: "6",
    damageMax: "12",
    buttonId: "barbarianBtn",
    roundDamage: "0"
}
//rogueButton
var rogueButton = {
    damageBonus: "6",
    damageMax: "12",
    buttonId: "rogueBtn",
    roundDamage: "0"
}
//wizButton
var wizButton = {
    damageBonus: "0",
    damageMax: "4",
    buttonId: "wizardBtn",
    roundDamage: "0"
}
//trollHealth
var trollHealth;

//wins equal to 0
var playerWins = 0;
//losses equal to 0
var playerLosses = 0;

var playerDamage;

var winText = "Wins: ";

var lossText = "Loss: ";

var trollText = "Troll Health: ";

function generateRandomNumber(max, bonus){
    var returnValue = [Math.floor(Math.random()*max)]
    if (returnValue < 1){
        returnValue = 1;
    }
     returnValue = parseInt(returnValue)+ parseInt(bonus);
    console.log("Random number: " + returnValue);
    return returnValue;
}

 
function initGame(){
//each button gets a different int value generated for it
console.log("Initializing...");
paladinButton.roundDamage = generateRandomNumber(paladinButton.damageMax, paladinButton.damageBonus);
barbarianButton.roundDamage = generateRandomNumber(barbarianButton.damageMax, barbarianButton.damageBonus);
rogueButton.roundDamage = generateRandomNumber(rogueButton.damageMax, rogueButton.damageBonus);
//wizard is casting magic missile -> 3 casts of something that deals 1d4 damage
    wizButton.roundDamage = parseInt(generateRandomNumber(wizButton.damageMax, wizButton.damageBonus)) + parseInt(generateRandomNumber(wizButton.damageMax, wizButton.damageBonus)) + parseInt(generateRandomNumber(wizButton.damageMax, wizButton.damageBonus));
trollHealth = generateRandomNumber(40, 80);
playerDamage = 0;
//update html elements
document.getElementById("lossDisplay").innerHTML = lossText + playerLosses;
document.getElementById("winsDisplay").innerHTML = winText + playerWins;
document.getElementById("damageDisplay").innerHTML = playerDamage;
document.getElementById("trollHealth").innerHTML = trollText + trollHealth;

playGame(  );
}
 
function playGame(  ){
//should have a listener for button press
$(document).ready(function(){
    // you can use the above or the one shown below

    $('#paladinBtn').click(function(e){
        e.preventDefault();
        playerDamage = parseInt(playerDamage) + parseInt(paladinButton.roundDamage);
        document.getElementById("damageDisplay").innerHTML = playerDamage;
        valueCheck(playerDamage, trollHealth);
    });

    $('#barbarianBtn').click(function(e){
        e.preventDefault();
        playerDamage = parseInt(playerDamage) + parseInt(barbarianButton.roundDamage);
        document.getElementById("damageDisplay").innerHTML = playerDamage;
        valueCheck(playerDamage, trollHealth);
    });

    $('#rogueBtn').click(function(e){
        e.preventDefault();
        playerDamage = parseInt(playerDamage) + parseInt(rogueButton.roundDamage);
        document.getElementById("damageDisplay").innerHTML = playerDamage;
        valueCheck(playerDamage, trollHealth);
    });

    $('#wizardBtn').click(function(e){
        e.preventDefault();
        playerDamage = parseInt(playerDamage) + parseInt(wizButton.roundDamage);
        document.getElementById("damageDisplay").innerHTML = playerDamage;
        valueCheck(playerDamage, trollHealth);
    });

});
}

function valueCheck(totalDamage, trollVal){
    //when button is pressed take value from button
    if (parseInt(totalDamage) === parseInt(trollVal)){
        playerWins++;
        initGame();
    }
    if (parseInt(totalDamage) > parseInt(trollVal)){
        playerLosses++;
        initGame();
    }
    else{
        return;
    }

}
initGame();
}