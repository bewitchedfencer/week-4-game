//establish variables
//boolean for determining if the player is choosing their character or enemy character
var choser = false;
var player="";
var enemy="";
var i=-1;
var j=-1;
var characterArray=[]; //is there any way to make an array of objects?
var specialX=0;  //special ability counter for enemy
var specialY=0;
var playerHealth=0;
var playerAttack=0;



function initialize(){
choser=false;
player="";
enemy="";
i=-1;
j=-1;
characterArray=[];
specialX=0;
specialY=0;
for(var t=0; t<4; t++){
    characterArray.push(jackO);
    characterArray.push(samC);
    characterArray.push(tealcJ);
    characterArray.push(danielJ);
    console.log(characterArray[t]);
}

}
//declared function for what happens when player selects their character
function selectCharacters(){
    choser=true;
    }
    //resets the screen so that 
    function clearBeginning(){
        $(".col-xs-3").empty();
        $("#enemy-HP").empty();
        // do animation to get these off screen to the left
    }

   //when the player and enemy have been chosen, the following code runs.
   function attackPhase(){
    if((characterArray.indexOf(player)!=-1)&&(characterArray.indexOf(enemy))!=-1){
        console.log("success");
        $("instructions").removeClass("instructions");
        $(".arena").addClass("arena-active");
        //attack button appears when both characters chosen
        $("#attack-button").addClass("btn btn-large btn-danger text-center");
        //adding background color to text elements
        $(".fight-text").css("background-color", "rgba(223,234,230, .7");    
        //text for attack button is different if the player is Teal'c
        if(player==characterArray[2]){
            $("#attack-button").text("Jaffa! Cree!");        
        }
        //text for attack button with human characters
        else{
        $("#attack-button").text("Attack!");
        }
        attackUpdate();
        console.log(characterArray[j].HP);
    } 
    $("#theme").get(0).play();
    }

    function attackUpdate(){
        //finds the index number for the player and enemy and uses that to find the objects in the array
        i = characterArray.indexOf(player);
        j = characterArray.indexOf(enemy);
        playerHealth=characterArray[i].HP;
        playerAttack=characterArray[i].Attack;  
        $("#enemy-HP").html("<p>Enemy HP "+ characterArray[j].HP+"</p>");
        $("#enemy-special").html("<p>Enemy Special "+ characterArray[j].specialAbility+ "</p>");
        $("#enemySpecialCounter").html("<div class='progress'> <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:" + specialX + "%'> <span class='sr-only'>40% Complete (success)</span></div></div>")
        $("#playerSpecialCounter").html("<div class='progress'> <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:" + specialX + "%'> <span class='sr-only'>40% Complete (success)</span></div></div>")
        $("#player-special").html("<p>Player Special "+characterArray[i].specialAbility+"<p>");
        $("#player-HP").html("<p>Player HP "+characterArray[i].HP+"</p>");
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


//on click at the beginning of the game, selecting character and enemy, Jack
$("#jack").on("click", function(){
    if(choser==false){
   $("#jack").addClass("glowing-choice");
    selectCharacters();
    $("#jackImg").addClass("glowing-choice");
    $("#jackImg").appendTo("#chosen-character");
    player=characterArray[0];
    console.log(player);
    console.log(typeof(player));
    console.log(characterArray.indexOf(player));    
    }
    else{
        enemy=characterArray[0];
        $("#jackImg").appendTo("#enemy-character");
        $("#jackImg").addClass("glowing-enemy pull-right");        
        clearBeginning();
        attackPhase();
    }
});

//on click at the beginning of the game, selecting character and enemy, Sam
$("#sam").on("click", function(){
    if(choser==false){
   $("#sam").addClass("glowing-choice");
    selectCharacters();
    $("#samImg").addClass("glowing-choice");
    $("#samImg").appendTo("#chosen-character");
    player=characterArray[1];
    console.log(player);
    }
    else{
        enemy=characterArray[1];
        $("#samImg").appendTo("#enemy-character");
        $("#samImg").addClass("glowing-enemy pull-right");        
        clearBeginning();   
        console.log(enemy);  
        console.log(typeof(enemy));
        console.log(characterArray.indexOf(enemy));
        attackPhase();
        
    }
});

//on click at the beginning of the game, selecting character and enemy, Teal'c
$("#tealc").on("click", function(){
    if(choser==false){
   $("#tealc").addClass("glowing-choice");
    selectCharacters();
    $("#tealcImg").addClass("glowing-choice");
    $("#tealcImg").appendTo("#chosen-character");
    player=characterArray[2];
    console.log(player);
    }
    else{
        enemy=characterArray[2];
        $("#tealcImg").addClass("glowing-enemy pull-right");        
        $("#tealcImg").appendTo("#enemy-character");
        clearBeginning();        
        console.log(enemy);
        attackPhase();
        
    }
});

//on click at the beginning of the game, selecting character and enemy,Daniel
$("#daniel").on("click", function(){
    if(choser==false){
   $("#daniel").addClass("glowing-choice");
    selectCharacters();
    $("#danielImg").addClass("glowing-choice");
    $("#danielImg").appendTo("#chosen-character");
    player=characterArray[3];
    console.log(player);
    }
    else if(choser==true){
        enemy=characterArray[3];
        $("#danielImg").appendTo("#enemy-character");  
        $("#danielImg").addClass("glowing-enemy pull-right");        
        clearBeginning();
        attackPhase();
        
        
    }
});

 $("#attack-button").on("click", function(){
    $("#zat").get(0).play();    
    characterArray[j] //enemy in array.
    characterArray[j].HP -= characterArray[i].Attack;
    characterArray[i].Attack += playerAttack;
    playerHealth-=characterArray[j].CounterAttack;
    specialX+=10;
    specialY+=10;
    $("#enemySpecialCounter").html("<div class='progress'> <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:" + specialX + "%'> <span class='sr-only'>40% Complete (success)</span></div></div>")
    $("#playerSpecialCounter").html("<div class='progress'> <div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='40' aria-valuemin='0' aria-valuemax='100' style='width:" + specialX + "%'> <span class='sr-only'>40% Complete (success)</span></div></div>")
    console.log(specialX)
    console.log(characterArray[j].HP);
    console.log(playerHealth);
 });

 //write following conditions:
 //if enemy HP==0
 //if all enemy HP==0
 //if player HP==0
 //if special X and Y get to 100



 initialize();