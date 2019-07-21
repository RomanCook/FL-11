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
      let agility = this.agility;
      console.log(agility);
    },
    Fighter.prototype.getHelth = function(){
      let helth = this.hp;
      console.log(helth);
    },
    Fighter.prototype.attack = function(defender){
      let sto = 100;
      if(Math.ceil(Math.random() * sto) > defender.hp ){
        defender.hp -= this.damage;
      } else {
        console.log(`${defender.name} attak missed`);
      }
    },
    Fighter.prototype.logCombatHistory = function(){
      console.log(`Name: ${this.getName}, ${this.combatHistory}`)
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
        this.Wins ++;
    },
    Fighter.prototype.addLoss = function(){
        this.Losses ++;
    }
}
