document.addEventListener('DOMContentLoaded', () => {
    const sliderContainer = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const leftArrow = document.querySelector('.left-arrow');
    const rightArrow = document.querySelector('.right-arrow');

    let currentIndex = 0;
    let autoSlideInterval;

    function updateSlider() {
        sliderContainer.style.transform = `translateX(-${currentIndex * 50}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }

    function goToNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function goToPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlider();
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(goToNextSlide, 5000);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    rightArrow.addEventListener('click', () => {
        stopAutoSlide();
        goToNextSlide();
        startAutoSlide();
    });

    leftArrow.addEventListener('click', () => {
        stopAutoSlide();
        goToPrevSlide();
        startAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            stopAutoSlide();
            currentIndex = index;
            updateSlider();
            startAutoSlide();
        });
    });

    startAutoSlide();
});