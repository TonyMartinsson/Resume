window.addEventListener('load', main);

function main() {
    getAnimatedLines();
}

function getAnimatedLines() {
    window.addEventListener('scroll', function(event) {
        let scrolled = this.scrollY;
        
        if(scrolled > 100) {
          let lineOne = document.getElementById('lineOne');
          lineOne.style.height = '100%';
        }
        if(scrolled > 1400) {
          let lineTwo = document.getElementById('lineTwo');
          lineTwo.style.height = '100%';
        }
        if(scrolled > 2500) {
          let lineThree = document.getElementById('lineThree');
          lineThree.style.height = '100%';
        }
        if(scrolled > 3600) {
          let lineFour = document.getElementById('lineFour');
          lineFour.style.height = '100%';
        }
        if(scrolled > 4600) {
          let lineFive = document.getElementById('lineFive');
          lineFive.style.height = '100%';
        }
        if(scrolled > 5800) {
          let lineSix = document.getElementById('lineSix');
          lineSix.style.height = '100%';
        }
        if(scrolled > 7100) {
          let lineSeven = document.getElementById('lineSeven');
          lineSeven.style.height = '100%';
        }
        if(scrolled > 8200) {
          let lineEight = document.getElementById('lineEight');
          lineEight.style.height = '100%';
        }
        if(scrolled > 9300) {
          let lineNine = document.getElementById('lineNine');
          lineNine.style.height = '100%';
        }
      });
}