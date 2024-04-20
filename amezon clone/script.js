const imgs = document.querySelectorAll('.header-slider ul img');
const controlPrev = document.querySelector('.control_prev');
const controlNext = document.querySelector('.control_next');
let n = 0;

function changeSlide() {
  // Hide all images
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = 'none';
  }
  // Show the current image
  imgs[n].style.display = 'block';
}

// Initial display setup
changeSlide();

controlPrev.addEventListener('click', () => {
  // Decrement n, and wrap around if necessary
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  // Update the slide
  changeSlide();
});

controlNext.addEventListener('click', () => {
  // Increment n, and wrap around if necessary
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  // Update the slide
  changeSlide();
});
const scrollContainers = document.querySelectorAll('.Products');
scrollContainers.forEach((container) => {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    });
});

