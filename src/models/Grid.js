(function(exports){

  function Grid() {
    this._grid = ['', '', '', '', '', '', '', '', ''];
  }

  Grid.prototype = {
    viewGrid: function(){
      return this._grid;
    },
    add_to_grid: function(symbol, position){
      if (this.viewGrid()[position] != '') {
        alert('That space has been taken. Please choose again!')
      } else {
        this.viewGrid()[position] = symbol;
      }
    }
  };


  exports.Grid = Grid;

})(this);
