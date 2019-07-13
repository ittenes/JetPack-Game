class DrawCoins {
  constructor(xPosition, yPosition) {
    this.x = xPosition;
    this.y = yPosition;
    this.w = 60;
    this.h = 60;
    this.speed = 2;
    this.img = new Image();
    this.countImg = 0;
    this.imgNumerCoin = 1;
  }

  createCoins(ctx) {
    this.images = [
      'images/Items_Sprite/Coins/1.png',
      'images/Items_Sprite/Coins/2.png',
      'images/Items_Sprite/Coins/3.png',
      'images/Items_Sprite/Coins/4.png',
      'images/Items_Sprite/Coins/5.png',
      'images/Items_Sprite/Coins/6.png',
      'images/Items_Sprite/Coins/7.png',
      'images/Items_Sprite/Coins/8.png'
    ]
    if (this.countImg >= 7) {
      this.imgNumerCoin++
      this.countImg = 0;
      if (this.imgNumerCoin > 7) {
        this.imgNumerCoin = 0
      }
    }
    this.img.src = this.images[this.imgNumerCoin];
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.x -= this.speed;
    this.countImg++
  }
}