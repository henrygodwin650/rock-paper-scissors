      let score = JSON.parse(localStorage.getItem('score')) || {
          wins: 0,
          losses: 0,
          ties: 0
        };

        updatescoreElement();

/*
      if (!score){
        score = {
          wins: 0,
          losses: 0,
          ties: 0
        }
      }
        */

      let isAutoPlaying = false;
      let intervalId;

      function autoPlay(){
        if (!isAutoPlaying){
          intervalId = setInterval(() => {
            const playerMove = pickComputerMove();
            playGame(playerMove);
          }, 1000);
          isAutoPlaying = true;
          document.querySelector('.js-auto-play-button').innerHTML='Stop playing';
        } else {
          clearInterval(intervalId);
          isAutoPlaying = false;
          document.querySelector('.js-auto-play-button').innerHTML= 'Auto play';
        }
      }

      document.querySelector('.js-rock-button').addEventListener('click', () => {
        playGame('rock');
      });

      document.querySelector('.js-paper-button').addEventListener('click', () => {
        playGame('paper');
      });

      document.querySelector('.js-scissors-button').addEventListener('click', () => {
        playGame('scissors');
      });

      document.querySelector('.js-auto-play-button').addEventListener('click', () => {
        autoPlay();
      });

      document.querySelector('.js-reset-button').addEventListener('click', ()=>{
        scoreMessage();
      });

      document.body.addEventListener('keydown', (event) => {
        if (event.key === 'r'){
          playGame('rock');
        } else if(event.key === 'p'){
          playGame('paper');
        } else if(event.key === 's'){
          playGame('scissors');
        } else if (event.key === 'Backspace'){
          scoreMessage();
        }
      })

      function scoreMessage() {
        document.querySelector('.js-reset-message').innerHTML = html;       
      }

      function realScore(){
        if(document.querySelector('.js-message-button')){
          score.wins = 0;
          score.ties = 0;
          score.losses = 0;
          localStorage.removeItem('score');
          updatescoreElement();
          setTimeout(()=>{
           document.querySelector('.js-reset-message').innerHTML='';
          }, 1000);
        }
      }

      const html = `
        <p class="js-reset-message">
         Are you sure you want to reset the score?
         <button class="js-message-button" onclick="
          realScore();
         ">Yes</button>
         <button class="js-no-button" onclick="
          setTimeout(() => {
           document.querySelector('.js-reset-message').innerHTML=''
          }, 1000);
         ">No</button>
        </p>
        `;

      function playGame (playerMove){
        const computerMove = pickComputerMove();
        let result = '';

        if(playerMove === 'scissors'){
          if(computerMove === 'rock'){
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You Win.'
          } else if (computerMove === 'scissors') {
            result = ' Tie.'
          }
        } else if (playerMove === 'paper'){
            if(computerMove === 'rock'){
              result = 'You Win.';
            } else if (computerMove === 'paper') {
              result = 'Tie.'
            } else if (computerMove === 'scissors') {
              result = 'You lose'
            }
         } else if (playerMove === 'rock') {
            if (computerMove === 'rock'){
              result = 'Tie.';
            } else if (computerMove === 'paper') {
              result = 'You lose.'
            } else if (computerMove === 'scissors') {
              result = 'You Win.'
            }
         }

         if (result === 'You Win.'){
          score.wins += 1;
         } else if (result === 'You lose.'){
          score.losses += 1;
         } else if (result === 'Tie.') {
          score.ties += 1;
         }

         localStorage.setItem('score', JSON.stringify(score));

         updatescoreElement();

         document.querySelector('.js-result').innerHTML = result;
        
         document.querySelector('.js-moves').innerHTML = `You
      <img src="/images/${playerMove}-emoji.png" class="move-icon">
      <img src="/images/${computerMove}-emoji.png" class="move-icon">
      computer`;
   }

      function updatescoreElement(){
      document.querySelector('.js-score').innerHTML =  `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
      }
     
      function pickComputerMove() {
        const randomNumber = Math.random();
        let computerMove = '';

        if (randomNumber >= 0 && randomNumber< 1/3) {
          computerMove = 'rock';
        } else if (randomNumber >=1/3 && randomNumber < 2/3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2/3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }