(function(exports){

  function Game(player1, player2, grid, ruleBook) {
    this._player1 = player1;
    this._player2 = player2;
    this._grid = grid;
    this._ruleBook = ruleBook;
    this._player1Turn = true;
    this._gameOver = false
  }

  Game.prototype = {
    takeTurn: function(num){
      var symbol = this.symbolCheck();
      this._grid.add_to_grid(symbol, num);
      this.finishTurn();
    },
    symbolCheck: function(){
        if (this._player1Turn) {
          return this._player1.symbol();
        } else {
           return this._player2.symbol();
         }
       },
       finishTurn: function(){
        var currentGrid = this._grid.viewGrid();
        if(this._ruleBook.isWin(currentGrid) && this._player1Turn) {
          this._gameOver = true;
          alert("Player 1 Wins! Refresh the browser to play again!");
        } else if (this._ruleBook.isWin(currentGrid) && !this._player1Turn) {
          this._gameOver = true;
          alert("Player 2 Wins! Refresh the browser to play again!");
        } else if(this._ruleBook.isDraw(currentGrid)){
          this._gameOver = true
          alert("Game is a Draw! Refresh the browser to play again!");
        } else {
            this._player1Turn ? this._player1Turn = false : this._player1Turn = true;
        }
      },
      isGameOver: function() {
        return this._gameOver
      }
    };

  exports.Game = Game;

})(this);
