window.onload = function() {
  let gameVisible = document.getElementById("game");
  let splashVisible = document.getElementById("splash");
  let btnStart = document.getElementById("start");
  let gameOver = document.getElementById("gameover");
  let btnStartOver = document.getElementById("start-game-over");
  let music = document.getElementById("music");
  let btnOkWinner = document.getElementById("name-ok");
  let btnListWinner = document.getElementById("list-winner");
  let btnCloseListWinner = document.getElementById("list-winner-close");
  let listWinGame = document.getElementById("list-winner-score");

  let scoreData = [];

  document.getElementById("gameover").style.display = "none"; //none
  document.getElementById("buttons-winer-and-start").style.display = "none";
  document.getElementById("winner").style.display = "none";
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let game = new Game(ctx, electrical, gameOverFunc);

  btnStart.addEventListener("click", function() {
    gameVisible.style.display = "block";
    splashVisible.style.display = "none";
    gameOver.style.display = "none";
    var widthCanvasGlobal = (canvas.width = 1224);
    var heigthCanvasGlobal = (canvas.height = 650);
    game.startGame();
    music.play();
  });

  btnStartOver.addEventListener("click", function() {
    gameVisible.style.display = "block";
    splashVisible.style.display = "none";
    gameOver.style.display = "none"; //none
    // let canvas = document.getElementById("canvas");
    // let ctx = canvas.getContext("2d");

    var widthCanvasGlobal = (canvas.width = 1224);
    var heigthCanvasGlobal = (canvas.height = 650);

    //let game = new Game(ctx, electrical, gameOverFunc);

    game.startGame();
    music.play();
  });

  function gameOverFunc(mints, seconds, coins, score) {
    document.getElementById("game").style.display = "none";
    document.getElementById("gameover").style.display = "block";
    document.getElementById(
      "text-gameover-time"
    ).innerHTML = `TIME ${mints} : ${seconds}`;
    document.getElementById("text-gameover-coins").innerHTML = `COINS ${coins}`;
    document.getElementById(
      "text-gameover-total"
    ).innerHTML = `TOTALSCORE ${score}`;

    this.music = document.getElementById("music");
    this.music.pause();

    if (scoreData.length < 10 || scoreData[9].value < score) {
      document.getElementById("formWinner").style.display = "block";
      document.getElementById("buttons-winer-and-start").style.display = "none";
    } else {
      document.getElementById("formWinner").style.display = "none";
      document.getElementById("buttons-winer-and-start").style.display =
        "block";
    }

    btnOkWinner.addEventListener("click", function() {
      let nameUser = document.getElementById("name-input").value;
      document.getElementById("formWinner").style.display = "none";
      document.getElementById("buttons-winer-and-start").style.display =
        "block";

      setDataCookie(score, nameUser);
      getDataCookies();
      score = null;
    });

    btnListWinner.addEventListener("click", function() {
      listWinGame.innerHTML = "";
      scoreData.forEach(e => {
        let node = document.createElement("div");
        let text = document.createTextNode(`${e.name}: ${e.value}`);
        node.appendChild(text);
        listWinGame.appendChild(node);
        document.getElementById("gameover").style.display = "none";
        document.getElementById("winner").style.display = "block";
      });
    });
    btnCloseListWinner.addEventListener("click", function() {
      document.getElementById("gameover").style.display = "block";
      document.getElementById("winner").style.display = "none";
    });
  }

  function setDataCookie(valueScore, nameUser) {
    if (valueScore !== null) {
      scoreData.push({
        name: nameUser,
        value: valueScore
      });
    }

    if (scoreData.length !== 0) {
      newScoreData = scoreData.sort(function(a, b) {
        return b.value - a.value;
      });
    }
    if (scoreData.length > 10) {
      scoreData.pop();
    }
    let json_str = JSON.stringify(newScoreData);
    localStorage.setItem("data", json_str);
  }

  function createCookie() {
    let dataLocalStorage = localStorage.getItem("data");
    if (dataLocalStorage === null) localStorage.setItem("data", "[]");
  }

  function getDataCookies() {
    let cookiesArr = localStorage.getItem("data");
    scoreData = JSON.parse(cookiesArr);
  }
  createCookie();
  getDataCookies();
};
