
//Alerta botão visualizar projeto
function mostraralerta (){
    alert ('botao clicado');
}

//movimenta o carrosel 
let index = 0;  // Índice do card visível
const carrossel = document.querySelector('.carrossel');
const totalCards = document.querySelectorAll('.Card-Projeto').length;  // Conta o total de cards

// Função para mover o carrossel
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
