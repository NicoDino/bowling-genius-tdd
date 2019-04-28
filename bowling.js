let Game = function () {
    let rolls = [];
    var firtsShoot = false;
    var isSpare = false;
    var isStrike = false;
    var score;
    var lastPins;

    this.roll = function (pinsKnocked) {
        firtsShoot=!firtsShoot;
        lastPins=0;
        score=pinsKnocked;
        if(!firtsShoot){
            lastPins=rolls[rolls.length-1];
        }
        
        if(isStrike){
            score = addStrikeBonus();
        }
        if(isSpare){
            score = score+pinsKnocked;
            isSpare=false;
        }
        if(pinsKnocked==10 && firtsShoot){
            isStrike=true;
        }
        if(pinsKnocked+lastPins==10 && !firtsShoot) {
            isSpare=true;
        }


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
