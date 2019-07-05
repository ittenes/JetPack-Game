class DrowElectric {
  constructor() {
    this.speedBg = 2;
    this.y;
    this.x = 1000;
    this.electricWidth = 0;
    this.w;
    this.h = 60;
    this.rotation;

  }


  createElectric(width, yPosition, rotation, ctx) {
    this.w = width;
    this.y = yPosition;
    this.rotation = rotation;

    if (this.x + this.w >= 0 && this.rotation == 0) {
      ctx.save();
      ctx.translate(1000, this.y);
      ctx.rotate(Math.PI / this.rotation);
      ctx.translate(-1000, -this.y);

      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.h, this.w, this.h);
      this.x -= this.speedBg;
      ctx.restore();
    } else if (this.x + this.w >= 0 && this.rotation == -4) {
      ctx.save();
      ctx.translate(1000, this.y);
      ctx.rotate(Math.PI / this.rotation);
      ctx.translate(-1000, -this.y);

      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.h, this.w, this.h);
      this.x -= this.speedBg * 2;
      ctx.restore();
    }
  }



}