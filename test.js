let should = require('chai').should();
let Game = require('./bowling');

describe("Bowling", function () {

  let game = new Game();

  it("gutter game", function () {
    game.getScore().should.equal(0);
  });

  it("all ones", function () {
    for (i = 0; i < 20; i++) {
      game.shoot(1);
    }
    game.getScore().should.equal(20);
  });

});