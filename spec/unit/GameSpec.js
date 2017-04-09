describe('Game', function(){

  var player1Spy;
  var player2Spy;
  var gridSpy;
  var game;

  beforeEach(function(){
      player1Spy = jasmine.createSpyObj('player1Spy', ['symbol']);
      player2Spy = jasmine.createSpyObj('player2Spy', ['symbol']);
      ruleBookSpy = jasmine.createSpyObj('ruleBookSpy', ['isWin']);
      gridSpy = jasmine.createSpyObj('gridSpy', ['add_to_grid']);
      game = new Game(player1Spy, player2Spy, gridSpy, ruleBookSpy);
    });

  describe("default", function(){
    it('is instantiated with 2 players', function(){
      expect(game._player1).toEqual(player1Spy);
      expect(game._player2).toEqual(player2Spy);
    });
    it('is instantiated with a grid', function(){
      expect(game._grid).toEqual(gridSpy);
    });
    it("it sets player1's turn to true", function(){
      expect(game._player1Turn).toEqual(true);
    });
    it("it is instantiated with a rulebook", function(){
      expect(game._ruleBook).toEqual(ruleBookSpy);
    });
  });

  describe("#finishTurn", function(){
    it("changes the players turn", function(){
      game.finishTurn();
      expect(game._player1Turn).toEqual(false);
    });
    it("checks if the game has been won", function(){
      game.finishTurn();
      expect(ruleBookSpy.isWin).toHaveBeenCalled();
    });
  });

  describe('#take_turn', function(){
    it('checks the players symbol', function(){
      game.takeTurn(1);
      expect(player1Spy.symbol).toHaveBeenCalled();
    });
    it('adds a symbol to the grid', function(){
      game.takeTurn(1);
      expect(gridSpy.add_to_grid).toHaveBeenCalled();
    });
  });

});
