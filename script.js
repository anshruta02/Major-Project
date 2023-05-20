const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

let slideIndex = 0;
const slideWidth = slides[0].clientWidth;

// Set the initial position of the slides
slides.forEach((slide, index) => {
  slide.style.left = `${slideWidth * index}px`;
});

// Move the slides to the left or right
function slide(direction) {
  if (direction === 'next') {
    slideIndex++;
    if (slideIndex === slides.length) {
      slideIndex = 0;
    }
  } else if (direction === 'prev') {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
  }
  slideContainer.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

// Listen for button clicks
nextBtn.addEventListener('click', () => slide('next'));
prevBtn.addEventListener('click', () => slide('prev'));
