    // const progress = document.querySelector('.progress__done')

    // setTimeout(() => {
    //     progress.style.width = progress.getAttribute('data-done') + '%'; 
    //     progress.style.opacity = 1;
    // }, 500)

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     var dots = document.getElementsByClassName("mySlides");

//     if (n >slides.length) {
//         slideIndex = 1
//     }
//     if  (n < 1) {
//         slideIndex=slides.length
//     }
//     for (i=0; i <slides.lenght ; i++) {
//         slides[i].sthyle.display= "none"
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className= dots[i].className.replace("active", "");
//     }
//     slides[slideIndex-1].style.display = "block";
//     dots[slideIndex-1].className+= "active"; 
// }
// $('.fade').slick({
//     dots: true,
//     infinite: true,
//     speed: 500,
//     fade: true,
//     cssEase: 'linear'
//   });
// Burger
    $(document).ready(function() {
        $('.header__burger').click(function(event) {
            $('.header__float, .header__burger').toggleClass('active');
            $('body').toggleClass('overflow-hidden')
        })
    });
// Slider
    $('.autor__row').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        arrows: false,
    }
    );
// Scroll fun
    $(document).ready(function(){
        $(window).scroll(function(){
            if(this.scrollY > 300) {
                $('.scroll__up-btn').addClass("show");
            }else {
                $('.scroll__up-btn').removeClass("show");
            }
        })
    })

// Slide UP

    $('.scroll__up-btn').click(function(){
        $('html').animate({scrollTop: 0})
    });

// Typing animation script

    var typed = new Typed(".typing", {
      strings: ["Design", "Develop", "Create", "Do"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
    })