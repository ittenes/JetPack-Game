class DrowElectric {
  constructor(yPosition, height, width, rotation, speed) {
    this.speedBg = speed;
    this.y = yPosition;
    this.x = 1300;
    this.w = width;
    this.h = height;
    this.rotation = rotation;

  }


  createElectric(ctx) {
    if (this.x + this.w >= 0 && this.rotation == 0) {
      //ctx.save();
      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.y, this.w, this.h);
      this.x -= this.speedBg;
      //ctx.restore();
      console.log('lo pinto' + ctx)
    } else if (this.x + this.w >= 0 && this.rotation == -6) {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(Math.PI / this.rotation);
      ctx.translate(-this.x, -this.y);
      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.y, this.w, this.h);

      this.x -= this.speedBg;
      this.y -= (this.speedBg / 1.5);
      ctx.restore();
    }
  }

}