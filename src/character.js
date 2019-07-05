class Character {

  constructor(ceiling, ground) {
    this.ceiling = ceiling;
    this.ground = ground;
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
  run(ctx) {
    ctx.fillStyle = "#FF0000" //ROJO CORRE EN EL SUELO
  }

  moveUpAndFall(ctx) {

    if (this.keys[38]) {
      ctx.fillStyle = "#FFCCCC"; // SUBE ROSA
      if (this.velY > -this.speed) {
        this.velY--;

      }
    } else {
      ctx.fillStyle = "#FFFF00"; // BAJA ES AMARILLO
      if (this.velY < this.speed) {
        this.velY++;

      }
    }

    this.velY *= this.friction;
    this.y += this.velY;

    if (this.y > (this.ground - this.heightObjet)) {
      this.y = (this.ground - this.heightObjet);
      this.run(ctx);
    } else if (this.y <= this.ceiling) {
      this.y = this.ceiling;
    }

    ctx.fillRect(this.x, this.y, this.widthObjet, this.heightObjet);
  }
}