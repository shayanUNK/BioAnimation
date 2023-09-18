// Get references to the elements
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');
const header = document.querySelector('header');

// Add scroll event listener
window.addEventListener('scroll', function() {
  // Get the current scroll position
  let value = window.scrollY;
  
  // Update element styles based on scroll position
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginRight = value * 4 + 'px';
  text.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
  header.style.top = value * 0.5 + 'px';
});





/*
inspiration
https://cz.pinterest.com/pin/830703093790696716/
*/

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  spaceBetween: 30,
  centeredSlides: false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 0,
    modifier: 1,
    slideShadows: false
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  breakpoints: {
    460: {
      slidesPerView: 3
    },
    768: {
      slidesPerView: 3
    },
    1024: {
      slidesPerView: 3
    },
    1600: {
      slidesPerView: 3.6
    }
  }
});

// change title

let docTitle = document.title;
window.addEventListener("blur" , () => {
  document.title= "تروخدا برگرد :(";

});
window.addEventListener("focus" , () => {
  document.title = "خوش برگشتی";
})

// new page
document.getElementById("openButton").addEventListener("click", function() {
  window.open("bio.html", "_blank");
});


// new page
document.getElementById("openButtton").addEventListener("click", function() {
  window.open("bioShayan.html", "_blank");
});


// new page
document.getElementById("openBudon").addEventListener("click", function() {
  window.open("bioParia.html", "_blank");
});


// new page
document.getElementById("openFudon").addEventListener("click", function() {
  window.open("bioMohammadreza.html", "_blank");
});





