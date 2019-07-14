window.onload = function () {
  let gameVisible = document.getElementById("game");
  let splashVisible = document.getElementById("splash");
  let btnStart = document.getElementById("start");
  let gameOver = document.getElementById("gameover")
  let btnStartOver = document.getElementById("start-game-over");
  let music = document.getElementById("music");

  document.getElementById('gameover').style.display = "none";

  if (gameOver.style.display === "block") {
    music.stop()
  }

  btnStart.addEventListener("click", function () {
    gameVisible.style.display = "block";
    splashVisible.style.display = "none";
    gameOver.style.display = "none"
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    var widthCanvasGlobal = (canvas.width = 1224);
    var heigthCanvasGlobal = (canvas.height = 650);

    let game = new Game(ctx, electrical);

    game.startGame();
    music.play();
  });

  btnStartOver.addEventListener("click", function () {
    gameVisible.style.display = "block";
    splashVisible.style.display = "none";
    gameOver.style.display = "none"
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");

    var widthCanvasGlobal = (canvas.width = 1224);
    var heigthCanvasGlobal = (canvas.height = 650);

    let game = new Game(ctx, electrical);

    game.startGame();
    music.play();
  });
};