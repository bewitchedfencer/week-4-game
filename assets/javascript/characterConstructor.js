
var Character = function(name, image, HP, attack, counterAttack){
    this.name = name;
    this.hp = HP;
    this.image = image;
    this.attack = attack;
    this.counterAttack = counterAttack;
    this.specialCounter = 0;
    this.ability = {};
    this.specialAbility = function(abilityName, threshhold, abilityAttack){
        this.ability = ( new Ability(abilityName, threshhold, abilityAttack));
    };
    this.addSpecial = function(){
        return this.specialCounter++;
    }
};

