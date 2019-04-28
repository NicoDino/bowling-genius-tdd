let Game = function () {
    let rolls = [];
    let onlyRolls=[];
    var firtsShoot = false;
    var isSpare = false;
    var isStrike = false;
    var score;
    var lastPins;
    var secondStrikeBonus=true;
    var doubleStrike = false;

    this.roll = function (pinsKnocked) {
        firtsShoot=!firtsShoot;
        lastPins=0;
        score=pinsKnocked;
        if(!firtsShoot){
            lastPins=onlyRolls[onlyRolls.length-1];
        }
        
        if(isStrike){
         
            score = score+pinsKnocked;
            if(doubleStrike){
                score =score+pinsKnocked;
                doubleStrike=false;
            }
            secondStrikeBonus=!secondStrikeBonus;
            if(secondStrikeBonus){
                isStrike=false;
            }
          
            }
           
        
        if(isSpare){
            score = score+pinsKnocked;
            isSpare=false;
        }
        if(pinsKnocked==10 && firtsShoot){
            if(isStrike){
                doubleStrike=true;
            }
            isStrike=true;
            secondStrikeBonus=true;
            firtsShoot=false; 
    
        }
        else{ 
          
        if(pinsKnocked+lastPins==10 && !firtsShoot) {
            isSpare=true;
    
        }
    }
        onlyRolls.push(pinsKnocked);
        rolls.push(score);
    }

    this.getScore = function () {
        if (!rolls.length) {
            return 0;
        }
        let score = rolls.reduce((parcial, a) => parcial + a);
        return score;
    }
}

module.exports = Game;
