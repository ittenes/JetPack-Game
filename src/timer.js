class Timer {

  constructor() {

    this.stmints = 0;
    this.stseconds = 0;

    this.seconds = 0;
    this.mints = 0;

    this.startchron = 0;
    this.timerNow;
    this.setIntervalId;
  }

  chronometer() {
    if (this.startchron == 1) {
      this.seconds += 1;
    }
    if (this.seconds > 59) {
      this.seconds = 0;
      this.mints += 1;
    }
    this.timerNow = `${this.mints} : ${this.seconds}`;
    document.getElementById('text-time').innerHTML = `${this.mints} : ${this.seconds}`;
  }

  startChr() {
    this.startchron = 1;
    this.chronometer();
    this.intervalId = setInterval(() => {
      this.chronometer();
    }, 1000);
  }

  pauseChr() {
    this.startchron = 0;
  }

  resetChr() {
    this.zecsec = 0;
    this.seconds = 0;
    this.mints = 0;
    this.startchron = 0;
    clearInterval(this.intervalId);
    //document.getElementById('text-time').innerHTML = this.mints + ' : ' + this.seconds;
  }

}