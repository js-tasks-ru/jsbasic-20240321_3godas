function initCarousel() {
  const carouselInner = document.querySelector('.carousel__inner');
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const offcetWidth = carouselInner.offsetWidth;

  let currentFrame = 0;

  function showButtons() {
    if (currentFrame === 0) {
      arrowLeft.style.display = 'none';
      arrowRight.style.display = '';

    } else if (currentFrame === 3) {
      arrowLeft.style.display = '';
      arrowRight.style.display = 'none';
    } else {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    }


  }

  showButtons();

  arrowLeft.addEventListener('click', function() {
    currentFrame--;
  
    carouselInner.style.transform = `translateX(-${currentFrame*offcetWidth}px)`;

    showButtons();
  });

  arrowRight.addEventListener('click',function() {
    currentFrame++;

    carouselInner.style.transform = `translateX(-${currentFrame*offcetWidth}px)`;

    showButtons();
  });


}
