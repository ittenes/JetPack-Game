class GameOver {

  constructor() {
    this.timer = "10:10";
    this.score;
    this.btnX = 500;
    this.btnY = 420;
    this.btnW = 200;
    this.btnH = 75;

  }

  drawBG(ctx, score) {
    this.score = score;

    ctx.fillStyle = "#101501";
    ctx.fillRect(0, 0, 1224, 650);

    ctx.fillStyle = 'red';
    ctx.fillRect(this.btnX, this.btnY, this.btnW, this.btnH);

    // BUTTON START CLICK
    //this.drawData();
    //this.eventClickButton();
    ctx.font = '60px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText('GAME OVER', 450, 150);

    ctx.font = '40px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText('TIME', 500, 250);

    ctx.font = '40px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText(2222, 700, 250);

    ctx.font = '40px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText('COINS', 500, 300);

    ctx.font = '40px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText(this.score, 700, 300);

    ctx.font = '60px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText('TOTAL SCORE', 200, 380);

    ctx.font = '60px Bowlby One SC';
    ctx.fillStyle = "#f3ff05";
    ctx.fillText('23232', 700, 380);


  }


  drawData() {}
}