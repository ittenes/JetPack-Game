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
    if (this.rotation == 0) {
      ctx.save();
      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.y, this.w, this.h);
      this.x -= this.speedBg;
      ctx.restore();

    } else if (this.rotation == 6) {
      ctx.save();
      ctx.beginPath();
      ctx.translate(this.x + this.w / 2, this.y + this.h / 2);
      ctx.rotate(Math.PI / this.rotation);
      ctx.translate(-(this.x + this.w / 2), -(this.y + this.h / 2));
      ctx.fillStyle = "#FFeedd";
      ctx.fillRect(this.x, this.y, this.w, this.h);
      console.log("TCL: DrowElectric -> createElectric -> this.x", this.x)
      ctx.restore();
      this.x -= this.speedBg;
      //this.y -= (this.speedBg/2);

    }
  }

}