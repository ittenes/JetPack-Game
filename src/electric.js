class DrawElectric {
  constructor(yPosition, height, width, rotation, speed) {
    this.speedBg = speed;
    this.y = yPosition;
    this.x = 1300;
    this.w = width;
    this.h = height;
    this.rotation = rotation;
    this.img = new Image();

  }


  createElectric(ctx) {
    if (this.rotation == 0) {
      ctx.save();
      this.img.src = 'images/Platform/Terain/11.png'
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      this.x -= this.speedBg;
      ctx.restore();

    } else if (this.rotation == 1) {
      ctx.save();
      this.img.src = 'images/Platform/Terain/12.png'
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      this.x -= this.speedBg;
      ctx.restore();
    }
  }

}