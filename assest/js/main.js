const counterElements = document.querySelectorAll(".counter_element");
const statisticsContainer = document.querySelector(".statistic");
const nav = document.querySelector(".nav");
const big_title = document.querySelector(".big_title");
const header_word = document.querySelector(".header-word");
const success = document.querySelector(".success .success-text p");


nav.classList.add("animation-navbar");
header_word.classList.add("animation-header");

window.onscroll = function(){
    if(window.scrollY  > big_title.offsetTop){
        counter();
    }

}


// start count when hit the statistics container
function counter (){
    const initailValues = [0 , 0, 0];
    const finalValues = [25, 10, 5];
    
        counterElements.forEach((counterElement, index) => {
            const startValue = initailValues[index];
            const endValue = finalValues[index];
            const steps = endValue - startValue;
            let currentStep = 0;
        
            const counter = setInterval(() => {
                currentStep++;
                counterElement.innerText = startValue + currentStep + "+";
        
                // Stop the interval when the final value is reached
                if (currentStep >= steps) {
                    clearInterval(counter);
                }
            }, 1000);
        });
}

// create swiper
const swiper = new Swiper('.swiper',{
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  
})

// start maginfic popup

$(document).ready(function() {
	$('.image-popup-vertical-fit').magnificPopup({
		type: 'iframe',
		closeOnContentClick: true,
		mainClass: 'mfp-img-mobile',
		iframe:{
            patterns: {
                youtube: {
                  index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
            
                  id: 'v=', // String that splits URL in a two parts, second part should be %id%
                  // Or null - full URL will be returned
                  // Or a function that should return %id%, for example:
                  // id: function(url) { return 'parsed id'; }
            
                  src: 'https://www.youtube.com/embed/oSshylcryPQ?si=JqzXZxZjwlQHybFs' // URL that will be set as a source for iframe.
                },
              },
            
              srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
            
        }
		
	});
});