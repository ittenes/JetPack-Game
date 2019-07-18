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
    this.speed = 4; // normal is 4
    this.friction = 0.92;
    this.keys = [];
    this.imges = []
    this.countImg = 0;
    this.imgNumberSmoke = 1;
    this.imgNumberBg = 1;
    this.imgNumerCrash = 1;
    this.imgNumberMagnetic = 1;
    this.walking = 0;
    this.typeCharacter = 0;
    this.countMagnetic = 0;
  }

  selectCharacter(ctx, type) {
    if (this.typeCharacter === 0) {
      this.moveUpAndFall(ctx);
    } else if (this.typeCharacter === 1) {
      this.changePosition(ctx);
    }
  }

  // THIS IS DE CHARACTER 0 YOU NEED PUSS UP ARROW IF YO WANT FLY

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

  flyDown(ctx, walking) {
    this.imageBg = new Image();
    this.images = [
      'images/Characters/02/Fly/1.png',
      'images/Characters/02/Fly/2.png',
      'images/Characters/02/Fly/3.png',
      'images/Characters/02/Fly/4.png',
      'images/Characters/02/Walk/1.png',
      'images/Characters/02/Walk/2.png',
      'images/Characters/02/Walk/3.png',
      'images/Characters/02/Walk/4.png',
      'images/Characters/02/Walk/5.png',
      'images/Characters/02/Walk/6.png',
      'images/Characters/02/Walk/7.png',
      'images/Characters/02/Walk/8.png'
    ]

    if (walking === 0) {
      if (this.countImg == 4) {
        this.imgNumberBg++
        this.countImg = 0;
        if (this.imgNumberBg > 3) {
          this.imgNumberBg = 0
        }
      }
    } else if (walking === 1) {
      if (this.countImg == 12) {
        this.imgNumberBg++
        this.countImg = 4;
        if (this.imgNumberBg > 11) {
          this.imgNumberBg = 4
        }
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
    ]

    if (this.countImg >= 4) {
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
    this.imgCrash = new Image();
    this.imagesCrash = [
      'images/CollisionFX/02/1.png ',
      'images/CollisionFX/02/2.png ',
      'images/CollisionFX/02/3.png ',
      'images/CollisionFX/02/4.png ',
      'images/CollisionFX/02/5.png ',
      'images/CollisionFX/02/6.png ',
      'images/CollisionFX/02/7.png '
    ]
    if (this.countImg >= 4) {
      this.imgNumerCrash++
      this.countImg = 0;
      if (this.imgNumerCrash > 3) {
        this.imgNumerCrash = 0
      }
    }
    this.imgCrash.src = this.imagesCrash[this.imgNumerCrash];
    ctx.drawImage(this.imgCrash, this.x - 25, this.y - 25, 100, 100);
  }

  moveUpAndFall(ctx) {

    if (this.keys[38]) {
      if (this.crashValue == 1) {
        this.crash(ctx)
        crashValue = 0
      }
      this.flyUp(ctx) // go up
      this.smokes(ctx)
      if (this.velY > -this.speed) {
        this.velY--;
      }
    } else {
      this.flyDown(ctx, this.walking) // fall down
      if (this.velY < this.speed) {
        this.velY++;
      }
    }

    this.velY *= this.friction;
    this.y += this.velY;

    if (this.y > this.ground - this.heightObjet) {
      this.y = this.ground - this.heightObjet;

    } else if (this.y <= this.ceiling) {
      this.y = this.ceiling;
      this.walking = 0;
      this.countImg = 0;
      this.imgNumberBg = 0;
    }
    if (this.y >= 550) {
      this.walking = 1;
    } else {
      this.walking = 0;
    }

    //ctx.fillRect(this.x, this.y, this.widthObjet, this.heightObjet);
  }


  //----------------------------------------
  // THIS IS DE CHARACTER 1 YOU NEED PUSS UP ARROW YOU CAN RUN OVER THE GROUND OR OVER THE CEILING 

  magneticFlay(ctx) {
    this.image = new Image();
    this.imagesMagnetic = [
      'images/Characters/04/Fly2/1.png',
      'images/Characters/04/Fly2/2.png',
      'images/Characters/04/Fly2/3.png',
      'images/Characters/04/Fly2/4.png'
    ]
    if (this.countImg >= 4) {
      this.imgNumberMagnetic++
      this.countImg = 0;
      if (this.imgNumberMagnetic > 3) {
        this.imgNumberMagnetic = 0
      }
    }
    this.countImg++;
    if (this.y < this.ceiling) {
      this.walkUp(ctx);
    } else if (this.y >= this.ground - this.heightObjet - 30) {
      this.walkDown(ctx);
    } else {
      this.image.src = this.imagesMagnetic[this.imgNumberMagnetic];
      ctx.drawImage(this.image, this.x - 25, this.y - 25, 125, 125);
    }
  }

  changePosition(ctx) {

    if (this.crashValue == 1) {
      this.crash(ctx)
      crashValue = 0
    }
    this.magneticFlay(ctx);
    if (this.keys[40]) {
      this.countMagnetic = 0;
    }
    if (this.keys[38]) {
      this.countMagnetic = 1;
    }
    if (this.countMagnetic === 0) {
      this.magneticdown()
    } else {
      this.magneticUp();
    }
  }


  magneticUp() {
    if (this.velY > -this.speed) {
      this.velY--;
    }
    this.velY *= this.friction;
    this.y += this.velY * 1.5;
    if (this.y <= this.ceiling - 10) {
      this.y = this.ceiling - 10;

    }
  }

  magneticdown() {
    if (this.velY < this.speed) {
      this.velY++;
    }
    this.velY *= this.friction;
    this.y += this.velY * 1.5;
    if (this.y >= this.ground - this.heightObjet - 30) {
      this.y = this.ground - this.heightObjet - 30;
    }
  }

  walkUp(ctx) {
    this.image = new Image();
    this.imagesMagneticUp = [
      'images/Characters/04/Walk3/1.png',
      'images/Characters/04/Walk3/2.png',
      'images/Characters/04/Walk3/5.png',
      'images/Characters/04/Walk3/8.png'
    ]
    if (this.countImg >= 4) {
      this.imgNumberMagnetic++
      this.countImg = 0;
      if (this.imgNumberMagnetic > 3) {
        this.imgNumberMagnetic = 0
      }
    }
    this.countImg++;
    this.image.src = this.imagesMagneticUp[this.imgNumberMagnetic];
    ctx.drawImage(this.image, this.x - 25, this.y - 25, 125, 125);;
  }
  walkDown(ctx) {
    this.image = new Image();
    this.imagesMagneticDown = [
      'images/Characters/04/Walk2/1.png',
      'images/Characters/04/Walk2/2.png',
      'images/Characters/04/Walk2/5.png',
      'images/Characters/04/Walk2/8.png'
    ]
    if (this.countImg >= 4) {
      this.imgNumberMagnetic++
      this.countImg = 0;
      if (this.imgNumberMagnetic > 3) {
        this.imgNumberMagnetic = 0
      }
    }
    this.countImg++;
    this.image.src = this.imagesMagneticDown[this.imgNumberMagnetic];
    ctx.drawImage(this.image, this.x - 25, this.y - 25, 125, 125);;
  }
}