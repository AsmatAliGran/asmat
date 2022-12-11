    $('.brands').slick({
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplayspeed: 2000,
        speed: 400,
        rtl:true,
        slidesToShow: 8,
        slidesToScroll: 1,
        nextArrow: '<span class="slick-next-arrow"><i class="bi bi-arrow-right-short"></i></span>',
        prevArrow: '<span class="slick-prev-arrow"><i class="bi bi-arrow-left-short"></i></span>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 920,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    $(".product-gallery").slick({
      vertical: true,
      centerMode: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: '<div class="arrow-area"><span class="slick-next-arrow previous"><i class="bi bi-arrow-down-short"></i></span></div>',
      prevArrow: '<div class="arrow-area"><span class="slick-prev-arrow next"><i class="bi bi-arrow-up-short"></i></span></div>',
    });

    $('.offer-slider').slick({
      infinite: true,
      speed: 100,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 9,
      slidesToScroll: 1,
      nextArrow: '<span class="slick-next-arrow slider-btn"><i class="bi bi-arrow-right-short"></i></span>',
      prevArrow: '<span class="slick-prev-arrow slider-btn"><i class="bi bi-arrow-left-short"></i></span>',
      responsive: [{
              breakpoint: 1024,
              settings: {
                  slidesToShow: 6,
                  slidesToScroll: 1,
                  infinite: true,
              }
          },
          {
              breakpoint: 600,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          },
          {
              breakpoint: 480,
              settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1
              }
          }
      ]
  });
