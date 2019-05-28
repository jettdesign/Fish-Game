gameObj.lose = function (game) {};

gameObj.lose.prototype = {
  create: function () {
    console.log('State - Lose');
var spBackground = this.add.sprite(0, 0, 'lose_background');
      
      losesound.play();
      
      btRetry = this.add.button(this.world.centerX + 50, this.world.centerY + 40, 'retryButton', this.retryOnClick, this, 1, 0, 2);
      
      btHome = this.add.button(this.world.centerX - 190, this.world.centerY + 40, 'homeButton', this.homeOnClick, this, 1, 0, 2);

                var finalscore = 'Your Score: ' + gameObj.gScore;
                var loss = "You got eaten!";
                var timer = 'Time: ' + gameObj.gTime;
                
                var txtScore = this.add.text(420, 30, finalscore);
                var txtLoss = this.add.text(345, 125, loss);
                var timer = this.add.text (450, 90, timer);
                
                txtScore.fill = 'black';
                txtScore.fontSize = 30;
                txtScore.font = 'Lobster';
                txtLoss.fill = 'black';
                txtLoss.fontSize = 58;
                txtLoss.font = 'Lobster';
                timer.fill = 'black';
                timer.fontSize = 30;
                timer.font = 'Lobster';
  },
    
   retryOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('game');

    },

    homeOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('intro');

    }
  
};
