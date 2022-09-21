function tamanhoTela() {
    var telaLargura = window.screen.width
    if(telaLargura <= 930){
        var slides = 1
    }else{
        slides = 3}

    var swiper = new Swiper('.swiper', {
        slidesPerView: slides,  
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
       },
    
        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
}

tamanhoTela();

window.addEventListener('resize', tamanhoTela);
