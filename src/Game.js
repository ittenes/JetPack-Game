class Game {

  constructor(ctx, electrical) {
    this.ctx = ctx;
    this.collision = new Collisions()
    this.character = new Character(75, 600, );
    this.drawBackground = new DrawBackground(1300, 650);
    this.timerGame = new Timer();
    this.over = new GameOver();
    this.swithcRocketOnOff = 1; // on off rockets
    this.rockets = [];
    this.numRocket = 10;
    this.increaseRockets = 1.3;
    this.drawElectric = [];
    this.electrical = electrical;
    this.electricWalls = [];
    this.cointsPositions = coinsPositionsAll;
    this.coinsAll = [];
    this.coinsPoints = 0;
    this.keys = []
    this.statusNow;
    this.count = 0;
    this.lives = 18;
    this.crashValue = 0;
    this.intervalId;
    this.eventEnter = 0;
  }

  clearAll() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  startGame() {

    this.resetValuesInical();
    this.statusNow = "running";
    this.timerGame.startChr();
    this.getLives();
    this.statusGame();
    this.controlKeys();

    for (let i = 0; i < this.numRocket; i++) {
      this.rockets.push({
        id: this.rockets.length,
        lunchRocket: new Rocket(),
        statusRocket: 0,
        timer: Math.floor(Math.random() * 900) + 1
      })
    }
  }

  statusGame() {

    if (this.statusNow === "running") {
      //ROCKET RELOAD
      if (this.count % 900 == 0 && this.count !== 0) {
        //this.rockets = []
        this.numRocket = Math.round(this.numRocket * this.increaseRockets)
        if (this.numRocket > 20) {
          this.numRocket = 20
        }
        for (let i = 0; i < this.numRocket; i++) {
          this.rockets.push({
            id: this.rockets.length,
            lunchRocket: new Rocket(),
            statusRocket: 0,
            timer: Math.floor(Math.random() * ((this.count + 900) - this.count) + this.count)
          })
        }
      }
      //ROCKET ACTIVATION -   
      if (this.rockets.length !== 0) {
        this.rockets.forEach((e, i) => {
          if (e.timer == this.count) {
            this.rockets[i].statusRocket = this.swithcRocketOnOff;
          }
        });
      }
      this.updateGame();
    } else if (this.statusNow === "pause") {
      this.timerGame.pauseChr();
    } else if (this.statusNow === "gameover") {
      this.timerGame.pauseChr();
      this.overGame();
    }
  }

  updateGame() {

    this.clearAll();
    //DRAW THE BACKGROUND
    this.drawBackground.createInfinteBackround(this.ctx);

    //ELECTRIC && COLISION
    this.electricWalls = electrical;
    if (this.electricWalls.length !== 0) {
      this.electricWalls.forEach(e => {
        if (e.timer === this.count) {
          this.drawElectric.push(new DrawElectric(e.classElectric[0], e.classElectric[1], e.classElectric[2], e.classElectric[3], e.classElectric[4]))
        }
      });
    }
    //ctreate get the coin
    this.drawElectric.forEach(element => {
      element.createElectric(this.ctx)
      //ctreate elctrica y collision 
      let plataform = {
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h
      }
      let character = {
        x: this.character.x,
        y: this.character.y,
        w: this.character.widthObjet,
        h: this.character.heightObjet
      }
      this.collision.detectCollisionElement(plataform, character, this.ctx);

      if (element.x < -element.w) {
        this.drawElectric.shift();

      }
    });

    //COINS && GET THE COINS
    if (this.cointsPositions.length !== 0) {
      this.cointsPositions.forEach(e => {
        if (e.timer === this.count) {
          this.coinsAll.push(new DrawCoins(e.coin[0], e.coin[1], e.coin[2], e.coin[3]));
        }
      });
    }
    //ctreate get the coin
    this.coinsAll.forEach((element, index) => {
      element.createCoins(this.ctx)
      // colision with character
      let coin = {
        x: element.x,
        y: element.y,
        w: element.w,
        h: element.h
      }
      let character = {
        x: this.character.x,
        y: this.character.y,
        w: this.character.widthObjet,
        h: this.character.heightObjet
      }
      if (this.collision.detectCollisionElement(coin, character, this.ctx)) {
        this.coinsAll.splice(index, 1);
        this.coinsPoints++
        if (this.coinsPoints < 10) {
          document.getElementById("tex-score").innerHTML = `00${this.coinsPoints}`;
        } else if (this.coinsPoints >= 10 && this.coinsPoints < 100) {
          document.getElementById("tex-score").innerHTML = `0${this.coinsPoints}`;
        } else {
          document.getElementById("tex-score").innerHTML = `${this.coinsPoints}`;
        }
      };
      if (element.x < -element.w) {
        this.coinsAll.shift();
      }
    });

    //ROKETS && COLLISINN WITH CHARACTER - -- -- -- -
    if (this.rockets.length !== 0) {
      this.rockets.forEach((e) => {
        if (e.statusRocket) {
          e.lunchRocket.alertPlayer(this.character.y, this.ctx)

          //colision with character
          let rocket = {
            x: e.lunchRocket.x,
            y: e.lunchRocket.y,
            w: e.lunchRocket.w,
            h: e.lunchRocket.h
          }
          let character = {
            x: this.character.x,
            y: this.character.y,
            w: this.character.widthObjet,
            h: this.character.heightObjet
          }
          if (this.collision.detectCollisionRocket(rocket, character, this.ctx)) {
            this.lives--
            this.character.crash(this.ctx)
          };
          this.getLives()
          if (e.lunchRocket.xPosition < -10) {
            this.rockets.splice(e.id, 1);
          }
        }
      })
    }

    // DRAW THE CHARACTER ------------
    this.character.moveUpAndFall(this.ctx);

    //lOOP THE GAME -------------------
    if (this.lives <= 0) {
      this.statusNow = "gameover"
    }
    this.count++;
    this.intervalId = requestAnimationFrame(this.statusGame.bind(this));

  }

  pauseGame() {
    if (this.statusNow === "running") {
      this.statusNow = "pause"
    } else {
      this.statusNow = "running";
      this.statusGame();
      this.timerGame.startChr()

    }
  }
  overGame() {
    this.over.drawBG(this.ctx, this.coinsPoints, this.timerGame.mints, this.timerGame.seconds);
    this.timerGame.resetChr();
    cancelAnimationFrame(this.intervalId);
    this.eventEnter = 1;

    // document.body.addEventListener('keydown', e => {
    //   if (e.keyCode === 13 && this.eventEnter === 1) {
    //     this.resetValuesInical();
    //     this.clearAll()
    //     this.timerGame.resetChr();
    //     this.startGame();
    //     this.eventEnter = 0;
    //     console.log("TCL: Game -> overGame -> this.eventEnter", this.eventEnter)
    //   }

    // });

  }
  resetValuesInical() {
    //Timer
    this.timerGame.stmints = 0;
    this.timerGame.stseconds = 0;

    this.timerGame.seconds = 0;
    this.timerGame.mints = 0;

    this.timerGame.startchron = 0;
    // this values
    this.swithcRocketOnOff = 1; // on off rockets
    this.rockets = [];
    this.numRocket = 10;
    this.increaseRockets = 1.3;
    this.drawElectric = [];
    this.electrical = electrical;
    this.electricWalls = [];
    this.cointsPositions = coinsPositionsAll;
    this.coinsAll = [];
    this.coinsPoints = 0;
    this.keys = []
    this.statusNow;
    this.count = 0;
    this.lives = 18;
    this.crashValue = 0;
    this.intervalId;
    this.eventEnter = 0;


  }

  getLives() {
    let getLives01 = document.getElementById("live01");
    let getLives02 = document.getElementById("live02");
    let getLives03 = document.getElementById("live03");
    let getLives04 = document.getElementById("live04");
    let getLives05 = document.getElementById("live05");

    if (this.lives > 24) {
      getLives05.classList.remove("live-out")
      getLives04.classList.remove("live-out")
      getLives03.classList.remove("live-out")
      getLives02.classList.remove("live-out")
      getLives01.classList.remove("live-out")
    } else if (this.lives === 24) {
      getLives05.classList.add("live-out")
      getLives04.classList.remove("live-out")
      getLives03.classList.remove("live-out")
      getLives02.classList.remove("live-out")
      getLives01.classList.remove("live-out")
    } else if (this.lives === 18) {
      getLives04.classList.add("live-out")
      getLives03.classList.remove("live-out")
      getLives02.classList.remove("live-out")
      getLives01.classList.remove("live-out")
    } else if (this.lives === 12) {
      getLives03.classList.add("live-out")
      getLives02.classList.remove("live-out")
      getLives01.classList.remove("live-out")
    } else if (this.lives === 6) {
      getLives02.classList.add("live-out")
      getLives01.classList.remove("live-out")
    } else if (this.lives === 0) {
      getLives01.classList.add("live-out")
    }
  }

  addLives() {
    let getLives01 = document.getElementById("live01");
    let getLives02 = document.getElementById("live02");
    let getLives03 = document.getElementById("live03");
    let getLives04 = document.getElementById("live04");
    let getLives05 = document.getElementById("live04");
  }


  roketCreation() {

  }


  controlKeys() {
    // YOU MANGE DE KEY EVENT ---------------------------
    document.body.addEventListener("keydown", e =>
      this.character.keys[e.keyCode] = true);

    document.body.addEventListener("keyup", e =>
      this.character.keys[e.keyCode] = false);

    document.body.addEventListener("keydown", e => {
      if (e.keyCode === 32) {
        this.pauseGame();
      }

    })
  }


}