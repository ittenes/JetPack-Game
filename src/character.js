class Character {

  constructor(ceiling, ground, ctx) {
    this.ceiling = ceiling;
    this.ground = ground;
    this.ctx = ctx;
    this.x = 150;
    this.y = 220;
    this.widthObjet = 20;
    this.heightObjet = 20;
    this.velY = 0;
    this.velX = 0;
    this.speed = 4;
    this.friction = 0.92;
    this.keys = [];
  }
  run() {
    this.ctx.fillStyle = "#FF0000"
  }
  moveUpAndFall() {
    requestAnimationFrame(() => this.moveUpAndFall())
    if (this.keys[38]) {
      console.log("se ha pulsado")
      if (this.velY > -this.speed) {
        this.velY--;
      }
    } else {
      console.log("no se ha pulsado")
      if (this.velY < this.speed) {
        this.velY++;
      }
    }

    this.velY *= this.friction;
    this.y += this.velY;

    if (this.y > (this.ground - this.heightObjet)) {
      this.y = (this.ground - this.heightObjet);
      this.ctx.fillStyle = "#FFFFFF";
    } else if (this.y <= this.ceiling) {
      this.y = this.ceiling;
      this.run();
    }

    this.ctx.fillRect(this.x, this.y, this.widthObjet, this.heightObjet);
  }


  // ESTO ES COMO MOVERLO LLEVAR EL GAME
  // document.body.addEventListener("keydown", function (e) {
  //   keys[e.keyCode] = true;
  //   console.log("TCL: e.keyCode", e.keyCode)
  // });
}