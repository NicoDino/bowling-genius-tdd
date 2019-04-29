let Game = function () {
    let rolls = [];

    this.roll = function (pinsKnocked) {

        rolls.push(pinsKnocked);
    }

    this.getScore = function () {
        let totalScore = 0;
        let rollNumber = 0;

        // calcula la suma de cada "frame" (par de tiros)
        for (let frame = 0; frame < 10; frame++) {
            if (esStrike()) {
                totalScore += 10 + rolls[rollNumber + 1] + rolls[rollNumber + 2];
                rollNumber++; // Solo cuando es strike se realiza un solo tiro
            } else if (esSpare()) {
                totalScore += 10 + rolls[rollNumber + 2];
                rollNumber += 2;
            } else {
                totalScore += rolls[rollNumber] + rolls[rollNumber + 1];
                rollNumber += 2;
            }
        }
        return totalScore;

        function esSpare() {
            return rolls[rollNumber] + rolls[rollNumber + 1] === 10;
        }

        function esStrike() {
            return rolls[rollNumber] === 10;
        }
    }
}

module.exports = Game;


