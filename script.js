$(document).ready(function() {
 // Sponser tags carousel
 $(".sponser-tags").slick({
    speed: 8000,
    autoplay: true,
    autoplaySpeed: 0,
    centerMode: false,
    cssEase: 'linear',
    slidesToShow: 5,
    draggable:false,
    focusOnSelect:false,
    pauseOnFocus:false,
    pauseOnHover:false,
    slidesToScroll: 1,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
});
  
    // Testimonial slider
    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
  
    // Team slider
    $('.team-carousel').slick({
        autoplay: true,
        autoplaySpeed: 1000,
        speed: 600,
        draggable: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
  
    // Sticky header with class toggle
    let lastScrollTop = 0;
    const header = document.getElementById('home');
    const innerHeader = document.querySelector('.inner-header');
  
    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            header.style.top = '-60px'; // Adjust based on the header height
            innerHeader.classList.add('header-appear');
        } else {
            header.style.top = '0';
            innerHeader.classList.remove('header-appear');
        }
        lastScrollTop = scrollTop;
    });
  
    // Side menu toggle
    const sideMenuBtn = document.getElementById('sidemenu_toggle');
    const sideMenu = document.querySelector('.side-menu');
  
    sideMenuBtn.addEventListener('click', () => {
        if (sideMenu.classList.contains('side-menu-opacity')) {
            sideMenu.classList.remove('side-menu-opacity');
            sideMenu.classList.add('side-menu-active');
        } else {
            sideMenu.classList.remove('side-menu-active');
            sideMenu.classList.add('side-menu-opacity');
        }
    });
  
    // Adding functionality for closing side menu
    const btnSideNavClose = document.getElementById('btn_sideNavClose');
  
    btnSideNavClose.addEventListener('click', () => {
        sideMenu.classList.add('side-menu-opacity');
        sideMenu.classList.remove('side-menu-active');
    });


    $('.faq-question').click(function() {
        var $answer = $(this).next('.faq-answer');
        
        // Toggle the clicked answer
        $answer.slideToggle();
        
        // Toggle the icon
        $(this).find('.toggle-icon').text(function(_, text) {
            return text === '+' ? '-' : '+';
        });
        
        // Close other answers
        $('.faq-answer').not($answer).slideUp();
        $('.faq-question').not($(this)).find('.toggle-icon').text('+');
    });
  });
