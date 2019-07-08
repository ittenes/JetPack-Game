class Timer {

  constructor() {

    this.stmints = 0;
    this.stseconds = 0;

    this.seconds = 0;
    this.mints = 0;

    this.startchron = 0;
  }

  chronometer() {
    if (this.startchron == 1) {
      this.seconds += 1;
    }

    if (this.seconds > 59) {
      this.seconds = 0;
      this.mints += 1;
    }
    document.getElementById('text-time').innerHTML = `${this.mints} : ${this.seconds}`;


  }


  startChr() {
    this.startchron = 1;
    this.chronometer();
    setInterval(() => {
      this.chronometer();
    }, 100);
  }
  pauseChr() {
    this.startchron = 0;
  }
  resetChr() {
    this.zecsec = 0;
    this.seconds = 0;
    this.mints = 0;
    this.startchron = 0;
    document.getElementById('text-time').innerHTML = this.mints + ' : ' + this.seconds;
  }

}