window.onload = function () {
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");

  var widthCanvasGlobal = canvas.width = 1224;
  var heigthCanvasGlobal = canvas.height = 650;

  let game = new Game(ctx)
  game.startGame();

}