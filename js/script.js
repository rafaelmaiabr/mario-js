
document.addEventListener('DOMContentLoaded', () => {
  const mario = document.querySelector('.mario');
  const pipe = document.querySelector('.pipe');
  
  const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
      mario.classList.remove('jump');
    }, 500);
  }
  


  const loop = setInterval(() => {
    console.log('loop');
    // Verifica posição do Pipe
    const pipePosition = pipe.offsetLeft;
    // + converte para número
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    // Verifica se o Pipe está na posição 0
    if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {

      pipe.style.animation = 'none';
      pipe.style.left = `${pipePosition}px`;

      mario.style.animation = 'none';
      mario.style.bottom = `${marioPosition}px`;

      // Game Over
      mario.src = 'images/game-over.png';
      mario.style.width = '75px';
      mario.style.marginLeft = '50px';
      

      clearInterval(loop);
      
    }
  
    console.log(marioPosition);
  
  },10);

  document.addEventListener('keydown', jump);

});

