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

    this.images.forEach(element => {
      this.image.src = element;
      ctx.drawImage(this.image, this.x - 25, this.y - 25, 100, 100);

    });


  }
  flyDown(ctx, bg) {
    if (bg == 0) {
      this.image = new Image();
      this.images = [
        'images/Characters/02/Fly/1.png',
        'images/Characters/02/Fly/2.png',
        'images/Characters/02/Fly/3.png',
        'images/Characters/02/Fly/4.png'
      ]
      this.images.forEach(element => {
        this.image.src = element;
        ctx.drawImage(this.image, this.x - 25, this.y - 25, 100, 100);
      }); //RO
    } else {
      this.imageBg = new Image();
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
      this.images.forEach(element => {
        this.imageBg.src = element;
        ctx.drawImage(this.imageBg, this.x - 25, this.y - 25, 100, 100);
      });
    }
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
    this.imagesSmoke.forEach(e => {
      this.imgSmoke.src = e;
      ctx.drawImage(this.imgSmoke, this.x - 60, this.y + 60, 100, 100);
    });
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