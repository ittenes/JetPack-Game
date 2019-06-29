# JetPack-Game
it's a copy of the famous game JetPack

## MVP (DOM - CANVAS)
### GENERAL	
* MVP 
     * Screen Start
        * Play button
     * Screen Game
        * Pause / Go
        * Score
     * Screen game over
        * Re-start Button
* N2H
    * Lives
        * 3 live
    * Fases
    * 3 scenes for Fase


 ### BACKGROUND
* MVP
    * Ceiling
    * Ground
    * Go forward 
* N2H
    * Go forward with different backgrounds and velocity 
    * The backgrounds have different designs for different levels.
    * The speed is proportional to the playing time

 ### PLAYBILITY
* MPV
    * Get coins 
    * 1 coin = 1 point
    * If there are lasers, there are not electrical hurdle and rockets
    * Max 5 rockets at the same time
    * Max 3 electrical hurdles at the same time
    * Max 6 lasers at the same time
    
* N2H
    * Get element live 
        * Add a extra live
        * You can get more live until 5
    * Get super coint
        * Add 25 points 
    * Get go forward fast
        * Jump to the new fase
    * Get 2 different armor
        * Transform the character ability

 ### CHARACTER 01 Basic
* MPV
    * Run only if he is on the ground 
    * Fly if push the button
    * He use the rocket when is flying 
    * He have a little acceleration when pus the button
    * If you don’t push the button fly he fall down same velocity 
* N2H
    * He have a little acceleration when push the button
    * The rocket shoot to the bad guys
    * Death Animation 
    *  CHARACTER 02 Head down N2H
        * Run only if he is on the ground 
        * Run in the ceiling
        * Push the button fly chage the position Ground to Ceiling/Ceiling to Ground
        * You can press button fly at any time of the way between the Ground to Ceiling and change the dirección 
    *  CHARACTER 03 Robot N2H
        * He runs only if he is on the ground 
        * He flies very slowy if push the button fly
        * If you don’t push the button fly he fall down fast
        * Kill the badguy when you are hit the ground.

 ### BAD GUY
* MPV
    * Run over the ground
    * Run everywhere and direction
* N2H
    * If you are shooting they try run away
    * Death Animation 

 ### ELEMENT >> ROCKET 
* MPV
    * they cross the screen
    * If it touches the character it kills it
* N2H
    * you can see a alert where the rocket will come from
    * The alert follows your position a few seconds

 ### ELEMENTO >> ELECTRICAL HURDLE
* MPV
    * Fixed element 
    * if the character touch it, he die
* N2H
     * It moves like a clock

 ### ELEMENT >> LASER
* N2H
   * They can came por diferent side of the screen
   * when get the correct possition - turns on
   * if the character touch it, he die


## Data structure

### class Game
    ScreenSplash
    PlayGame
    StopGame
    PauseGame
    GameOver

### class ScreenSplash
    goToPlay
        PlayGame
    goToHowToPlay

### class PlayGame
    startBackground
        ElementBackground
    startCharacter
        ElementCharacter
    startEnemy
        ElementEnemy
    startRocket
        ElementRocket
    startElectricHurdle
        ElementElectricHurdle
    startLaser
        ElementLaser 
    startScore
    startBigCoin
    startCoin
    startLive
    startTimeLoop

### class StopGame
    stopGame
    playTheGame

### class PauseGame
    puseGame
    restartGame
    
### class ElementBackground
    defineCeiling
    defineGround
    defineBackground
    moveBackgound
    
### class ElementCharacter
    run
    flyUp
    flyDown
    shoot
    death 
    getObjets

### class ElementEnemy
    run
    changedirection 
    runAway
    death

### class ElementRocket
    move
    followTheCharacter
    warnThePosition
    hitTheCharacter
    
### class ElementElectricHurdle
    turnClockwise
     hitTheCharacter

### class  ElementLaser 
    Move
    TurnOn
    TurnOff
    hitTheCharacter
    
### class ObjetCoin
    move
    addScore
    
### class ObjetBigCoin
    move
    addScore
    
### class ObjetArmor
    move
    changeElemntCharacter
    

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen


## Task
Task definition in order of priority


## Links


### Trello
[Link url](https://trello.com/b/TK9kau1r/jetpack-game)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[Link Slides.com](https://slides.com/antoniorivera-1/jetpack-game)
