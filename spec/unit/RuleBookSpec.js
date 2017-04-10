describe('Rules', function(){

  var rules;
  var grid =   ['', '', '',
                '', '', '',
                '', '', '']
  var winGrid = ['X', 'X', 'X',
                  '', '', '',
                  '', '', '']
  var drawGrid = ['X', 'O', 'X',
                  'O', 'X', 'O',
                  'O', 'X', 'O']

  describe("#isWin", function(){
    it('is is false when the game starts', function(){
      rulebook = new RuleBook();
      expect(rulebook.isWin(grid)).toEqual(false);
    });
    it('is is true when a win condition is met', function(){
      rulebook = new RuleBook();
      expect(rulebook.isWin(winGrid)).toEqual(true);
    });
  });
  describe("#isDraw", function(){
    it('is is false when the game starts', function(){
      rulebook = new RuleBook();
      expect(rulebook.isDraw(grid)).toEqual(false);
    });
    it('is is true when a win condition is met', function(){
      rulebook = new RuleBook();
      expect(rulebook.isDraw(drawGrid)).toEqual(true);
    });
  });


});
