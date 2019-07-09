class Character {
  constructor(ceiling, ground) {
    this.ceiling = ceiling;
    this.ground = ground;
    this.x = 150;
    this.y = 220;
    this.widthObjet = 50;
    this.heightObjet = 50;
    this.velY = 0;
    this.velX = 0;
    this.speed = 4;
    this.friction = 0.92;
    this.keys = [];
    this.imges = []
    this.countImg = 0;
    this.imgNumberSmoke = 1;
    this.imgNumberBg = 1;
  }

  // run(ctx) {
  //   this.image = new Image();
  //   this.images = [
  //     'images/Characters/02/Walk/1.png',
  //     'images/Characters/02/Walk/2.png',
  //     'images/Characters/02/Walk/3.png',
  //     'images/Characters/02/Walk/4.png',
  //     'images/Characters/02/Walk/5.png',
  //     'images/Characters/02/Walk/6.png',
  //     'images/Characters/02/Walk/7.png',
  //     'images/Characters/02/Walk/8.png'
  //   ]
  //   this.images.forEach(element => {
  //     this.image.src = element;
  //     ctx.drawImage(this.image, this.x - 25, this.y - 25, 100, 100);
  //   }); //ROJO CORRE EN EL SUELO
  // }
  flyUp(ctx) {
    this.image = new Image();
    this.images = [
      'images/Characters/02/Fly/1.png',
      'images/Characters/02/Fly/2.png',
      'images/Characters/02/Fly/3.png',
      'images/Characters/02/Fly/4.png'
    ]
    this.image.src = 'images/Characters/02/Fly/1.png';
    ctx.drawImage(this.image, this.x - 25, this.y - 25, 100, 100);
  }

  flyDown(ctx, bg) {
    this.imageBg = new Image();
    if (bg == 0) {
      this.images = [
        'images/Characters/02/Fly/1.png',
        'images/Characters/02/Fly/2.png',
        'images/Characters/02/Fly/3.png',
        'images/Characters/02/Fly/4.png',
        'images/Characters/02/Fly/1.png',
        'images/Characters/02/Fly/2.png',
        'images/Characters/02/Fly/3.png',
        'images/Characters/02/Fly/4.png'
      ]
    } else {
      this.images = [
        'images/Characters/02/Walk/1.png',
        'images/Characters/02/Walk/2.png',
        'images/Characters/02/Walk/3.png',
        'images/Characters/02/Walk/4.png',
        'images/Characters/02/Walk/5.png',
        'images/Characters/02/Walk/6.png',
        'images/Characters/02/Walk/7.png',
        'images/Characters/02/Walk/8.png'
      ]
    }
    if (this.countImg == 4) {
      this.imgNumberBg++
      this.countImg = 0;
      if (this.imgNumberBg > 7) {
        this.imgNumberBg = 0
      }
    }
    this.countImg++;
    this.imageBg.src = this.images[this.imgNumberBg];
    ctx.drawImage(this.imageBg, this.x - 25, this.y - 25, 100, 100);
  }

  smokes(ctx) {
    this.imgSmoke = new Image();
    this.imagesSmoke = [
      'images/Characters/Jetpack Smoke/1.png',
      'images/Characters/Jetpack Smoke/2.png',
      'images/Characters/Jetpack Smoke/3.png',
      'images/Characters/Jetpack Smoke/4.png',
      'images/Characters/Jetpack Smoke/1.png',
      'images/Characters/Jetpack Smoke/2.png',
      'images/Characters/Jetpack Smoke/3.png',
      'images/Characters/Jetpack Smoke/4.png'
    ]
    //this.imgSmoke.src = 'images/Characters/Jetpack Smoke/1.png';
    // ctx.drawImage(this.imgSmoke, this.x - 60, this.y + 60, 100, 100);

    if (this.countImg == 4) {
      this.imgNumberSmoke++
      this.countImg = 0;
      if (this.imgNumberSmoke > 3) {
        this.imgNumberSmoke = 0
      }
    }
    this.countImg++;
    this.imgSmoke.src = this.imagesSmoke[this.imgNumberSmoke];
    ctx.drawImage(this.imgSmoke, this.x - 60, this.y + 60, 100, 100);
  }

  crash(ctx) {

  }

  moveUpAndFall(ctx) {
    if (this.keys[38]) {
      this.flyUp(ctx)
      this.smokes(ctx)
      // SUBE ROSA
      if (this.velY > -this.speed) {
        this.velY--;
      }
    } else {
      this.flyDown(ctx, 0)
      // BAJA ES AMARILLO
      if (this.velY < this.speed) {
        this.velY++;
      }
    }

    this.velY *= this.friction;
    this.y += this.velY;

    if (this.y > this.ground - this.heightObjet) {
      this.y = this.ground - this.heightObjet;
      this.flyDown(ctx, 1)
    } else if (this.y <= this.ceiling) {
      this.y = this.ceiling;
    }

    //ctx.fillRect(this.x, this.y, this.widthObjet, this.heightObjet);
  }
}