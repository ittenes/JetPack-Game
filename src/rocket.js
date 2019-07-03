class Rocket {
  constructor(ctx) {
    this.speedRocket = 20;
    this.xPosition = 1150;
    this.yPosition = 0;
    this.width = 40;
    this.height = 40;
    this.launch = 0;
    this.launcher = false;
    this.ctx = ctx;
  }

  draw() {

  }

  alertPlayer(characterPositionY, ) {
    //Timer to lanch the rocket
    if (this.launch == 120) {
      this.launchRoquet() // LUNCH THE ROCKET IN THE SAME LEVEL OF THE CHARACTER
    } else {
      this.yPosition = characterPositionY;
      this.launch++;
    }
    this.ctx.fillStyle = "#FF0000";
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);

  }

  launchRoquet() {

    if (this.xPosition <= -60) {
      this.xPositon = -60
    } else {
      this.xPosition -= this.speedRocket;
    }
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);

  }


}