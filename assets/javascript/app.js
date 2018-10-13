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
    Jack = new Character("Jack O'Neil", "../images/Jack-Oneill.jpg", 150, 8, 10);
    // console.log(Jack);
    Jack.specialAbility("Sarcasm", 7, 30); 
    Sam = new Character("Dr. Samantha Carter", "../images/Sam-Carter.jpg", 140, 9, 10);
    Sam.specialAbility("Astrophysics", 7, 30);
    Tealc = new Character("Teal'c", "../images/Tealc", 200, 10, 9);
    Tealc.specialAbility("Super Strength", 9, 25);
    Daniel = new Character("Dr. Daniel Jackson", "../images/Daniel-Jackson.jpg", 130, 7, 8);
    Daniel.specialAbility("Research", 6, 40);
    players = [Jack, Sam, Tealc, Daniel];
    console.log(players);
    makeCards(players);
}

//creates the cards to select
function makeCards(anArray){
    anArray.forEach(function(element, index) {
    //    console.log(element); 

    });
}

//Function Calls
//===============================================
initialize();