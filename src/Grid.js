(function(exports){

  function Grid() {
    this._grid = ['', '', '', '', '', '', '', '', ''];
  }

  Grid.prototype = {
    view_grid: function(){
      return this._grid;
    },
    add_to_grid: function(symbol, position){
      if (this.view_grid()[position] != '') {
        alert('That space has been taken. Please choose again!')
      } else {
        this.view_grid()[position] = symbol;
      }
    }
  };


  exports.Grid = Grid;

})(this);
