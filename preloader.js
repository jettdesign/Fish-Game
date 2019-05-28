gameObj.preloader = function (game) {};

gameObj.preloader.prototype = {
    preload: function () {
        console.log("State - Preloader");
        this.state.backgroundColor = '#333';
        var sprite;


        //Progress bar animation code
        this.preloadBg = this.add.sprite((960 - 297) / 2, (720 - 145) / 2, 'preloaderBg');
        this.preloadBar = this.add.sprite((960 - 158) / 2, (720 - 50) / 2, 'preloaderBar');
        this.load.setPreloadSprite(this.preloadBar);

        // Load buttons
        this.load.spritesheet('help', 'img/questionbutton.png', 46, 46);
        this.load.spritesheet('sound', 'img/soundbutton.png', 46, 46);
        this.load.spritesheet('backbutton', 'img/backbutton.png', 180, 90);
        this.load.spritesheet('letsplay', 'img/letsplay.png', 246, 81);
        this.load.spritesheet('retryButton', 'img/retrybutton.png', 178, 90);
        this.load.spritesheet('homeButton', 'img/homebutton.png', 180, 90);
        this.load.spritesheet('continueButton', 'img/continuebutton.png', 180, 90);
        this.load.spritesheet('playButton', 'img/play_button.png', 180, 90);
        this.load.spritesheet('winButton', 'img/win.png', 180, 90);
        this.load.spritesheet('loseButton', 'img/lose.png', 180, 90);
        this.load.spritesheet('pointButton', 'img/points.png', 180, 90);
        this.load.spritesheet('whale', 'img/whale.png', 100, 100);
        this.load.spritesheet('goldfish', 'img/goldfish.png', 77, 100);
        this.load.spritesheet('goldfish2', 'img/goldfish2.png', 77, 100);
        this.load.spritesheet('shark', 'img/shark.png', 77, 100);
        this.load.spritesheet('fishonemove', 'img/fishonemove.png', 90, 90);
        //Load all game images intro memory
        this.load.image('game_background', "img/gamebg.png");
        this.load.image('reddot', "img/reddot.png");
        this.load.image('yellowdot', "img/yellow.png");
        this.load.image('background', 'img/background.png');
        this.load.image('help_background', "img/help.png");
        this.load.image('fishone', "img/fishone.png");
        this.load.image('levelup_bg', "img/levelup.png");
        this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');;
        this.load.image('lose_background', "img/loss.png");
        //  37x45 is the size of each frame
        //  There are 18 frames in the PNG - you can leave this value blank if the frames fill up the entire PNG, but in this case there are some
        //  blank frames at the end, so we tell the loader how many to load
        
        this.load.audio ('pong', 'snd/yellow.mp3');
        this.load.audio ('bgsound', 'snd/bg.mp3');
        this.load.audio ('losesound', 'snd/lose.mp3');
        this.load.audio ('swallowsound', 'snd/swallow.mp3');
        this.load.audio ('winsound', 'snd/win.mp3');
        this.load.audio ('yellow', 'snd/red.mp3');

    },

    create: function () {
        this.state.start('intro');

    }
};