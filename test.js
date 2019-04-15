let should = require('chai').should();
let Game = require('./bowling');

describe("Bowling", function () {

  let game = new Game();
  it("gutter game", function () {
    game.getScore().should.equal(0);
  });

});