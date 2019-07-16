var config = {
    type: Phaser.AUTO,
    parent: 'phaserGame',
    width: 800,
    height: 600,
    physics:{
        default: 'arcade',
        arcade:{
            gravity:{ y: 200}
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload(){

};

function create(){

};

function update(){

};