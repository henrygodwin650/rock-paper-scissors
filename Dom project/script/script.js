let buttonElement = document.querySelector('.js-button');

console.log (buttonElement.classList.contains('js-button'))

function gameMaster () {
 const gamePower = document.querySelector('.js-game-button');

    if (gamePower.classList.contains('is-toggled')) {
    gamePower.classList.add('is-untoggled');
    } else {
    gamePower.classList.add('is-toggled');
    }
}

    function spongeGame() {
        
        let commonGame = document.querySelector('.js-tech-button');
    
    if (commonGame.classList.contains('is-toggled') === commonGame.classList.contains('is-toggled')){
        commonGame.classList.toggle('is-untoggled');
    } else {
        commonGame.classList.add('is-toggled');
    }

    }

    function musicGame () {
        
    let commonGame = document.querySelector('.js-music-button');

    if (commonGame.classList.contains('is-toggled') === commonGame.classList.contains('is-toggled')){
      commonGame.classList.toggle('is-untoggled');
    } else {
      commonGame.classList.add('is-toggled');
    }
    }

    function gamingGame () {
        
    let commonGame = document.querySelector('.js-game1-button');

    if (commonGame.classList.contains('is-toggled') === commonGame.classList.contains('is-toggled')){
      commonGame.classList.toggle('is-untoggled');
    } else if(classList.contains('is-untoggled')){
      commonGame.classList.add('is-toggled');
    }
    }

    function miniGame () {
    let cornGame = document.querySelector('.js-game2-button');
    let musicGame1 = document.querySelector('.js-music1-button');
    let techGame1 = document.querySelector('.js-tech1-button');

        
    if (miniGame === cornGame){
          commonGame.classList.toggle('is-untoggled');
    } else if (miniGame === musicGame1) {
        commonGame.classList.add('is-toggled');
    } else if (miniGame === techGame1) {
     techGame1.classList.toggle('is-untoggled')
    }
        }