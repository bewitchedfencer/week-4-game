//establish variables
//boolean for determining if the player is choosing their character or enemy character
var choser = false;
var attackPhase=false;
var player="";
var enemy="";

//declared function for what happens when player selects their character
function selectCharacters(){
    $("#enemy-HP").html("Who will you battle?");
    choser=true;
    
    console.log("do you see me?");
    
    }
    //resets the screen so that 
    function clearBeginning(){
        $(".beginning-stats").empty();
        $("#enemy-HP").empty();
        // do animation to get these off screen to the left
    }

//object for Jack's health and attack stats
var jackO = {
    name:"jack",
    HP: 100,
    Attack: 6,
    CounterAttack:8,
    specialCounter:0,
    specialAbility:"sarcasm"
};

//obejct for Sam's health and attack stats
var samC = {
    name:"sam",
    HP: 110,
    Attack: 7,
    CounterAttack:5,
    specialCounter:0,
    specialAbility:"astrophysics"
};

//object for Teal'c's health and attack stats
var tealcJ= {
    name:tealc,
    HP: 140,
    Attack: 8,
    CounterAttack:6,
    specialCounter:0,
    specialAbility:"super strength"
};

//object for Daniel's health and attack stats
var danielJ= {
    name:"daniel",
    HP: 120,
    Attack: 5,
    CounterAttack:7,
    specialCounter:0,
    specialAbility:"research"
};

var characterArray=["jack", "sam", "tealc", "daniel"];


//on click at the beginning of the game, selecting character and enemy, Jack
$("#jackLeft").on("click", function(){
    if(choser==false){
   $("#jack").addClass("glowing-choice");
    selectCharacters();
    $("#jackImg").addClass("glowing-choice");
    $("#jackImg").appendTo("#chosen-character");
    player="jack";
    console.log(player);
    }
    else{
        enemy="jack";
        $("#jackImg").appendTo("#enemy-character");
        $("#jackImg").addClass("glowing-enemy");        
        clearBeginning();
        attackPhase=true;
    }
});

//on click at the beginning of the game, selecting character and enemy, Sam
$("#samLeft").on("click", function(){
    if(choser==false){
   $("#sam").addClass("glowing-choice");
    selectCharacters();
    $("#samImg").addClass("glowing-choice");
    $("#samImg").appendTo("#chosen-character");
    player="sam";
    console.log(player);
    }
    else{
        enemy="sam";
        $("#samImg").appendTo("#enemy-character");
        $("#samImg").addClass("glowing-enemy");        
        clearBeginning();     
        attackPhase=true;
        
    }
});

//on click at the beginning of the game, selecting character and enemy, Teal'c
$("#tealcLeft").on("click", function(){
    if(choser==false){
   $("#tealc").addClass("glowing-choice");
    selectCharacters();
    $("#tealcImg").addClass("glowing-choice");
    $("#tealcImg").appendTo("#chosen-character");
    player="tealc";
    console.log(player);
    }
    else{
        enemy="tealc";
        $("#tealcImg").addClass("glowing-enemy");        
        $("#tealcImg").appendTo("#enemy-character");
        clearBeginning();        
        attackPhase=true;
        
    }
});

//on click at the beginning of the game, selecting character and enemy,Daniel
$("#danielLeft").on("click", function(){
    if(choser==false){
   $("#daniel").addClass("glowing-choice");
    selectCharacters();
    $("#danielImg").addClass("glowing-choice");
    $("#danielImg").appendTo("#chosen-character");
    player="daniel";
    console.log(player);
    }
    else{
        enemy="daniel";
        $("#danielImg").appendTo("#enemy-character");  
        $("#danielImg").addClass("glowing-enemy");        
        clearBeginning();
        attackPhase=true;
        
        
    }
});
console.log(characterArray.indexOf(player));
console.log(player); //why is this not logging the chosen player?
console.log(enemy); //of the chosen enemy?

//when the player and enemy have been chosen, the following code runs.
if(attackPhase==true){
    console.log("success");
    //attack button appears when both characters chosen
    $("#attack-button").addClass("btn btn-large btn-danger");
    //text for attack button is different if the player is Teal'c
    if(player==tealcJ){
        $("#attack-button").text("Jaffa! Cree!");        
    }
    //text for attack button with human characters
    else{
    $("#attack-button").text("Attack!");
    }

}
