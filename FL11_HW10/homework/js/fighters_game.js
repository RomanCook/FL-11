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
            console.log(this.name);
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
            let sto = 100;
            if(Math.ceil(Math.random() * sto) > defender.hp){
                defender.hp -= this.damage;
            } else {
                console.log(`${defender.name} attak missed`);
            }
        },
        this.logCombatHistory = function(){
            console.log(`Name: ${this.getName}, ${this.combatHistory}`)
        },
        this.heal = function(a){
            let sto = 100;
            if(this.hp + a > sto){
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
