function game() {
    
//board
let board;
let boardWidth = 750;
let boardHeight = 250;
let context;

//dino
let dinoWidth = 88;
let dinoHeight = 94;
let dinoX = 50;
let dinoY = boardHeight - dinoHeight;
let dinoImg;

let dino = {
    x : dinoX,
    y : dinoY,
    width : dinoWidth,
    height : dinoHeight
}

//cactus
let cactusArray = [];

let cactus1Width = 34;
let cactus2Width = 69;
let cactus3Width = 102;

let cactusHeight = 70;
let cactusX = 700;
let cactusY = boardHeight - cactusHeight;

let cactus1Img;
let cactus2Img;
let cactus3Img;

// clouds

let clouds = [];
let cloudImage;

// ground
let grounds = [];
let groundImage;

//physics
let velocityX = -8;
let velocityY = 0;
let gravity = .4;

let gameOver = false;
let score = 0;
let groundInterval;
let cactusInterval;
let cloudInterval;

window.onload = function() {
    board = document.getElementById("board");
    board.height = boardHeight;
    board.width = boardWidth;

    context = board.getContext("2d");

    dinoImg = new Image();
    dinoImg.src = "./icon/dino.png";
    dinoImg.onload = function() {
        context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
    }

    cloudImage = new Image();
    cloudImage.src = "./icon/cloud.png";

    groundImage = new Image();
    groundImage.src = "./icon/track.png";
    groundImage.onload = function() {
        context.drawImage(groundImage, 0, boardHeight - 7.5, boardWidth * 2, 15);
    }

    cactus1Img = new Image();
    cactus1Img.src = "./icon/cactus1.png";

    cactus2Img = new Image();
    cactus2Img.src = "./icon/cactus2.png";

    cactus3Img = new Image();
    cactus3Img.src = "./icon/cactus3.png";

    document.querySelector(".game__start").addEventListener("click", () => {
        gameOver = false;
        score = 0;
        cactusArray.length = 0;
        dinoImg.src = "./icon/dino.png";
        dinoImg.onload = function() {
            context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
        }

        clearInterval(groundInterval);
        clearInterval(cactusInterval);
        clearInterval(cloudInterval);

        update();
        groundInterval = setInterval(placeGrounds, 1000);
        cactusInterval = setInterval(placeCactus, 1000);
        cloudInterval = setInterval(placeClouds, 500);

        document.addEventListener("click", moveDino);
    })
}

function update() {

    if (gameOver) {
        return;
    }
    context.clearRect(0, 0, board.width, board.height);

    //dino
    velocityY += gravity;
    dino.y = Math.min(dino.y + velocityY, dinoY);
    context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);

    //cactus
    for (let i = 0; i < cactusArray.length; i++) {
        let cactus = cactusArray[i];
        cactus.x += velocityX;
        context.drawImage(cactus.img, cactus.x, cactus.y, cactus.width, cactus.height);

        if (detectCollision(dino, cactus)) {
            gameOver = true;
            dinoImg.src = "./icon/dino-dead.png";
            dinoImg.onload = function() {
                context.drawImage(dinoImg, dino.x, dino.y, dino.width, dino.height);
            }
        }
    }
    // clouds
    for (let i = 0; i < clouds.length; i++) {
        let cloud = clouds[i];
        cloud.x += velocityX;
        context.drawImage(cloud.img, cloud.x, cloud.y, cloud.width, cloud.height);
    }
    // ground
    for (let i = 0; i < grounds.length; i++) {
        let ground = grounds[i];
        ground.x += velocityX;
        context.drawImage(groundImage, ground.x, boardHeight - 7.5, boardWidth * 2, 15);
    }

    //score
    context.fillStyle="white";
    context.font="30px courier";
    score++;
    context.fillText(score, 5, 20);

    window.requestAnimationFrame(update); 
}

function moveDino(e) {
    if (gameOver) {
        return;
    }

    velocityY = -10;
}

function placeCactus() {
    if (gameOver) {
        return;
    }

    //place cactus
    let cactus = {
        img : null,
        x : cactusX,
        y : cactusY,
        width : null,
        height: cactusHeight
    }

    let placeCactusChance = Math.random();

    if (placeCactusChance > .90) {
        cactus.img = cactus3Img;
        cactus.width = cactus3Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .70) {
        cactus.img = cactus2Img;
        cactus.width = cactus2Width;
        cactusArray.push(cactus);
    }
    else if (placeCactusChance > .50) {
        cactus.img = cactus1Img;
        cactus.width = cactus1Width;
        cactusArray.push(cactus);
    }

    if (cactusArray.length > 5) {
        cactusArray.shift();
    }
}
function placeClouds() {
    let cloud = {
        img : cloudImage,
        x : boardWidth,
        y : 0,
        width : null,
        height: null
    }

    let placeCloudsChance = Math.random();

    if (placeCloudsChance > .90) {
        cloud.height = 150;
        cloud.width = 200;
        clouds.push(cloud);
    }
    else if (placeCloudsChance > .70) {
        cloud.height = 130;
        cloud.width = 150;
        clouds.push(cloud);
    }
    else if (placeCloudsChance > .50) {
        cloud.height = 100;
        cloud.width = 100;
        cloud.y = 10;
        clouds.push(cloud);
    }
    else if (placeCloudsChance > .30) {
        cloud.height = 100;
        cloud.width = 100;
        cloud.y = 30;
        clouds.push(cloud);
    }
    else if (placeCloudsChance > 0) {
        cloud.height = 100;
        cloud.width = 100;
        cloud.y = 50;
        clouds.push(cloud);
    }

    if (clouds.length > 5) {
        clouds.shift();
    }
}
function placeGrounds() {
    if (gameOver) {
        return;
    }

    //place cactus
    let ground = {
        img: groundImage,
        x : 0,
    }

    grounds.push(ground);

    if (grounds.length > 5) {
        grounds.shift();
    }
}

function detectCollision(a, b) {
    return a.x < b.x + b.width &&
           a.x + a.width > b.x &&
           a.y < b.y + b.height &&
           a.y + a.height > b.y;
}
}

export default game;