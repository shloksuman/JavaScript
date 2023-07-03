// JavaScript code for smooth scrolling
document.addEventListener('DOMContentLoaded', function() {
    let scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true
    });
  });
  