const carouselList = document.querySelectorAll('.carousel')
carouselList.forEach(carousel=>{

    const track = carousel.querySelector('.track')
const slides = Array.from(track.children)
const nextButton = carousel.querySelector('.button-right')
const prevButton = carousel.querySelector('.button-left')
//adding class current-slide for the first element in array
slides[0].classList.add('current-slide')

const slideWidth = slides[0].getBoundingClientRect().width;


slides.forEach((slide,index)=>{
    slide.style.left = slideWidth * index + 'px';
})

nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide')
    let nextSlide
    if(currentSlide.nextElementSibling === null){
        nextSlide = track.firstElementChild
       
    }else{
        nextSlide = currentSlide.nextElementSibling
    }
    const amountToMove = nextSlide.style.left
    track.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current-slide')
    nextSlide.classList.add('current-slide')
})

prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current-slide')
    let prevSlide;

    if(currentSlide.previousElementSibling === null){
        prevSlide = track.lastElementChild
       
    }else{
        prevSlide = currentSlide.previousElementSibling
    }
    const amountToMove = prevSlide.style.left
    track.style.transform = `translateX(-${amountToMove})`
    currentSlide.classList.remove('current-slide')
    prevSlide.classList.add('current-slide')
})
})
