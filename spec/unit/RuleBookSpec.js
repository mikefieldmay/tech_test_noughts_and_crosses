describe('Rules', function(){

  var rules;
  var grid = { viewGrid: function(){
    return ['', '', '',
            '', '', '',
            '', '', '']}
  };
  var winGrid = { viewGrid: function(){
    return ['X', 'X', 'X',
            '', '', '',
            '', '', '']}
  };
  var drawGrid = { viewGrid: function(){
    return ['X', 'O', 'X',
            'O', 'X', 'O',
            'O', 'X', 'O']}
  };

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
  describe("#isDraw", function(){
    it('is is false when the game starts', function(){
      rulebook = new RuleBook(grid);
      expect(rulebook.isDraw()).toEqual(false);
    });
    it('is is true when a win condition is met', function(){
      rulebook = new RuleBook(drawGrid);
      expect(rulebook.isDraw()).toEqual(true);
    });
  });


});
