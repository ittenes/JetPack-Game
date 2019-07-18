class GameOver {
  constructor() {
    this.score;
    this.mints;
    this.seconds;
    this.music;
  }

  drawBG(ctx, coins, mints, seconds, gameOver) {
    this.coins = coins;
    this.mints = mints;
    this.seconds = seconds;
    this.score = Math.round(this.coins * (2 + this.mints + (this.seconds / 60)))
    this.gameOver = gameOver;

    this.gameOver(this.mints, this.seconds, this.coins, this.score);
  }
}