document.addEventListener('DOMContentLoaded', function() {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let scrollAmount = 0;
    const cardWidth = 332 + 20; // Largura do card + margem (20px)

    prevBtn.addEventListener('click', () => {
        scrollAmount -= cardWidth;
        if (scrollAmount < 0) {
            scrollAmount = 0; // Impede de rolar além do primeiro card
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        scrollAmount += cardWidth;
        if (scrollAmount > carousel.scrollWidth - carousel.clientWidth) {
            scrollAmount = carousel.scrollWidth - carousel.clientWidth; // Impede de rolar além do último card
        }
        carousel.scrollTo({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
});
