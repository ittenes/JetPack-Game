class DrowBackground {
  constructor(width, height) {
    this.speedBg = 2;
    this.width = width;
    this.height = height;
    this.imge = new Image();
    this.imgWidth = 0;
  }


  createInfinteBackround(ctx) {

    this.imge.src = 'images/star-night-backgrounds-5524119.jpg';

    ctx.drawImage(this.imge, this.imgWidth, 0);
    ctx.drawImage(this.imge, this.imgWidth + this.width, 0);

    this.imgWidth -= this.speedBg;


    if (this.imgWidth == -this.width) {
      this.imgWidth = 0;
    }

  }



}