const botaoTema = document.getElementById('tema__botao');

botaoTema.addEventListener('click',trocaTema);

function trocaTema () {
    corBody();
    trocaCabecalho();
    trocaPadroesFundo();
    trocaMenuMobile();
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
    menuLinks.forEach(n=> n.classList.toggle('menu__link-dark-mode'))
}