//Global Variables
//===============================================
var Jack;
var Sam;
var Tealc;
var Daniel;
var players = [];
var chosen = true;
var firstRun = 0;
var fighting = [];
//Function Declarations
//===============================================

//starts the game
function initialize(){
    $("#arena").empty();
    Jack = new Character("Jack", "assets/images/Jack-Oneill.jpg", 150, 8, 10);
    // console.log(Jack);
    Jack.specialAbility("Sarcasm", 7, 30); 
    Sam = new Character("Sam", "assets/images/Sam-Carter.jpg", 140, 9, 10);
    Sam.specialAbility("Astrophysics", 7, 30);
    Tealc = new Character("Tealc", "assets/images/Tealc.jpg", 200, 10, 9);
    Tealc.specialAbility("Super Strength", 9, 25);
    Daniel = new Character("Daniel", "assets/images/Daniel-Jackson.jpg", 130, 7, 8);
    Daniel.specialAbility("Research", 6, 40);
    players = [Jack, Sam, Tealc, Daniel];
    console.log(players);
    makeCards(players);
}

//creates the cards to select
function makeCards(anArray){
    anArray.forEach(function(element, index) {
    // console.log("element", element); //this is the object
    // console.log("index", index);  //this is where the object is in the array
    //creates the entire card
    var cardHolder = $("<div>");
    cardHolder.addClass("stat-card row");
    var image = $("<img>").attr("src", element.image).addClass("img image img-responsive col-xs-5");
    var stats = $("<div>").html(`<h3>${element.name}</h3>\n<p>Health: ${element.hp}</p>\n<p>Attack: ${element.attack}</p>\n<p>Counter Attack: ${element.counterAttack}</p>\n<p>Special Ability: ${element.ability.abilityName}</p>`);
    stats.addClass("col-xs-5 text-normal stats")
    cardHolder.append(image);
    cardHolder.append(stats);
    cardHolder.attr("id", element.name);
    if(firstRun<players.length){
    $("#startCardHolder").append(cardHolder);
    firstRun++;
    }
    else{
        console.log("here");
        if(chosen){
        $("#hero").append(cardHolder);
        }
        else{
            $("#enemy").append(cardHolder);
            $("#enemy").addClass(".glowing-enemy");
        }
    }
    });
}

//function for clicking and selecting the cards
//card should be made again but on the right side of the screen in the character selection area.
//don't forget to add the glowing class to the selected ones. Class glowing-choice
//empty the card area on the left when the second card is selected
$(document).on("click", ".stat-card", function(){
    // console.log("activated");    
    var chosenCharacter;
        //for some reason this is only returning Jack
        chosenCharacter = $(this).attr("id");
        console.log(chosenCharacter);
        var chosenArr = players.filter(function(element){
            console.log(element);
            console.log(chosenCharacter);
            if(element.name == chosenCharacter){
                return element;
            };
        });
        console.log(chosenArr);
        makeCards(chosenArr);
        if(chosen){         
            $("#fight").removeClass("hide disabled");
            localStorage.setItem("hero", chosenCharacter);
            chosen=false;                    
        }
        else{
            $(".stat-card").addClass(".glowing-enemy");                        
            $("#startCardHolder").empty();
            localStorage.setItem("enemy", chosenCharacter);
            chosen=true;
        }
});

$("#fight").on("click", function(){
    $("#game").empty();
    var hero = localStorage.getItem("hero");
    var enemy = localStorage.getItem("enemy");
    var chosenArr = players.filter(function(element){
        if(element.name == hero){
            return element;
        };
    });
    chosenArr.concat(players.filter(function(element){
        if(element.name == enemy){
            return chosenArr.push(element);
        };
    }));
    console.log(chosenArr);
        var gameArena = $("<div>");
        gameArena.addClass("row").attr("id", "gamePlaying");
        $("#game").append("<div class='col-sm-12'>").append(gameArena);
    chosenArr.forEach(function(element, index) {
        // console.log("element", element); //this is the object
        // console.log("index", index);  //this is where the object is in the array
        //creates the entire card
        var cardHolder = $("<div>");
        cardHolder.addClass("stat-card col-xs-4");
        cardHolder.append(`<div id=${element.name} class='row'>`);
        var image = $("<img>").attr("src", element.image).addClass("img image img-responsive col-xs-5");
        var stats = $("<div>").html(`<h3>${element.name}</h3>\n<p>Health: ${element.hp}</p>\n<p>Attack: ${element.attack}</p>\n<p>Counter Attack: ${element.counterAttack}</p>\n<p>Special Ability: ${element.ability.abilityName}</p>`);
        stats.addClass("col-xs-5 text-normal stats")
        cardHolder.append(image);
        cardHolder.append(stats);
        cardHolder.attr("id", element.name);
        $('#gamePlaying').append(cardHolder);
    });
    $("#game").append("<div class='row'><button class='col-xs-6 btn btn-danger' id='attack'>Attack</button></div>");
});

//function that is an on click for the fight button
//the selection area should go away and the arena will be added to the body with the cards.
//the fight button should also disappear (hide), add the class

//Function Calls
//===============================================
initialize();