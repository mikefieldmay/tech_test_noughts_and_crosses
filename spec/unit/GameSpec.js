describe('Game', function(){

  var player1Spy;
  var player2Spy;
  var gridSpy;
  var game;

  beforeEach(function(){
      player1Spy = jasmine.createSpyObj('player1Spy', ['symbol']);
      player2Spy = jasmine.createSpyObj('player2Spy', ['symbol']);
      ruleBookSpy = jasmine.createSpyObj('ruleBookSpy', ['isWin', 'isDraw']);
      gridSpy = jasmine.createSpyObj('gridSpy', ['add_to_grid', 'viewGrid']);
      gridSpy.viewGrid.and.callFake(function() { return [''] });
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
    it("it is not in game over state", function(){
      expect(game.isGameOver()).toEqual(false);
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
    it("ends the game if the game has been won", function(){
      spyOn(window, 'alert');
      ruleBookSpy.isWin.and.callFake(function() { return true });
      game.finishTurn();
      var alert = "Player 1 Wins! Refresh the browser to play again!";
      expect(game.isGameOver()).toEqual(true);
      expect(window.alert).toHaveBeenCalledWith(alert);
    });
    it("ends the game if the game is drawn", function(){
      spyOn(window, 'alert');
      ruleBookSpy.isDraw.and.callFake(function() { return true });
      game.finishTurn();
      var alert = "Game is a Draw! Refresh the browser to play again!";
      expect(game.isGameOver()).toEqual(true);
      expect(window.alert).toHaveBeenCalledWith(alert);
    });
  });

  describe('#take_turn', function(){
    it('checks the players symbol', function(){
      game.takeTurn(0);
      expect(player1Spy.symbol).toHaveBeenCalled();
    });
    it('adds a symbol to the grid', function(){
      game.takeTurn(0);
      expect(gridSpy.add_to_grid).toHaveBeenCalled();
    });
    it('raises an error if the grid position is taken', function(){
      spyOn(window, 'alert');
      gridSpy.viewGrid.and.callFake(function() { return ['X'] });
      game.takeTurn(0);
      var alert = 'That space has been taken. Please choose again!';
      expect(window.alert).toHaveBeenCalledWith(alert);
    });
    it('sets invalidMove to true if grid position is taken', function(){
      spyOn(window, 'alert');
      gridSpy.viewGrid.and.callFake(function() { return ['X'] });
      game.takeTurn(0);
      var alert = 'That space has been taken. Please choose again!';
      expect(game.invalidMove).toEqual(true)
    });
  });

});
