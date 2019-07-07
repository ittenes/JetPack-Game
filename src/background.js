class DrawBackground {
  constructor(width, height) {
    this.speedBg = 2;
    this.w = width;
    this.h = height;
    this.x01 = 0
    this.x02 = 0
    this.x03 = 0
    this.x04 = 0
    this.x = 0;
  }

  createInfinteBackround(ctx) {
    this.imge = new Image();
    this.ctx = ctx
    ctx.save();
    this.imge.src = 'images/Backgrounds/03/Layer01.png';

    ctx.drawImage(this.imge, this.x, 0, this.w, this.h);
    ctx.drawImage(this.imge, this.x + this.w, 0, this.w, this.h);


    this.x -= this.speedBg / 4;
    ctx.restore();
    if (this.x == -this.w) {
      this.x = 0;
    }
    this.createBackgorund01(ctx);
    this.createBackgorund02(ctx);
    this.createBackgorund03(ctx);
    this.createBackgorund04(ctx);
  }

  createBackgorund01(ctx) {
    this.imge01 = new Image();
    ctx.save();
    this.imge01.src = 'images/Backgrounds/03/Layer02.png';

    ctx.drawImage(this.imge01, this.x01, 0, this.w, this.h);
    ctx.drawImage(this.imge01, this.x01 + this.w, 0, this.w, this.h);

    this.x01 -= this.speedBg / 3;
    ctx.restore();
    if (this.x01 == -this.w) {
      this.x01 = 0;
    }
  }
  createBackgorund02(ctx) {
    this.imge02 = new Image();
    ctx.save();
    this.imge02.src = 'images/Backgrounds/03/Layer03.png';
    ctx.drawImage(this.imge02, this.x01, 0, this.w, this.h);
    ctx.drawImage(this.imge02, this.x01 + this.w, 0, this.w, this.h);

    this.x02 -= this.speedBg / 2;
    ctx.restore();
    if (this.x02 == -this.w) {
      this.x02 = 0;
    }
  }
  createBackgorund03(ctx) {
    this.imge03 = new Image();
    ctx.save();
    this.imge03.src = 'images/Platform/Terain/3.png';

    ctx.drawImage(this.imge03, this.x03, 610, this.w, 100);
    ctx.drawImage(this.imge03, this.x03 + this.w, 610, this.w, 100);

    this.x03 -= this.speedBg / 2;
    ctx.restore();
    if (this.x03 == -this.w) {
      this.x03 = 0;
    }
  }
  createBackgorund04(ctx) {
    this.imge04 = new Image();
    ctx.save();
    this.imge04.src = 'images/Platform/Terain/3.png';

    ctx.drawImage(this.imge04, this.x04, -30, this.w, 100);
    ctx.drawImage(this.imge04, this.x04 + this.w, -30, this.w, 100);

    this.x04 -= this.speedBg / 2;
    ctx.restore();
    if (this.x04 == -this.w) {
      this.x04 = 0;
    }
  }
}