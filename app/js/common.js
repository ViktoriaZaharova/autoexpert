$('.attention-slider').slick({
    slidesToShow: 1,
    fade: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-left"></use></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="svg-icon"><use xlink:href="img/sprite.svg#arrow-right"></use></svg></button>',
    responsive: [
        {
            breakpoint: 576,
            settings: {
                arrows: false
            }
        }
    ]
});


$('.btn-burger').on('click', function () {
   $('.mobile-menu').fadeToggle();
});

$('.mobile-menu__close').on('click', function () {
    $('.mobile-menu').fadeOut();
});

$('.td-mobile-toggle').on('click', function () {
    var
        $this = $(this),
        content = $(this).siblings('td');

    if(!$this.hasClass('trigger')){
        $this.addClass('trigger');

        content.css('display', 'flex');
    } else {
        $this.removeClass('trigger');

        content.css('display', 'none');
    }
});