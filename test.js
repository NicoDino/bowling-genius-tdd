let should = require('chai').should();

describe("Bowling", function () {
  let Game = function () {

    this.getScore = function () {
      return 0
    }
  }
  let game = new Game();
  it("gutter game", function () {
    game.getScore().should.equal(0);
  });

});