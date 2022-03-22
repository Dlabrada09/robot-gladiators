var playerName = window.prompt("What is your robot's name?")
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function (enemyName) {
    window.alert("Welcome to Robot Gladiators!");
    var promptFight = widow.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    if (promptFight == "fight" || promptFight == "FIGHT") {
    enemyHealth = enemyHealth - playerAttack;
    console.log(
    playerName + " attacked" + enemyName + "." + "now has " + enemyHealth + " health remaining."
    );
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName +  " still has " + enemyHealth + " health left.");
    }

    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
}
    else if (promptFight == "skip" || promptFight == "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 2;
        }
        else {
            for(var i = 0; i < enemyNames.length; i++) {
                fight(enemyNames[i]);
            }
        }
    } 
    else {
        window.alert("You need to choose a valid option. Try again!");
    }
}
