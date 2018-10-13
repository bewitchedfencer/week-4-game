//Global Variables
//===============================================
var Jack;
var Sam;
var Tealc;
var Daniel;
var players = [];
//Function Declarations
//===============================================

//starts the game
function initialize(){
    $("#arena").empty();
    Jack = new Character("Jack O'Neil", "assets/images/Jack-Oneill.jpg", 150, 8, 10);
    // console.log(Jack);
    Jack.specialAbility("Sarcasm", 7, 30); 
    Sam = new Character("Dr. Samantha Carter", "assets/images/Sam-Carter.jpg", 140, 9, 10);
    Sam.specialAbility("Astrophysics", 7, 30);
    Tealc = new Character("Teal'c", "assets/images/Tealc.jpg", 200, 10, 9);
    Tealc.specialAbility("Super Strength", 9, 25);
    Daniel = new Character("Dr. Daniel Jackson", "assets/images/Daniel-Jackson.jpg", 130, 7, 8);
    Daniel.specialAbility("Research", 6, 40);
    players = [Jack, Sam, Tealc, Daniel];
    console.log(players);
    makeCards(players);
}

//creates the cards to select
function makeCards(anArray){
    anArray.forEach(function(element, index) {
    console.log("element", element); //this is the object
    console.log("index", index);  //this is where the object is in the array
    //creates the entire card
    var cardHolder = $("<div>");
    cardHolder.addClass("stat-card row");
    var image = $("<img>").attr("src", element.image).addClass("img image img-responsive col-xs-5");
    var stats = $("<div>").html(`<h3>${element.name}</h3>\n<p>Health: ${element.hp}</p>\n<p>Attack: ${element.attack}</p>\n<p>Counter Attack: ${element.counterAttack}</p>\n<p>Special Ability: ${element.ability.abilityName}</p>`);
    stats.addClass("col-xs-5 text-normal stats")
    cardHolder.append(image);
    cardHolder.append(stats);
    $("#startCardHolder").append(cardHolder);
    });
}

//Function Calls
//===============================================
initialize();