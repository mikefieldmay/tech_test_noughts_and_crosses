(function(exports){

  function Grid() {
    this._grid = ['', '', '', '', '', '', '', '', ''];
  }

  Grid.prototype = {
    viewGrid: function(){
      return this._grid;
    },
    add_to_grid: function(symbol, position){
        this.viewGrid()[position] = symbol;
      }    
  };


  exports.Grid = Grid;

})(this);
