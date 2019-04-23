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






  it("one spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(game, 17, 0);

    expect(game.getScore()).toBe(16);
});

it("false spare", function() {
    // if the scores that total to 10 are not in the same frame, it is not a spare.
    game.roll(0);
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(game, 16, 0);

    expect(game.getScore()).toBe(13);
});

it("one strike", function() {
    // if the scores that total to 10 are not in the same frame, it is not a spare.
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(game, 16, 0);

    expect(game.getScore()).toBe(24);
});

it("gutter and ten means spare", function() {
    game.roll(0);
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(game, 16, 0);

    expect(game.getScore()).toBe(20);
});

it("strike followed by spare", function() {
    game.roll(10);
    game.roll(3);
    game.roll(7);
    game.roll(4);
    game.roll(4);
    rollMany(game, 14, 0);

    expect(game.getScore()).toBe(42);
});

it("strike followed by strike", function() {
    game.roll(10);
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(game, 14, 0);

    expect(game.getScore()).toBe(47);
});

it("spare followed by strike", function() {
    game.roll(3);
    game.roll(7);
    game.roll(10);
    game.roll(3);
    game.roll(4);
    rollMany(game, 14, 0);

    expect(game.getScore()).toBe(44);
});

it("last frame normal case", function() {
    rollMany(game, 18, 0);
    game.roll(3)
    game.roll(4);

    expect(game.getScore()).toBe(7);
});

it("last frame spare", function() {
    rollMany(game, 18, 0);
    game.roll(3);
    game.roll(7);
    game.roll(9);

    expect(game.getScore()).toBe(19);
});

xit("last frame strike", function() {
    rollMany(game, 18, 0);
    game.roll(10);
    game.roll(3);
    game.roll(4);

    expect(game.getScore()).toBe(17);
});

xit("last frame strike followed by spare", function() {
    rollMany(game, 18, 0);
    game.roll(10);
    game.roll(3);
    game.roll(7);

    expect(game.getScore()).toBe(20);
});

xit("perfect game", function() {
    rollMany(game, 12, 10);

    expect(game.getScore()).toBe(300);
});
});

