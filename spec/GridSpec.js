describe('Grid', function(){

  var grid;
  var row;
  var row_with_symbol;

  beforeEach(function(){
    grid = new Grid();
    row = ['', '', ''];
    row_with_symbol = ['','','X'];
  });

  describe('default', function(){
    it('has a top row', function(){
      expect(grid.top_row()).toEqual(row);
    });
    it('has a middle row', function(){
      expect(grid.middle_row()).toEqual(row);
    });
    it('has a bottom row', function(){
      expect(grid.bottom_row()).toEqual(row);
    });
  });

  describe('add to top row', function(){
    it('adds a symbol to the top row', function(){
      grid.add_to_top_row('X', 2);
      expect(grid.top_row()).toEqual(row_with_symbol);
    });
    it('adds a symbol to the bottom row', function(){
      grid.add_to_bottom_row('X', 2);
      expect(grid.bottom_row()).toEqual(row_with_symbol);
    });
    it('adds a symbol to the top row', function(){
      grid.add_to_middle_row('X', 2);
      expect(grid.middle_row()).toEqual(row_with_symbol);
    });
    it('raises an alert if the space is taken', function(){
      spyOn(window, 'alert');
      grid.add_to_middle_row('X', 2);
      grid.add_to_middle_row('X', 2);
      var alert = 'That space has been taken. Please choose again!';
      expect(window.alert).toHaveBeenCalledWith(alert);
    });
  });
});
