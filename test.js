
var chai = require('chai');
describe("Bowling", function () {
 let game = null;

  it("gutter game", function () {
      chai.expect(game.getScore()).toBe(0);
  });
    
});
