class DrowBackground {
  constructor(width, height) {
    this.speedBg = 2;
    this.w = width;
    this.h = height;
    this.imge = new Image();
    this.x = 0;
  }

  createInfinteBackround(ctx) {

    this.imge.src = 'images/star-night-backgrounds-5524119.jpg';

    ctx.drawImage(this.imge, this.x, 0);
    ctx.drawImage(this.imge, this.x + this.w, 0);
    ctx.drawImage(this.imge, this.x + (this.w * 2), 0);

    this.x -= this.speedBg;

    if (this.x == -this.w) {
      this.x = 0;
    }
  }
}