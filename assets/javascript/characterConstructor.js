var Ability = require("./abilityConstructor.js")

var Character = function(name, HP, attack, counterAttack, specialCounter){
    this.name = name;
    this.hp = HP;
    this.attack = attack;
    this.counterAttack = counterAttack;
    this.specialCounter = specialCounter;
    this.ability = {};
    this.specialAbility = function(abilityName, threshhold, abilityAttack){
        this.ability = new Ability(abilityName, threshhold, abilityAttack);
    };
};

module.exports = Character;