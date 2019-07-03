class Game {

  constructor(ctx) {
    this.ctx = ctx;
    this.collision = new Collisions(ctx)
    this.character = new Character(100, 600, ctx);
    this.drowBackground = new DrowBackground(600, 650, ctx);
    this.rocket = new Rocket(ctx);
  }

  clearAll() {
  }

  startGame() {
    this.clearAll()
    requestAnimationFrame(() => this.startGame())

    let rocket = {x: this.rocket.xPosition , y: this.rocket.yPosition, w: this.rocket.width, h: this.rocket.height }
    let character = {x: this.character.x , y: this.character.y ,w: this.character.widthObjet, h: this.character.heightObjet }
    
    console.log(rocket, character)

    this.drowBackground.createInfinteBackround();
    this.character.moveUpAndFall();
    this.rocket.alertPlayer(this.character.y);
    this.collision.detectCollisionRocket(rocket, character);


    document.body.addEventListener("keydown", e =>
      this.character.keys[e.keyCode] = true);

    document.body.addEventListener("keyup", e =>
      this.character.keys[e.keyCode] = false);


  }

}