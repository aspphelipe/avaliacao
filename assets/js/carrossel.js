// Carrossel
const thumbs = document.querySelectorAll('.thumb');
const mainImages = document.querySelectorAll('.main-image');

thumbs.forEach(thumb => {
    thumb.addEventListener('click', function() {
        thumbs.forEach(t => t.classList.remove('active'));
        mainImages.forEach(img => img.classList.remove('active'));
        
        const index = this.getAttribute('data-index');
        this.classList.add('active');
        mainImages[index].classList.add('active');
    });
});