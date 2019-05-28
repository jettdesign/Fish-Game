gameObj.help = function (game) {};

gameObj.help.prototype = {
  create: function () {
    console.log('State - Help');

  },
  create: function () {
    var spBackground = this.add.sprite(0, 0, 'help_background');
      btBack = this.add.button(this.world.centerX -450, this.world.centerY -350, 'backbutton', this.actionOnClick, this, 1, 0, 2);
      
      btPlay = this.add.button(this.world.centerX +200, this.world.centerY +250, 'letsplay', this.playOnClick, this, 1, 0, 2);
      
  },
    
    actionOnClick: function () {
    console.log ('actionOnClick called');
    this.state.start('intro');

},
    
    playOnClick: function () {
    console.log ('actionOnClick called');
    this.state.start('game');

}
};
