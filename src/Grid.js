(function(exports){

  function Grid() {
    this._top_row = ['', '', ''];
    this._middle_row = ['', '', ''];
    this._bottom_row = ['', '', ''];
  }

  Grid.prototype = {
    top_row: function(){
      return this._top_row;
    },
    middle_row: function(){
      return this._middle_row;
    },
    bottom_row: function(){
      return this._bottom_row;
    },
    add_to_top_row: function(symbol, position){
      if (this.top_row()[position] != '') {
        alert('That space has been taken. Please choose again!')
      } else {
        this.top_row()[position] = symbol;
      }
    },
    add_to_middle_row: function(symbol, position){
      if (this.middle_row()[position] != '') {
        alert('That space has been taken. Please choose again!')
    } else {
        this.middle_row()[position] = symbol;
    }
    },
    add_to_bottom_row: function(symbol, position){
      if (this.bottom_row()[position] != '') {
        alert('That space has been taken. Please choose again!')
    } else {
      this.bottom_row()[position] = symbol;
    }
  }
  };


  exports.Grid = Grid;

})(this);
