(function(exports){

  function Game(player1, player2, grid) {
    this._player1 = player1;
    this._player2 = player2;
    this._grid = grid;
    this.player1_turn = true;
  }

  Game.prototype = {
    takeTurn: function(num){
      var symbol = this.symbolCheck()
      this._grid.add_to_grid(symbol, num)
    },
    symbolCheck: function(){
        if (this.player1_turn) {
          return this._player1.symbol()
        } else {
           return this._player2.symbol();
         }
       }
    };

  exports.Game = Game;

})(this);
