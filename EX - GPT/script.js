// Seleciona o ícone e o menu
const hamburgerIcon = document.getElementById('hamburger-icon');
const menu = document.getElementById('menu');

// Função para alternar a visibilidade do menu
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
