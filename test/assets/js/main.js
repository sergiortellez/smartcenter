var $carousel = $('.carousel').flickity();

$('.button--show').on('click', function () {
    // show
    $carousel.show()
        // trigger resize method after showing
        .flickity('resize');
});