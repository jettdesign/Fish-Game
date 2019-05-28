gameObj.game = function (game) {
    var txtScore;
    var timerObj;
    var timer; // Display Time
    var timerSeconds;
    var reddot;
    var sprite;
    var yellowdot;
    var whale1;
    var whale2;
    var goldfish1;
    var shark1;
    var upKey;
    var downKey;
    var leftKey;
    var rightKey;
    var redsound;
    var yellowsound;
    var losesound;
    var winsound;
    var soundsLoadedFlag;
    var emitter;
    var emitter2;

};

gameObj.game.prototype = {
    create: function () {
        console.log('State - Game');

        var spBackground = this.add.sprite(0, 0, 'game_background');

        reddot = this.add.sprite(1142, 180, 'reddot');
        whale1 = this.add.sprite(1000, 200, 'whale');
        whale2 = this.add.sprite(1000, 500, 'whale');
        goldfish1 = this.add.sprite(999, 100, 'goldfish');
        shark1 = this.add.sprite(-100, 350, 'shark');
        yellowdot = this.add.sprite(1142, 180, 'yellowdot');



        whale1.animations.add('swim');
        whale1.animations.play('swim', 3, true);

        whale2.animations.add('swim');
        whale2.animations.play('swim', 3, true);


        goldfish1.animations.add('swim');
        goldfish1.animations.play('swim', 3, true);


        shark1.animations.add('swim');
        shark1.animations.play('swim', 3, true);


        this.add.tween(whale1).to({
            x: -900
        }, 14000, Phaser.Easing.Quadratic.InOut, true, 352, 200, false);


        this.add.tween(whale2).to({
            x: -500
        }, 14000, Phaser.Easing.Quadratic.InOut, true, 100, 50, false);


        this.add.tween(goldfish1).to({
            x: -1100
        }, 14000, Phaser.Easing.Quadratic.InOut, true, 132, 100, false);



        this.add.tween(shark1).to({
            x: 1000
        }, 10000, Phaser.Easing.Quadratic.InOut, true, 352, 400, false);




        sprite = this.add.sprite(this.world.centerX, this.world.centerY, 'fishone');

        this.physics.enable(sprite, Phaser.Physics.ARCADE);
        this.physics.enable(reddot, Phaser.Physics.ARCADE);
        this.physics.enable(yellowdot, Phaser.Physics.ARCADE);
        this.physics.enable(whale1, Phaser.Physics.ARCADE);
        this.physics.enable(whale2, Phaser.Physics.ARCADE);
        this.physics.enable(goldfish1, Phaser.Physics.ARCADE);
        this.physics.enable(shark1, Phaser.Physics.ARCADE);

        gameObj.gScore = 0;
        var scoreStr = "0"
        timer = "2:00"
        txtScore = this.add.text(25, 15, scoreStr);
        timer = this.add.text(850, 15, timer);
        txtScore.fill = 'white';
        txtScore.fontSize = 48;
        txtScore.font = 'Lobster';
        timer.fill = 'white';
        timer.fontSize = 48;
        timer.font = 'Lobster';

        timerSeconds = 120;

        //Create timer Object
        timerObj = this.game.time.create(false);


        //Set Timer event to occur every 1 second
        timerObj.loop(1000, this.updateTimerFun, this);

        //Start said timer
        timerObj.start();


        upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
        downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

        sprite.body.bounce.y = 0.3;
        sprite.body.gravity.y = 10;
        sprite.body.collideWorldBounds = true;



        redsound = this.add.audio('pong');
        soundsLoadedFlag = false;
        this.sound.setDecodedCallback([redsound], this.soundsLoadedFun, this);

        yellowsound = this.add.audio('yellow');
        soundsLoadedFlag2 = false;
        this.sound.setDecodedCallback([yellowsound], this.soundsLoadedFun2, this);


        losesound = this.add.audio('losesound');
        soundsLoadedFlag3 = false;
        this.sound.setDecodedCallback([losesound], this.soundsLoadedFun3, this);


        winsound = this.add.audio('winsound');
        soundsLoadedFlag4 = false;
        this.sound.setDecodedCallback([winsound],
            this.soundsLoadedFun4, this);




        emitter = this.add.emitter(this.world.centerX + 200, this.world.centerY, +300);

        emitter.makeParticles('yellowdot', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30], 15, true, true);

        emitter.minParticleSpeed.setTo(-200, -300);
        emitter.maxParticleSpeed.setTo(200, -400);
        emitter.minParticleScale = 0.5;
        emitter.maxParticleScale = 2;
        emitter.gravity = 150;
        emitter.bounce.setTo(0.5, 0.5);
        emitter.angularDrag = 30;

        emitter.start(false, 6000, 100);

        emitter2 = this.add.emitter(this.world.centerX + 50, this.world.centerY + 300);

        emitter2.makeParticles('reddot', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20], 50, true, true);

        emitter2.minParticleSpeed.setTo(-200, -300);
        emitter2.maxParticleSpeed.setTo(200, -400);
        emitter2.minParticleScale = 0.5;
        emitter2.maxParticleScale = 2;
        emitter2.gravity = 150;
        emitter2.bounce.setTo(0.5, 0.5);
        emitter2.angularDrag = 30;
        emitter2.start(false, 6000, 100);
    },



    updateTimerFun: function () {
        console.log('update timer called');
        timerSeconds--;

        if (timerSeconds >= 0) {
            var displayMin = Math.floor(timerSeconds / 60) % 60;
            var displaySec = Math.floor(timerSeconds) % 60;
            if (displaySec < 10) {
                displaySec = '0' + displaySec;
            }
            timer.text = timerSeconds;

            gameObj.gTime = displayMin + ":" + displaySec;
            timer.text = gameObj.gTime;

        } else {
            if (gameObj.gScore > 50) {
                this.state.start('win');
            } else {
                this.state.start('lose');
            }
        }

        if (gameObj.gScore > 150) {
            {
                this.state.start('win');
            }
        }


    },

    soundsLoadedFun: function () {
        soundsLoadedFlag = true;
    },

    soundsLoadedFun2: function () {
        soundsLoadedFlag2 = true;
    },

    soundsLoadedFun3: function () {
        soundsLoadedFlag3 = true;
    },

    soundsLoadedFun4: function () {
        soundsLoadedFlag4 = true;
    },

    soundsLoadedFun5: function () {
        soundsLoadedFlag5 = true;
    },

    soundsLoadedFun6: function () {
        soundsLoadedFlag6 = true;
    },


    update: function () {
        sprite.body.velocity.x = 0;

        if (upKey.isDown) {
            sprite.body.velocity.y = -200;
        } else if (downKey.isDown) {
            sprite.body.velocity.y = 200;
        }

        if (leftKey.isDown) {
            sprite.body.velocity.x = -250;
        } else if (rightKey.isDown) {
            sprite.body.velocity.x = 250;
        }


        this.physics.arcade.overlap(sprite, emitter2, collisionHandler, null, this);
        this.physics.arcade.overlap(sprite, whale1, collisionHandler2, null, this);
        this.physics.arcade.overlap(sprite, whale2, collisionHandler2, null, this);
        this.physics.arcade.overlap(sprite, goldfish1, collisionHandler2, null, this);
        this.physics.arcade.overlap(sprite, shark1, collisionHandler2, null, this);
        this.physics.arcade.overlap(sprite, emitter, collisionHandler3, null, this);
        this.physics.arcade.collide(emitter);
        this.physics.arcade.collide(emitter2);

        function collisionHandler(sprite, reddot) {
            reddot.destroy();
            console.log("collision");
            gameObj.gScore += 5;       
            txtScore.text = gameObj.gScore;

            if (soundsLoadedFlag == true) {
                redsound.play();
            } else {
                console.log('still downloading/decoding around');
            }

        }

        function collisionHandler2(sprite, whale1) {
            console.log("collision222");
            this.state.start('lose');

        }

        function collisionHandler3(sprite, yellowdot, yellowdot2, yellowdot3, yellowdot4) {
            yellowdot.destroy();
            console.log("collision");
            gameObj.gScore -= 7;       
            txtScore.text = gameObj.gScore;

            if (soundsLoadedFlag2 == true) {
                yellowsound.play();
            } else {
                console.log('still downloading/decoding around');
            }
        }

    },

    render: function () {

        for (var i = 15; i < emitter.total; i++) {
            if (emitter.children[i].visible) {

            }
        }

        for (var i = 15; i < emitter2.total; i++) {
            if (emitter2.children[i].visible) {

            }
        }
    }
}