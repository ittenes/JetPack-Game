class DrawCoins {
  constructor(xPosition, yPosition, type) {
    this.x = xPosition;
    this.y = yPosition;
    this.w = 50;
    this.h = 50;
    this.speed = 2;
    this.img = new Image();
    this.countImg = 0;
    this.imgNumerCoin = 1;
    this.type = type;
  }

  createCoins(ctx) {

    this.imagesCoin = [
      'images/Items_Sprite/Coins/1.png',
      'images/Items_Sprite/Coins/2.png',
      'images/Items_Sprite/Coins/3.png',
      'images/Items_Sprite/Coins/4.png',
      'images/Items_Sprite/Coins/5.png',
      'images/Items_Sprite/Coins/6.png',
      'images/Items_Sprite/Coins/7.png',
      'images/Items_Sprite/Coins/8.png'
    ]
    this.imagesLive = [
      'images/Items_Sprite/Heals/1.png',
      'images/Items_Sprite/Heals/2.png',
      'images/Items_Sprite/Heals/3.png',
      'images/Items_Sprite/Heals/4.png',
      'images/Items_Sprite/Heals/1.png',
      'images/Items_Sprite/Heals/2.png',
      'images/Items_Sprite/Heals/3.png',
      'images/Items_Sprite/Heals/4.png',
    ]
    this.imagesPowerUP = [
      'images/Items_Sprite/Power_Up/1.png',
      'images/Items_Sprite/Power_Up/2.png',
      'images/Items_Sprite/Power_Up/3.png',
      'images/Items_Sprite/Power_Up/4.png',
      'images/Items_Sprite/Power_Up/1.png',
      'images/Items_Sprite/Power_Up/2.png',
      'images/Items_Sprite/Power_Up/3.png',
      'images/Items_Sprite/Power_Up/4.png',
    ]

    if (this.countImg >= 7) {
      this.imgNumerCoin++
      this.countImg = 0;
      if (this.imgNumerCoin > 7) {
        this.imgNumerCoin = 0
      }
    }

    if (this.type === 1) {
      this.w = 100;
      this.h = 100;
      this.img.src = this.imagesCoin[this.imgNumerCoin];
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } else if (this.type === 0) {
      this.img.src = this.imagesCoin[this.imgNumerCoin];
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } else if (this.type === 2) {
      this.w = 100;
      this.h = 100;
      this.img.src = this.imagesLive[this.imgNumerCoin];
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    } else if (this.type === 3) {
      this.w = 100;
      this.h = 100;
      this.img.src = this.imagesPowerUP[this.imgNumerCoin];
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
    this.x -= this.speed;
    this.countImg++
  }
}