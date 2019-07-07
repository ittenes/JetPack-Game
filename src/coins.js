class DrawCoins {
  constructor(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.w = 60;
    this.h = 60;
    this.speed = 2;
    this.img = new Image();
  }

  createCoins(ctx) {

    console.log("TCL: DrawCoins -> createCoins -> this.x", this.x)
    this.img.src = 'images/Items_Sprite/Coins/1.png';
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);


    this.x -= this.speed;

  }
}