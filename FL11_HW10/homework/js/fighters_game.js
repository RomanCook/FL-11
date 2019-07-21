function Fighter(name, damage, hp, agility, combatWins, combatLosses){
    this.name = name,
    this.damage = damage,
    this.hp = hp,
    this.agility = agility,
    this.combatHistory = {
        Wins: combatWins,
        Losses: combatLosses
    },
    this.getName = function(){
            let name = this.name;
            console.log(name);
        },
        this.getDamage = function(){
            let damage = this.damage;
            console.log(damage);
        },
        this.getAgility = function(){
            let agility = this.agility;
            console.log(agility);
        },
        this.getHelth = function(){
            let helth = this.hp;
            console.log(helth);
        },
        this.attack = function(defender){
            
        },
        this.logCombatHistory = function(){
            console.log(`Name: ${this.getName}, ${this.combatHistory}`)
        },
        this.heal = function(a){
            if(this.hp + a > 100){
                this.hp += a;
            }
        },
        this.dealDamage = function(b){
            if(this.hp - b >= 0) {
                this.hp -= b;
            } else {
                this.hp = 0;
            }
        },
        this.addWin = function(){
            this.Wins ++;
        },
        this.addLoss = function(){
            this.Losses ++;
        }
    }