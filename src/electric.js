class DrowElectric {
  constructor(width, height, yPosition, ctx) {
    this.speedBg = 2;
    this.y = yPosition;
    this.x = 1300;
    this.w = width;
    this.h = height;
    this.ctx = ctx;
    this.electricWidth = 0;
  }


  createElectric() {

    this.ctx.fillStyle = "#FFee";
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
    this.imgWidth -= this.speedBg;


    if (this.x == -this.width) {
      console.log("hay que quitarlo")
    }

  }



}