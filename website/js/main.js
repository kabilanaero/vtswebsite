const slidesContainer = document.querySelector('.carousel-slides');
let currentIndex = 0;
const slides = document.querySelectorAll('.item');
const totalSlides = slides.length;

function moveToSlide(n) {
    slidesContainer.style.transform = 'translateX(' + (-n * 100) + '%)';
    currentIndex = n;
}

document.querySelector('.nav-prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        moveToSlide(currentIndex - 1);
    } else {
        moveToSlide(totalSlides - 1);
    }
});

document.querySelector('.nav-next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        moveToSlide(currentIndex + 1);
    } else {
        moveToSlide(0);
    }
});

setInterval(() => {
    moveToSlide((currentIndex + 1) % totalSlides);
}, 2000); 


const slider = document.querySelector('.testimonials-slider');
const testimonials = document.querySelectorAll('.testimonial-item');
const dotsContainer = document.querySelector('.dots');

let currentSlide = 0;
let autoSlideInterval;

testimonials.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dot.addEventListener('click', () => changeSlide(i));
});

const updateDots = (index) => {
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
};

const changeSlide = (index) => {
    clearInterval(autoSlideInterval);
    slider.scrollTo({
        left: index * slider.offsetWidth,
        behavior: 'smooth'
    });
    currentSlide = index;
    updateDots(index);
    startAutoSlide();
};

const startAutoSlide = () => {
    autoSlideInterval = setInterval(() => {
        let nextSlide = currentSlide + 1 >= testimonials.length ? 0 : currentSlide + 1;
        changeSlide(nextSlide);
    }, 3000);
};

updateDots(0); 
startAutoSlide(); 

document.getElementById('hamburger').addEventListener('click', function() {
  document.querySelector('.nav-links').classList.toggle('active');
});

