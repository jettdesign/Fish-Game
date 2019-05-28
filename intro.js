gameObj.intro = function (game) {
    var fishonemove;
    var sharkmove;
    var whalemove;
    var goldfishmove;
    var title;
};

gameObj.intro.prototype = {
    create: function () {
        console.log('State - Intro');

        //Add background image
        var spBackground = this.add.sprite(0, 0, 'background');

        btPlay = this.add.button(this.world.centerX - 100, this.world.centerY - 12, 'playButton', this.actionOnClick, this, 1, 0, 2);

        btHelp = this.add.button(this.world.centerX - 40, this.world.centerY - 90, 'help', this.helpOnClick, this, 1, 0, 2);
        title = "Bon Appe-Fish"
        title = this.add.text(70, 50, title);
        title.fill = '#EE3615';
        title.fontSize = 152;
        title.font = 'Lobster';

        
        
        fishonemove = this.add.sprite(140, 200, 'fishonemove');
        fishonemove.animations.add('swim');
        fishonemove.animations.play('swim', 6, true);


        sharkmove = this.add.sprite(100, 300, 'shark');
        sharkmove.animations.add('swim');
        sharkmove.animations.play('swim', 4, true);


        whalemove = this.add.sprite(730, 300, 'whale');
        whalemove.animations.add('swim');
        whalemove.animations.play('swim', 4, true);


        goldfishmove = this.add.sprite(690, 200, 'goldfish');
        goldfishmove.animations.add('swim');
        goldfishmove.animations.play('swim', 4, true);
    },

    actionOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('game');

    },

    helpOnClick: function () {
        console.log('actionOnClick called');
        this.state.start('help');

    }

};