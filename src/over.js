class GameOver {
  constructor() {
    this.score;
    this.mints;
    this.seconds;
  }

  drawBG(ctx, coins, mints, seconds) {
    this.coins = coins;
    this.mints = mints;
    this.seconds = seconds;
    this.score = Math.round(this.coins * (2 + this.mints + (this.seconds / 60)))

    console.log("TCL: drawBG -> this.coins", this.coins)
    console.log("TCL: drawBG -> this.mints", this.mints)
    console.log("TCL: drawBG -> this.seconds", this.seconds)
    console.log("TCL: drawBG -> this.score", this.score)

    document.getElementById("game").style.display = "none";
    document.getElementById("gameover").style.display = "block";
    document.getElementById("text-gameover-time").innerHTML = `TIME ${
      this.mints
    } : ${this.seconds}`;
    document.getElementById("text-gameover-coins").innerHTML = `COINS ${
      this.coins
    }`;
    document.getElementById("text-gameover-total").innerHTML = `TOTALSCORE ${
      this.score
    }`;


  }
}