let trilho = document.getElementById('trilho');
let header = document.querySelector('header');
let nav = document.querySelector('.nav-list');
let navItems = document.querySelectorAll('.nav-item');
let section = document.querySelector('section');
let cardsContainer = document.querySelector('.cards-container');
let card = document.querySelector('.card');
let atencao = document.querySelector('.atencao')
let comunicado = document.querySelector('.comunicado');
let footer = document.querySelector('footer');



trilho.addEventListener('click', ()=>{
    trilho.classList.toggle('dark')
    header.classList.toggle('dark')
    navItems.forEach(item => item.classList.toggle('dark'));
    section.classList.toggle('dark')
    cardsContainer.classList.toggle('dark')
    card.classList.toggle('dark')
    atencao.classList.toggle('dark')
    comunicado.classList.toggle('dark')
    footer.classList.toggle('dark')
})

$(document).ready(function(){
    $('#carrosel-imagens').slick({
        autoplay: true,
    })
});