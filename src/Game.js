class Game {

  constructor(ctx) {
    this.ctx = ctx;
    this.collision = new Collisions()
    this.character = new Character(100, 600, );
    this.drowBackground = new DrowBackground(800, 600);
    this.drowElectric = new DrowElectric();
    this.swithcRocketOnOff = 0; // on off rockets
    this.rockets = [];
    this.numRocket = 10;
    this.increaseRockets = 1.3;
    this.statusNow;
    //this.electric = new DrowElectric(100, 300, 200, ctx)
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

    //this.electric.createElectric()
    this.statusGame();


  }

  statusGame() {

    if (this.statusNow === "running") {

      //ROCKET RELOAD
      if (this.count % 900 == 0 && this.count !== 0) {
        this.rockets = []
        this.numRocket = Math.round(this.numRocket * this.increaseRockets)
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

    this.drowBackground.createInfinteBackround(this.ctx);

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

    this.drowElectric.createElectric(400, 600, -4, this.ctx);
    this.count++;

    requestAnimationFrame(() => this.statusGame());

  }

  controlKeys() {
    // YOU MANGE DE KEY EVENT ---------------------------
    document.body.addEventListener("keydown", e =>
      this.character.keys[e.keyCode] = true);

    document.body.addEventListener("keyup", e =>
      this.character.keys[e.keyCode] = false);
  }


}