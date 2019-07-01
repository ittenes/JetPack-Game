class DrowBackground {
  constructor(width, height, ctx) {
    this.ceiling = 0;
    this.ground = 0;
    this.speedBg = 10;
    this.width = width;
    this.height = height;
    this.ctx = ctx;
  }

  createInfinteBackround() {
    var image = new Image();
    image.src = 'images/star-night-backgrounds-5524119.jpg';
    var imgHeight = 0;


    this.ctx.drawImage(image, 0, imgHeight);
    this.ctx.drawImage(image, 0, imgHeight - this.height);

    imgHeight += this.speedBg;

    if (imgHeight == this.height) {
      imgHeight = 0;
    }
    requestAnimationFrame(() => this.createInfinteBackround())
  }



}