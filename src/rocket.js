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
    this.yPosRock = 0;
    this.xPosRock = 0;
  }

  alertPlayer(characterPositionY) {

    //Timer to lanch the rocket
    if (this.launch == 60) {
      this.ctx.clearRect(this.xPosition, this.yPosition, this.width, this.height)
      this.launchRoquet() // LUNCH THE ROCKET IN THE SAME LEVEL OF THE CHARACTER

    } else {
      this.yPosition = characterPositionY;
      this.launch++;
      console.log("lo que vale el launch" + this.launch)
    }
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
    this.ctx.fillStyle = "#FF0000"
  }

  launchRoquet() {
    this.ctx.fillRect(this.xPosition, this.yPosition, this.width, this.height);
    this.xPosition -= this.speedRocket;
  }


}