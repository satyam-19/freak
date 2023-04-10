const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');
if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}


var currentIndex = 1;

      //Show current image
      showSlides(currentIndex);

      //Function to move Next
      function plusSlides(n) {
         showSlides(currentIndex += n);
      }

      //Function to move back
      function currentSlide(n) {
         showSlides(currentIndex = n);
      }
      function showSlides(n) {
         var i;
         var slides = document.getElementsByClassName("images");
         var dots = document.getElementsByClassName("navigation-dot");
         if (n > slides.length) {currentIndex = 1}
         if (n < 1) {currentIndex = slides.length}
         for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
         }
         slides[currentIndex-1].style.display = "block";
         slides[currentIndex-1].style.transition = "1s" ;

      }
