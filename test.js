let should = require('chai').should();
let Game = require('./bowling');

describe("Bowling", function () {

  let game = new Game();

  let rollMany = function (shots, pinsKnocked) {
    for (i = 0; i < shots; i++) {
      game.roll(pinsKnocked);
    }
  };

  it("gutter game", function () {
    game.getScore().should.equal(0);
  });

  it("gutter game con tiros", function() {
    rollMany(game, 20, 0);
    game.getScore().should.equal(0);
});

it("Todos unos", function() {
  rollMany(game, 20, 1);
  game.getScore().should.equal(20);
});






});