$('.burguer, .overplay').click(function() {
    $('.burguer').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});