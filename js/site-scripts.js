
$(document).ready(function() {
  let navHeight = $('.nav').height();
  let sections = $('.section');

      $('.nav__link[href^="#"]').on('click', function (ev) {
        ev.preventDefault();
        
        let id = $(this).attr('href');
        let offsetTop = ($(id).offset().top > 0) ? $(id).offset().top - navHeight : $(id).offset().top;
        // $('.nav__link').removeClass('nav__link--active');
        // $(this).addClass('nav__link--active');
        $('html, body').animate({
          scrollTop: offsetTop
        }, 500);

      });
     
      $(document).on('scroll', function (ev) {
        let scrollPoint = $(this).scrollTop(); // сколько мы проскролили

        sections.each(function () {
          let offsetTop = ($(this).offset().top > 0) ? $(this).offset().top - navHeight - 1 : $(this).offset().top; // позицию секции относительно верха документа
          if (scrollPoint > offsetTop) { // проскролили ли мы больше, чем позиция секции
            let id = $(this).attr('id'); // получаем id этой секции 

            $('.nav__link').removeClass('nav__link--active'); // забрали у всех классы
            $(`.nav__link[href="#${id}"]`).toggleClass('nav__link--active'); // даем активный класс ссылке, у которой в href лежит id секции
             
          } 
          
        });

      });

});

$(document).ready(function() {
    // $("html,body").scrollTop("0");
    let hash = window.location.hash;
    hash =  $(".nav__link--active").click(); 
});

$(window).scroll(function(){
  if ($(this).scrollTop() > 600) {
    $('.ui-to-top').fadeIn();
  } 
  else {
    $('.ui-to-top').fadeOut();
  }
});
       
    $('.ui-to-top').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
});