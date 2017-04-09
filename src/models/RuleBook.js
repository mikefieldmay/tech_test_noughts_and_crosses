(function(exports){

  function RuleBook(grid) {
    this._grid = grid.viewGrid();
    this._winX = ['X', 'X', 'X'];
    this._winO = ['O', 'O', 'O'];
    this._win = false
  }

  RuleBook.prototype = {
    checkForWinner: function(){
      var winningCombinations = [
        [this._grid[0], this._grid[1], this._grid[2]],
        [this._grid[3], this._grid[4], this._grid[5]],
        [this._grid[6], this._grid[7], this._grid[8]],
        [this._grid[0], this._grid[3], this._grid[6]],
        [this._grid[1], this._grid[4], this._grid[7]],
        [this._grid[2], this._grid[5], this._grid[8]],
        [this._grid[0], this._grid[4], this._grid[8]],
        [this._grid[6], this._grid[4], this._grid[2]]
      ];
      for(var i = 0; i < winningCombinations.length; i++) {
        if ( winningCombinations[i].join() == this._winX.join() || winningCombinations[i].join() == this._winO.join() ) {
          this._win = true
        }
      }
    },
    isWin: function(){
      this.checkForWinner()
      return this._win
    }
  };


  exports.RuleBook = RuleBook;

})(this);
