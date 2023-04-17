const container = document.querySelector(".container");
const card = document.querySelector(".card");
const layer1 = document.querySelector(".layer1");
const layer2 = document.querySelector(".layer2");
const title = document.querySelector(".title");

//card rotate on mouse move
container.addEventListener("mousemove", (rotate) => {
        let x = (innerWidth / 2 - rotate.pageX) / 15;
        let y = (innerHeight / 2 - rotate.pageY) / 15;
        
        card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
});

//card effects on mouse over the card
container.addEventListener("mouseover", () => {
        layer1.style.transform = "translate3d(0, 0, 25px)";
        layer2.style.transform = "translate3d(0, 0, 50px)";
        title.style.transform = "translate3d(0, 0, 75px)";
        card.style.transition = "all 0.1s ease";
});

//card back to normal when mouse out
container.addEventListener("mouseout", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg)";
        card.style.transition = "all 0.5s ease";
        layer1.style.transform = "translate3d(0, 0, 0)";
        layer2.style.transform = "translate3d(0, 0, 0)";
        title.style.transform = "translate3d(0, 0, 0)";
});

window.onscroll = function() {myFunction()};

function myFunction() {
  about = document.querySelector(".about-carousel");
  historyCarousel = document.querySelector('.history-carousel');
  basicCarouselUpper = document.querySelector('.basics-carousel-upper');
  basicCarouselLower = document.querySelector('.basics-carousel-lower');


  console.log(document.documentElement.scrollTop);

  about.style.transition = "0.8s";
  historyCarousel.style.transition = "0.8s";
  basicCarouselUpper.style.transition = "0.8s";
  basicCarouselLower.style.transition = "0.8s";


  if (document.documentElement.scrollTop < 1500) {
        about.style.transform = "translateX(0)";
  } else if (document.documentElement.scrollTop < 3500) {
        about.style.transform = "translateX(-100vw)";
  } else if (document.documentElement.scrollTop < 5500) {
        about.style.transform = "translateX(-200vw)";
  }

  if (document.documentElement.scrollTop < 8500) {
        basicCarouselUpper.style.transform = "translateX(0)";
        basicCarouselLower.style.transform = "translateX(-1100vw)";
  } else if (document.documentElement.scrollTop < 10500) {
        basicCarouselUpper.style.transform = "translateX(-110vw)";
        basicCarouselLower.style.transform = "translateX(-990vw)";
  } else if (document.documentElement.scrollTop < 12500) {
        basicCarouselUpper.style.transform = "translateX(-220vw)";
        basicCarouselLower.style.transform = "translateX(-880vw)";
  } else if (document.documentElement.scrollTop < 14500) {
        basicCarouselUpper.style.transform = "translateX(-330vw)";
        basicCarouselLower.style.transform = "translateX(-770vw)";
  } else if (document.documentElement.scrollTop < 16500) {
        basicCarouselUpper.style.transform = "translateX(-440vw)";
        basicCarouselLower.style.transform = "translateX(-660vw)";
  } else if (document.documentElement.scrollTop < 18500) {
        basicCarouselUpper.style.transform = "translateX(-550vw)";
        basicCarouselLower.style.transform = "translateX(-550vw)";
  } else if (document.documentElement.scrollTop < 20500) {
        basicCarouselUpper.style.transform = "translateX(-660vw)";
        basicCarouselLower.style.transform = "translateX(-440vw)";
  } else if (document.documentElement.scrollTop < 22500) {
        basicCarouselUpper.style.transform = "translateX(-770vw)";
        basicCarouselLower.style.transform = "translateX(-330vw)";
  } else if (document.documentElement.scrollTop < 24500) {
        basicCarouselUpper.style.transform = "translateX(-880vw)";
        basicCarouselLower.style.transform = "translateX(-220vw)";
  } else if (document.documentElement.scrollTop < 26500) {
        basicCarouselUpper.style.transform = "translateX(-990vw)";
        basicCarouselLower.style.transform = "translateX(-110vw)";
  } else if (document.documentElement.scrollTop < 28500) {
        basicCarouselUpper.style.transform = "translateX(-1100vw)";
        basicCarouselLower.style.transform = "translateX(0)";
  }
  
  if (document.documentElement.scrollTop < 30500) {
        historyCarousel.style.transform = "translateX(0)";
  } else if (document.documentElement.scrollTop < 32500) {
        historyCarousel.style.transform = "translateX(-90vw)";
  } else if (document.documentElement.scrollTop < 34500) {
        historyCarousel.style.transform = "translateX(-180vw)";
  } else if (document.documentElement.scrollTop < 36500) {
        historyCarousel.style.transform = "translateX(-270vw)";
  } else if (document.documentElement.scrollTop < 38500) {
        historyCarousel.style.transform = "translateX(-360vw)";
  } else if (document.documentElement.scrollTop < 40500) {
        historyCarousel.style.transform = "translateX(-450vw)";
  }

}