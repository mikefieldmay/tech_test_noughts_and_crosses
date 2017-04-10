describe('Grid', function(){

  var grid;
  var row;
  var row_with_symbol;

  beforeEach(function(){
    grid = new Grid();
    empty_grid =   [ '', '', '',
                      '', '', '',
                      '', '', ''];
    row_with_symbol = [ '', '', 'X',
                      '', '', '',
                      '', '', ''];
  });

  describe('default', function(){
    it('has an empty grid', function(){
      expect(grid.viewGrid()).toEqual(empty_grid);
    });
  });

  describe('add to grid', function(){
    it('adds a symbol to the top row', function(){
      grid.add_to_grid('X', 2);
      expect(grid.viewGrid()).toEqual(row_with_symbol);
    });
  });
});
