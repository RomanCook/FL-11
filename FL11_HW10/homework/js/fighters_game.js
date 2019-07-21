function Fighter(name, damage, hp, agility, combatWins, combatLosses){
    this.name = name,
    this.damage = damage,
    this.hp = hp,
    this.agility = agility,
    this.combatHistory = {
        Wins: combatWins,
        Losses: combatLosses
    },
    Fighter.prototype.getName = function(){
      console.log(this.name);
    },
    Fighter.prototype.getDamage = function(){
      console.log(this.damage);
    },
    Fighter.prototype.getAgility = function(){
      console.log(this.agility);
    },
    Fighter.prototype.getHelth = function(){
      console.log(this.hp);
    },
    Fighter.prototype.attack = function(defender){
      let sto = 100;
      if(Math.ceil(Math.random() * sto) > defender.hp ){
        defender.hp -= this.damage;
        this.combatWins = this.addWin;
        defender.Losses = defender.addLoss;
        console.log(`${this.name} make ${this.damage} damage to ${defender.name}`);
      } else {
        console.log(`${defender.name} attak missed`);
      }
    },
    Fighter.prototype.logCombatHistory = function(){
      console.log(`Name: ${this.name}, ${this.CombatHistory}`)
    },
    Fighter.prototype.heal = function(a){
      let sto = 100;
      if(this.hp + a > sto){
        this.hp += a;
      }
    },
    Fighter.prototype.dealDamage = function(b){
        if(this.hp - b >= 0) {
            this.hp -= b;
        } else {
            this.hp = 0;
        }
    },
    Fighter.prototype.addWin = function(){
        this.Wins = this.Wins + 1;
    },
    Fighter.prototype.addLoss = function(){
        this.Losses = this.Losses + 1;
    }
}
