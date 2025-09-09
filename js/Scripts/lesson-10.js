      function gameButton (){
        const music2 = document.querySelector('.js-gaming');
        if(!music2.classList.contains('is-toggled')) {
          music2.classList.add('is-toggled');
        } else {
          music2.classList.remove('is-toggled');
        };
      }

      function musicButton(){
        const music1 = document.querySelector('.js-music');
        if(!music1.classList.contains('is-toggled')) {
          music1.classList.add('is-toggled');
        } else {
          music1.classList.remove('is-toggled');
        };
      }

      function techButton (){
        const music = document.querySelector('.js-tech');
        if(!music.classList.contains('is-toggled')) {
          music.classList.add('is-toggled');
        } else {
          music.classList.remove('is-toggled');
        };
      }

     function butTon(){
      const jsButton = document.querySelector('.js-button');
      if(jsButton.classList.contains('js-button')){
      console.log('Yes');
      }
     }