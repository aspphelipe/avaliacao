// Inicialização do Swiper para o carrossel de depoimentos
const testimonialSwiper = new Swiper('.testimonial-slider', {
    // Mostra apenas 1 slide por vez
    slidesPerView: 1,
    
    // Ativa o loop infinito
    loop: true,
    
    // Adiciona navegação por setas
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Configurações de autoplay (opcional)
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // Efeito de transição suave
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // Ativa navegação por toque para mobile
    touchEventsTarget: 'container',
    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,
});