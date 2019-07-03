class Game {

  constructor(ctx) {
    this.ctx = ctx;
    this.character = new Character(100, 600, ctx);
    this.drowBackground = new DrowBackground(600, 650, ctx);
    this.rocket = new Rocket(ctx);
  }

  clearAll() {
    this.ctx.clearRect(0, 0, 0, 0);
  }

  startGame() {
    this.clearAll()
    requestAnimationFrame(() => this.startGame())

    this.drowBackground.createInfinteBackround();
    this.character.moveUpAndFall();
    this.rocket.alertPlayer(this.character.y)


    document.body.addEventListener("keydown", e =>
      this.character.keys[e.keyCode] = true);

    document.body.addEventListener("keyup", e =>
      this.character.keys[e.keyCode] = false);


  }

}