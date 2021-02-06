var ball;
var database,position;
var gameState=0;
var playerCount;
var form,player,game;
var allPlayers;
var car1,car2;
var cars;

function setup(){
    createCanvas(displayWidth-20,displayHeight-30);

    database=firebase.database();

    game=new Game();
    game.getState();
    game.start();

}

function draw(){
    background("white");

    if(playerCount===2){
        game.update(1);
    }
    if(gameState===1){
        clear();
        game.play();
    }

}

function showError(){
    console.log("error reading the database")
}