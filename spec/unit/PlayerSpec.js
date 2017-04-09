describe('Player', function(){

  var player;

  describe("default", function(){
    it('is instantiated with a symbol', function(){
      player = new Player('X');
      expect(player.symbol()).toEqual('X');
    });
  });

});
