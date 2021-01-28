const carousel = document.querySelector('.carousel')
const slideShow = document.querySelector('.slide-show')
const slides = Array.from(slideShow.children)
const rightChevron = carousel.querySelector('.chevron-right')
const leftChevron = carousel.querySelector('.chevron-left')
const dotsNav = carousel.querySelector('.dots')
const dots = Array.from(dotsNav.children)

const calcSlideTransformLength = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width
    slides.forEach((slide, index) => slide.style.left = slideWidth * index + 'px')
} 

const currSlide = () => slideShow.querySelector('.current-slide')

const hideCurrSlide = () => {
    currSlide().classList.remove('current-slide')
    dotsNav.querySelector('.current-dot').classList.remove('current-dot')
}

const showTargetSlide = (slideIndex) => {

    if (slideIndex === slides.length) slideIndex = 0

    // if (slideIndex === 0) slideIndex = slides.length

    console.log(slideIndex);

    slides[slideIndex].classList.add('current-slide')
    console.log(slides[slideIndex]);

    dots[slideIndex].classList.add('current-dot')
    console.log(dots[slideIndex])
}

const displayNextSlide = (nextSlide) => {
    console.log(slideShow);
    slideShow.style.transform = 'translateX(-' + nextSlide.style.left + ')'
    hideCurrSlide()
    showTargetSlide(slides.findIndex(slide => nextSlide === slide))
}

document.addEventListener('DOMContentLoaded', () => calcSlideTransformLength(0))
rightChevron.addEventListener('click', () => displayNextSlide(currSlide().nextElementSibling))
leftChevron.addEventListener('click', () => displayNextSlide(currSlide().previousElementSibling))
dots.forEach((dot, index) => dot.addEventListener('click', () => displayNextSlide(slides[index])))

