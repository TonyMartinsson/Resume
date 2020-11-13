window.addEventListener('load', main);

function main() {
    getAnimatedLines();
    getTextFadeIn();
}

function getAnimatedLines() {
  window.addEventListener('scroll', function(event) {
      let scrolled = this.scrollY;
      
      let lineOne = document.getElementById('lineOne');
      let lineTwo = document.getElementById('lineTwo');
      let lineThree = document.getElementById('lineThree');
      let lineFour = document.getElementById('lineFour');
      let lineFive = document.getElementById('lineFive');
      let lineSix = document.getElementById('lineSix');
      let lineSeven = document.getElementById('lineSeven');
      let lineEight = document.getElementById('lineEight');
      let lineNine = document.getElementById('lineNine');
      
      if(scrolled > lineOne.offsetTop - window.innerHeight /2) {
        lineOne.style.height = '100%';
      }
      
      if(scrolled > lineTwo.offsetTop - window.innerHeight /2) {
        lineTwo.style.height = '100%';
      }
      
      if(scrolled > lineThree.offsetTop - window.innerHeight /2) {
        lineThree.style.height = '100%';
      }
      
      if(scrolled > lineFour.offsetTop - window.innerHeight /2) {
        lineFour.style.height = '100%';
      }
      
      if(scrolled > lineFive.offsetTop - window.innerHeight /2) {
        lineFive.style.height = '100%';
      }
      
      if(scrolled > lineSix.offsetTop - window.innerHeight /2) {
        lineSix.style.height = '100%';
      }
      
      if(scrolled > lineSeven.offsetTop - window.innerHeight /2) {
        lineSeven.style.height = '100%';
      }
      
      if(scrolled > lineEight.offsetTop - window.innerHeight /2) {
        lineEight.style.height = '100%';
      }
      
      if(scrolled > lineNine.offsetTop - window.innerHeight /2) {
        lineNine.style.height = '100%';
      }
    });
}

function getTextFadeIn () {
  
  $(function(){  // $(document).ready shorthand
    $('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
      
      /* Every time the window is scrolled ... */
      $(window).scroll( function(){
      
          /* Check the location of each desired element */
          $('.textFadeIn').each( function(i){
              
              var bottom_of_object = $(this).position().top + $(this).outerHeight();
              var bottom_of_window = $(window).scrollTop() + $(window).height();
              
              /* If the object is completely visible in the window, fade it it */
              if( bottom_of_window > bottom_of_object ){
                  
                  $(this).animate({'opacity':'1'},1500);
                      
              }
              
          }); 
      
      });
      
  });
}