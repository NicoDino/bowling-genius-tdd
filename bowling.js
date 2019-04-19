let Game = function () {
    let rolls = [];

    this.roll = function (pinsKnocked) {
        rolls.push(pinsKnocked);
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
