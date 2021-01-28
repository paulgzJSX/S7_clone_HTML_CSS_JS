
const purchaseControlMenu = document.querySelector('.purchase-control')
const purchaseControlLink = document.querySelector('.purchase-control-link')

const s7PriorityMenu = document.querySelector('.s7-priority')
const s7PriorityLink = document.querySelector('.s7-priority-link')

const toTravellersLink = document.querySelector('.to-travellers-link')
const toTravellersMenu = document.querySelector('.to-travellers')

const header = document.querySelector('header')
const overlay = document.querySelector('.overlay')

const menus = document.querySelectorAll('.menu-item')


function toggleMenu(link, menuItem) {
    link.addEventListener('click', () => {
        if (!menuItem.classList.contains('show')) {
            menus.forEach(menu => {
                menu.classList.remove('show')
                overlay.classList.remove('show')
            })
        }
        menuItem.classList.toggle('show')
        overlay.classList.toggle('show')
        window.addEventListener('click', (e) => {
            if (!menuItem.contains(e.target) && !header.contains(e.target)) {
                menuItem.classList.remove('show')
                overlay.classList.remove('show')
            }
        })
    })
}

toggleMenu(purchaseControlLink, purchaseControlMenu)
toggleMenu(s7PriorityLink, s7PriorityMenu)
toggleMenu(toTravellersLink, toTravellersMenu)


// Carousel Slide Effect

const carousel = document.querySelector('.carousel')
const rightChevron = carousel.querySelector('.chevron-right')
const leftChevron = carousel.querySelector('.chevron-left')
const slideShow = carousel.querySelector('.slide-show')
const slides = carousel.querySelectorAll('.slide')
const dots = carousel.querySelectorAll('.dot')
const extraSlide = carousel.querySelector('.extra-slide')

let slideIndex = 0

console.log(slides);

const resetSlides = () => slides.forEach(slide => slide.style.display = 'none')
const resetDots = () => dots.forEach(dot => dot.classList.remove('active'))
const displaySlide = (slideIndex) => slides[slideIndex].style.display = 'block'
const displayDot = (slideIndex) =>  dots[slideIndex].classList.add('active')
const moveToFirstSlide = () => slideIndex = 0
const moveToLastSlide = () => slideIndex = slides.length - 1

const runAnimation = (timeout) => {
    interval = setInterval(() => {
        changeSlide(slideIndex += 1)
    }, timeout);
}

const stopAnimation = () => clearInterval(interval)

const changeSlide = (nextSlide) => {
    resetSlides()
    resetDots()
    if (nextSlide === slides.length) moveToFirstSlide() // if the last slide, display the 1st next
    if (nextSlide < 0) moveToLastSlide() // if the 1st slide, display the last next
    displaySlide(slideIndex)
    displayDot(slideIndex)
}

document.addEventListener('DOMContentLoaded', () => runAnimation(4000))
slideShow.addEventListener('mouseover', () => stopAnimation())
slideShow.addEventListener('mouseout', () => runAnimation(4000))
slideShow.addEventListener('click', (e) => console.log(e.target))

dots.forEach((dot, index) => dot.addEventListener('click', () => {
    stopAnimation()
    changeSlide(slideIndex = index)
}))
// rightChevron.addEventListener('click', () => {
//     stopAnimation()
//     changeSlide(slideIndex += 1)
// })


rightChevron.addEventListener('click', (e) => {
    stopAnimation()
    const currentSlide = slideShow.querySelector('.current-slide')
    console.log(currentSlide);

    let nextSlide = currentSlide.nextElementSibling
    console.log(nextSlide);

    slideShow.


    // slides[currSlide].style.transform = 'translateX(-100%)'
    // slides[nextSlide].style.transform = 'translateX(-100%)'
    // slides[2].style.transform = 'translateX(-100%)'
    // slides[3].style.transform = 'translateX(-100%)'
    // slides[4].style.transform = 'translateX(-100%)'
})

leftChevron.addEventListener('click', () => {
    stopAnimation()
    changeSlide(slideIndex -= 1)
})



// Tab delimeters display

const inputPurchase = document.querySelector('.tab-input-purchase')
const checkIn = document.querySelector('.tab-input-check')
const myBookings = document.querySelector('.tab-input-my-bookings')
const flightStatus = document.querySelector('.tab-input-flight-status')

const delimeter1 = document.querySelector('.delimeter-1')
const delimeter2 = document.querySelector('.delimeter-2')
const delimeter3 = document.querySelector('.delimeter-3')


document.addEventListener('DOMContentLoaded', () => {
    delimeter1.hidden = true
    delimeter2.hidden = false
    delimeter3.hidden = false
})

inputPurchase.addEventListener('click', () => {
    delimeter1.hidden = true
    delimeter2.hidden = false
    delimeter3.hidden = false
})

checkIn.addEventListener('click', () => {
    delimeter1.hidden = true
    delimeter2.hidden = true
    delimeter3.hidden = false
})

myBookings.addEventListener('click', () => {
    delimeter1.hidden = false
    delimeter2.hidden = true
    delimeter3.hidden = true
})

flightStatus.addEventListener('click', () => {
    delimeter1.hidden = false
    delimeter2.hidden = false
    delimeter3.hidden = true
})


