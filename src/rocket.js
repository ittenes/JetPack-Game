class Rocket {
  constructor() {
    this.speedRocket = 20;
    this.xPosition = 1150;
    this.yPosition = 0;
    this.width = 40;
    this.height = 40;
    this.launch = 0;
    this.launcher = false;
  }

  alertPlayer(characterPositionY, ctx) {
    //Timer to lanch the rocket
    if (this.launch == 60) {
      this.launchRoquet(ctx) // LUNCH THE ROCKET IN THE SAME LEVEL OF THE CHARACTER
    } else {
      this.yPosition = characterPositionY;
      this.launch++;
    }
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }

  launchRoquet(ctx) {

    if (this.xPosition <= -60) {
      this.xPositon = -60
    } else {
      this.xPosition -= this.speedRocket;
    }
    ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
  }


}