let Game = function () {
    let shots = [];

    this.shoot = function (pinsKnocked) {
        shots.push(pinsKnocked);
    }

    this.getScore = function () {
        if (!shots.length) {
            return 0;
        }
        let score = shots.reduce((parcial, a) => parcial + a);
        return score;
    }
}

module.exports = Game;
