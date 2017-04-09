describe('Rules', function(){

  var rules;
  var grid = { viewGrid: function(){
    return ['', '', '', '', '', '', '', '', '']}
  };
  var winGrid = { viewGrid: function(){
    return ['X', 'X', 'X', '', '', '', '', '', '']}
  };

  console.log(grid)

  describe("#isWin", function(){
    it('is is false when the game starts', function(){
      rulebook = new RuleBook(grid);
      expect(rulebook.isWin()).toEqual(false);
    });
    it('is is true when a win condition is met', function(){
      rulebook = new RuleBook(winGrid);
      expect(rulebook.isWin()).toEqual(true);
    });
  });

});
