class Rocket {
  constructor() {
    this.speedRocket = 20;
    this.x = -1180;
    this.y = 0;
    this.w = 40;
    this.h = 40;
    this.launch = 0;
    this.launcher = false;
    this.img = new Image();
    this.audio = new Audio('sounds/439915__scicofilms-com__video-game-retro-arcade-space-invade-pac-man-classic-80s-vintage-8-bit-atar-ninten-jump.mp3');
    this.countAuido = 0;

  }

  alertPlayer(characterPositionY, ctx) {
    //Timer to lanch the rocket
    if (this.launch == 20) {
      this.launchRoquet(ctx); // LUNCH THE ROCKET IN THE SAME LEVEL OF THE CHARACTER

    } else {
      this.y = characterPositionY;
      this.launch++;
      this.img.src = "images/User_Interface/prj07.png";
      ctx.save();
      ctx.scale(-1, 1);
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
      ctx.restore();

    }
  }

  launchRoquet(ctx) {
    if (this.countAuido === 0) {
      this.audio.loop = false;
      this.audio.volume = 0.1
      this.audio.play();
      this.countAuido = 1;
    }
    this.img.src = "images/Projectile/6.png";
    this.w = 300;
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(this.img, this.x - 250, this.y, this.w, this.h);
    ctx.restore();
    if (this.x >= 300) {
      this.x = 300;
    } else {
      this.x += this.speedRocket;
    }
  }
}