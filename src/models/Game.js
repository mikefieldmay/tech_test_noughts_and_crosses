(function(exports){

  function Game(player1, player2, grid, ruleBook) {
    this._player1 = player1;
    this._player2 = player2;
    this._grid = grid;
    this._ruleBook = ruleBook;
    this._player1Turn = true;
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
        if(this._ruleBook.isWin() && this._player1Turn) {
          alert("Player 1 Wins! Refresh the browser to play again!");
        } else if (this._ruleBook.isWin() && !this._player1Turn) {
          alert("Player 2 Wins! Refresh the browser to play again!");
        } else if(this._ruleBook.isDraw()){
          alert("Game is a Draw! Refresh the browser to play again!");
        } else {
            this._player1Turn ? this._player1Turn = false : this._player1Turn = true;
        }
       }
    };

  exports.Game = Game;

})(this);
