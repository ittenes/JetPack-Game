class Rocket {
  constructor() {
    this.speedRocket = 20;
    this.x = 1180;
    this.y = 0;
    this.w = 40;
    this.h = 40;
    this.launch = 0;
    this.launcher = false;
    this.img = new Image()
  }

  alertPlayer(characterPositionY, ctx) {
    //Timer to lanch the rocket
    if (this.launch == 30) {
      this.launchRoquet(ctx) // LUNCH THE ROCKET IN THE SAME LEVEL OF THE CHARACTER
    } else {
      this.y = characterPositionY;
      this.launch++;
      this.img.src = 'images/User Interface/prj07.png';
      ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    }
  }

  launchRoquet(ctx) {
    this.img.src = 'images/Projectile/6.png';
    this.w = 300;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    if (this.x <= -300) {
      this.x = -300
    } else {
      this.x -= this.speedRocket;
    }

  }


}