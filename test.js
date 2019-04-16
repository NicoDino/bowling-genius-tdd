let should = require('chai').should();
let Game = require('./bowling');

describe("Bowling", function () {

  let game = new Game();

  var rollMany = function(game, n, pins) {
    for(i = 0; i < n; i++) {
        game.roll(pins);
    };
  };

  it("gutter game sin tiros", function () {
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