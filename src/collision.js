class Collisions {

  constructor() {
    this.rocket;
    this.character;

  }

  detectCollisionElement(element, character, ctx) {
    this.rocket = element;
    this.character = character;

    if (this.rocket.x < this.character.x + this.character.w &&
      this.rocket.x + this.rocket.w > this.character.x &&
      this.rocket.y < this.character.y + this.character.h &&
      this.rocket.y + this.rocket.h > this.character.y) {
      //this.drow(ctx) // collision detected!
      return true;
    }

  }
  detectCollisionRocket(rocket, character, ctx) {
    this.rocket = rocket;
    this.character = character;

    if (this.rocket.x + 280 < this.character.x + this.character.w &&
      this.rocket.x + this.rocket.w + 60 > this.character.x &&
      this.rocket.y < this.character.y + this.character.h &&
      this.rocket.y + this.rocket.h > this.character.y) {

      this.drow(ctx) // collision detected!
      return true;
    }

  }

  drow(ctx) {
    ctx.fillRect(600, 100, 400, 400);
    ctx.fillStyle = "#33FFD1"
    //alert("hola")
  }
}