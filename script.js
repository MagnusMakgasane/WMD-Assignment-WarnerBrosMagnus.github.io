

let slideIndex = 0;

function moveSlides(direction) {
  const slideWrapper = document.querySelector('.slide-wrapper');
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].querySelector('video').offsetWidth;
  
  // Pause all videos
  const videos = document.querySelectorAll(".slide-video");
  videos.forEach(video => {
    video.pause();
  });

  slideIndex += direction;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  slideWrapper.style.transform = `translateX(-${slideIndex * slideWidth}px)`;

  // Play the video in the current slide
  const currentSlide = slides[slideIndex];
  const currentVideo = currentSlide.querySelector(".slide-video");
  currentVideo.muted = false;
  currentVideo.play();
}

function playVideo(button) {
  const slide = button.parentElement;
  const video = slide.querySelector(".slide-video");

  if (video.paused) {
    video.muted = false;
    video.play();
    button.innerText = "Pause";
  } else {
    video.pause();
    button.innerText = "Play";
  }
}
// Get references to the button and the navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav');

// Add a click event listener to the button
navToggle.addEventListener('click', function() {
  // Toggle the "active" class on the button
  navToggle.classList.toggle('active');

  // Toggle the "visible" class on the navigation menu
  navMenu.classList.toggle('visible');
});
function toggleNav() {
    var nav = document.querySelector('nav');
    if (nav.style.display === 'block') {
      nav.style.display = 'none';
    } else {
      nav.style.display = 'block';
    }
  }
  

          
          