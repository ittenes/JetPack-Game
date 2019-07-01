window.onload = function () {
  var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");

  var widthCanvasGlobal = canvas.width = 1224;
  var heigthCanvasGlobal = canvas.height = 650;


  var character = new Character(100, 600, ctx);
  var drowBackground = new DrowBackground(widthCanvasGlobal, heigthCanvasGlobal, ctx)

  drowBackground.createInfinteBackround();
  character.moveUpAndFall();


  document.body.addEventListener("keydown", function (e) {
    character.keys[e.keyCode] = true;
    console.log("TCL: e.keyCode", e.keyCode)
  });
  document.body.addEventListener("keyup", function (e) {
    character.keys[e.keyCode] = false;
    console.log("TCL: e.keyCode", e.keyCode)
  });
}