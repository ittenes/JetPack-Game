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

    let game = new Game(ctx, electrical, gameOverFunc);

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

    let game = new Game(ctx, electrical, gameOverFunc);

    game.startGame();
    music.play();
  });

  function gameOverFunc(mints, seconds, coins, score) {
    console.log("gameOver")
    document.getElementById("game").style.display = "none";
    document.getElementById("gameover").style.display = "block";
    document.getElementById("text-gameover-time").innerHTML = `TIME ${
      mints
    } : ${seconds}`;
    document.getElementById("text-gameover-coins").innerHTML = `COINS ${
      coins
    }`;
    document.getElementById("text-gameover-total").innerHTML = `TOTALSCORE ${
    score
    }`;

    this.music = document.getElementById("music");

    if (document.getElementById("gameover").style.display === "block") {
      console.log('muuuuuuusica')
      this.music.pause()
    }
  }
};