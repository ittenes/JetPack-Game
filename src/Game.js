class Game {

  constructor(ctx, electrical) {
    this.ctx = ctx;
    this.collision = new Collisions()
    this.character = new Character(75, 600, );
    this.drawBackground = new DrawBackground(1300, 650);
    this.timerGame = new Timer();
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
  }

  clearAll() {
    this.ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  startGame() {

    for (let i = 0; i < this.numRocket; i++) {
      this.rockets.push({
        id: this.rockets.length,
        lunchRocket: new Rocket(),
        statusRocket: 0,
        timer: Math.floor(Math.random() * 900) + 1
      })
    }

    this.statusNow = "running"
    this.statusGame();
    this.timerGame.startChr()



  }

  statusGame() {

    if (this.statusNow === "running") {

      //ROCKET RELOAD
      if (this.count % 900 == 0 && this.count !== 0) {
        this.rockets = []
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
    }
  }

  updateGame() {

    this.clearAll();

    this.controlKeys();

    this.drawBackground.createInfinteBackround(this.ctx);

    // CHARACTER ------------
    this.character.moveUpAndFall(this.ctx);

    //ROKETS && COLLISINN WITH CHARACTER - -- -- -- -
    if (this.rockets.length !== 0) {
      this.rockets.forEach((e) => {
        if (e.statusRocket) {
          e.lunchRocket.alertPlayer(this.character.y, this.ctx)

          //colision with character
          let rocket = {
            x: e.lunchRocket.xPosition,
            y: e.lunchRocket.yPosition,
            w: e.lunchRocket.width,
            h: e.lunchRocket.height
          }
          let character = {
            x: this.character.x,
            y: this.character.y,
            w: this.character.widthObjet,
            h: this.character.heightObjet
          }
          this.collision.detectCollisionRocket(rocket, character, this.ctx);

          if (e.lunchRocket.xPosition < -10) {
            this.rockets.splice(e.id, 1);
          }
        }
      })
    }


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
      this.collision.detectCollisionRocket(plataform, character, this.ctx);

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
      if (this.collision.detectCollisionRocket(coin, character, this.ctx)) {
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

    this.count++;


    requestAnimationFrame(() => this.statusGame());

  }
  controlKeys() {
    // YOU MANGE DE KEY EVENT ---------------------------
    document.body.addEventListener("keydown", e =>
      this.character.keys[e.keyCode] = true);

    document.body.addEventListener("keyup", e =>
      this.character.keys[e.keyCode] = false);

    document.body.addEventListener("keydown", e => {

      // this.keys[e.keyCode] = true
      // console.log("he pulsado" + e.keyCode)
    })
  }


}