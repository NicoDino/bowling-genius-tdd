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
         //  console.log("entro a sumar bonus de strike a pinsKnocked "+pinsKnocked);
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
         //  console.log("Entro a es strike con pinos =  "+pinsKnocked);
        }
        else{ 
      //     console.log("antes del if de spare. Pinsknocked : "+pinsKnocked+" lastPins = "+lastPins +" !firtsShott "+!firtsShoot);
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
