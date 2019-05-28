gameObj.win = function (game) {};
gameObj.win.prototype = {
    create: function () {
        console.log('State - Win');
        var spBackground = this.add.sprite(0, 0, 'levelup_bg');

        winsound.play();
     
        btContinue = this.add.button(this.world.centerX + 50, this.world.centerY + 30, 'continueButton', this.continueOnClick, this, 1, 0, 2);

        btHome = this.add.button(this.world.centerX - 190, this.world.centerY + 30, 'homeButton', this.homeOnClick, this, 1, 0, 2);

        var finalscore = gameObj.gScore;
        var loss = "You won!!!";
        var timer = gameObj.gTime;

        var txtScore = this.add.text(450, 290, finalscore);
        var txtLoss = this.add.text(280, 130, loss);
        var timer = this.add.text(450, 500, timer);

        txtScore.fill = '#FF6969';
        txtScore.fontSize = 58;
        txtScore.font = 'Lobster';
        txtLoss.fill = '#FF6969';
        txtLoss.fontSize = 120;
        txtLoss.font = 'Lobster';
        timer.fill = '#FF6969';
        timer.fontSize = 58;
        timer.font = 'Lobster';

    },


    continueOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('game');

    },

    homeOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('intro');

    }
    
};