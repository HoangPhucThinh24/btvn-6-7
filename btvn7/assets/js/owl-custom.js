$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
      loop: true, 
      margin: 12, 
      nav:  false,
      dots : true , 
      autoplay : true,
      autoplayTimeout :2000, 
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    })
  
  })