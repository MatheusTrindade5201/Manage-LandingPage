const botaoTema = document.getElementById('tema__botao');

botaoTema.addEventListener('click',trocaTema);

function trocaTema () {
    corBody();
    trocaCabecalho();
    trocaPadroesFundo();
    trocaMenuMobile();
    trocaTitulos();
    trocaTextos();
    estilizaCards();
    trocaBotoes();
    estilizaSobre();
}

function corBody () {
    const pagina = document.getElementById('pagina');
    pagina.classList.toggle('dark__theme-body');
}

function trocaCabecalho () {
    const imagemCabecalho = document.getElementById('imagemCabecalho');
    if(botaoTema.checked){
        imagemCabecalho.setAttribute('src','images/logo-branco.svg')
    }else{
        imagemCabecalho.setAttribute('src','images/logo.svg')
    }
}

function trocaPadroesFundo () {
    const secaoSup = document.getElementById('secao__superior');
    const secaoMid = document.getElementById('secao__meio');
    const introBg = document.getElementById('intro__bg');

    secaoSup.classList.toggle('secao__superior-dark-mode');
    secaoMid.classList.toggle('secao__meio-dark-mode');
    introBg.classList.toggle('intro__bg-dark-mode')
}

function trocaMenuMobile () {
    const menuMobile = document.querySelector('.cabecalho__menu-mobile');
    const menuLinks = document.querySelectorAll('.menu__link');
    menuMobile.classList.toggle('cabecalho__menu-mobile-dark-mode');
    menuLinks.forEach(n => n.classList.toggle('menu__link-dark-mode'))
}

function trocaTitulos () {
    const titulos = document.querySelectorAll('.titulo');
    titulos.forEach(n => n.classList.toggle('titulo-dark-mode'));
}

function trocaTextos () {
    const textos = document.querySelectorAll('.texto');
    textos.forEach(n => n.classList.toggle('texto-dark-mode'))
}

function estilizaCards () {
    const cards = document.querySelectorAll('.depoimentos__carrossel__item');
    const nomes = document.querySelectorAll('.depoimento__item-nome');
    cards.forEach(n => n.classList.toggle('depoimentos__carrossel__item-dark-mode'));
    nomes.forEach(n => n.classList.toggle('depoimento__item-nome-dark-mode'))
}

function trocaBotoes () {
    const botoes = document.querySelectorAll('.botao');
    botoes.forEach(n => n.classList.toggle('botao-dark-mode'))
}

function estilizaSobre () {
    const tituloSobre = document.querySelectorAll('.item__titulo');
    tituloSobre.forEach(n => n.classList.toggle('item__titulo-dark-mode'))
}