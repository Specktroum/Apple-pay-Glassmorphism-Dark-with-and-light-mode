document.addEventListener("DOMContentLoaded", function() {
     console.log('click in the btn top right of the screen!')
   
     let btn = document.querySelector('.dark-light-mode-btn');
   
     btn.addEventListener('click', function(){
       document.body.classList.toggle('light');
       document.querySelector('.phone-container').classList.toggle('light');
     });
   
   });