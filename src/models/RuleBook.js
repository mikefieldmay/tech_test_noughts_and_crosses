(function(exports){

  function RuleBook() {
    this._winX = ['X', 'X', 'X'];
    this._winO = ['O', 'O', 'O'];
    this._win = false;
    this._draw = false;
  }

  RuleBook.prototype = {
    checkForWinner: function(grid){
      var grid = grid;
      var winningCombinations = [
        [grid[0], grid[1], grid[2]],
        [grid[3], grid[4], grid[5]],
        [grid[6], grid[7], grid[8]],
        [grid[0], grid[3], grid[6]],
        [grid[1], grid[4], grid[7]],
        [grid[2], grid[5], grid[8]],
        [grid[0], grid[4], grid[8]],
        [grid[6], grid[4], grid[2]]
      ];
      for(var i = 0; i < winningCombinations.length; i++) {
        if ( winningCombinations[i].join() == this._winX.join() || winningCombinations[i].join() == this._winO.join() ) {
          this._win = true;
        }
      }
    },
    isWin: function(grid){
      this.checkForWinner(grid);
      return this._win;
    },
    checkForDraw: function(grid){
      console.log(grid);
      var currentGrid = grid
      if (!currentGrid.includes('') && this._win === false ){
        this._draw = true
      } else {
        this._draw = false
      }
    },
    isDraw: function(grid){
      var currentGrid = grid
      this.checkForDraw(currentGrid)
      return this._draw
    }
  };


  exports.RuleBook = RuleBook;

})(this);
