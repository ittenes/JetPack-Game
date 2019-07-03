class Collisions {
  
  constructor(ctx) {
    // this.rocket = rocket;
    // this.character = character;
    this.ctx = ctx;
  }

  detectCollisionRocket (rocket, character){
    this.rocket = rocket;
    this.character = character;
    console.log(this.rocket)
    console.log(this.character)
    
    if (this.rocket.x < this.character.x + this.character.w &&
      this.rocket.x + this.rocket.w > this.character.x &&
      this.rocket.y < this.character.y + this.character.h &&
      this.rocket.y + this.rocket.h > this.character.y) {
        //this.drow() // collision detected!
        alert("the rocket hit me!!!")

  }
}
  drow(){
    this.ctx.fillRect(600, 100, 400, 400);
    this.ctx.fillStyle = "#33FFD1" 
    alert("hola")
  }
}