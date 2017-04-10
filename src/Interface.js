$(document).ready(function() {

  var player1 = new Player('X');
  var player2 = new Player('O');
  var rulebook = new RuleBook();
  var grid = new Grid();
  var game = new Game(player1, player2, grid, rulebook);


  $('td').on('click', function(){
    var space = $(this).attr('id');
    choosingASpace(parseInt(space));
  });

  function choosingASpace(space){
    if(!game.isGameOver()){
      game.takeTurn(space);
      $(`#${space}`).html(`${grid.viewGrid()[space]}`);
      if(!game._falseMove) game.finishTurn()
    }
  }
});
