
//Alerta botão visualizar projeto
function mostraralerta (){
    alert ('botao clicado');
}


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        const targetElement = document.querySelector(targetID);
        if (targetElement) {
          const targetPosition = targetElement.offsetTop;
          smoothScrollTo(targetPosition, 1200); // ajuste a duração como quiser
        }
      });
    });
  
    function smoothScrollTo(targetY, duration) {
      const startY = window.scrollY;
      const distanceY = targetY - startY;
      let startTime = null;
  
      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = timeElapsed / duration;
        const ease = easeInOutQuad(progress > 1 ? 1 : progress);
        window.scrollTo(0, startY + distanceY * ease);
        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      }
  
      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
  
      requestAnimationFrame(animation);
    }
  });
  



/*Movimenta o carrosel 
let index = 0;  // Índice do card visível
const carrossel = document.querySelector('.carrossel');
const totalCards = document.querySelectorAll('.Card-Projeto').length;  // Conta o total de cards

Função para mover o carrossel
function moverCarrossel(direcao) {
    index += direcao;  // Atualiza o índice baseado na direção

    // Se o índice for menor que 0, vai para o último card
    if (index < 0) {
        index = totalCards - 1;
    }

    // Se o índice for maior ou igual ao número de cards, vai para o primeiro card
    if (index >= totalCards) {
        index = 0;
    }

    // Calcula o deslocamento com base no tamanho do card
    const deslocamento = -index * 320;  // 320px é o tamanho do card + margem
    carrossel.style.transform = `translateX(${deslocamento}px)`;  // Move o carrossel
}
*/