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
                totalScore += sumaBonusStrike();
                rollNumber++; // Solo cuando es strike se realiza un solo tiro
            } else if (esSpare()) {
                totalScore += sumaBonusSpare();
                rollNumber += 2;
            } else {
                totalScore += sumaRolls();
                rollNumber += 2;
            }
        }
        return totalScore;

        function sumaRolls() {
            return rolls[rollNumber] + rolls[rollNumber + 1];
        }

        function esSpare() {
            return rolls[rollNumber] + rolls[rollNumber + 1] === 10;
        }

        function sumaBonusSpare() {
            return 10 + rolls[rollNumber + 2];
        }

        function esStrike() {
            return rolls[rollNumber] === 10;
        }

        function sumaBonusStrike() {
            return 10 + rolls[rollNumber + 1] + rolls[rollNumber + 2]
        }
    }
}

module.exports = Game;


