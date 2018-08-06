//animate scroll
$(".menu__list").on("click","a", function (event) {
  //отменяем стандартную обработку нажатия по ссылке
  event.preventDefault();
  //забираем идентификатор блока с атрибута href
  var id  = $(this).attr('href'),
  //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
  //animating scroll on distance - top
  $('body,html').animate({scrollTop: top}, 400);
});

//menu change style function
var lastScrollTop = 0;
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st<70){
    $('.menu').removeClass('menu_active');
  }
  else{
    $('.menu').addClass('menu_active');
  }
  $('.menu_min_active').attr("class", "col-sm-12 menu_min");
  $('.main-menu_dark').attr("class", "main-menu");
  $('.menu__list__btn i').attr("class", "fa fa-bars");
  if ((st > lastScrollTop)&(st > $('.main-section').height())){
    $('.main-menu').css({"transition":"transform 0.5s ease-in-out","transform":"translateY(-6.5rem)"});
  }
    else{
      $('.main-menu').css({"transition":"transform 0.5s ease-in-out","transform":"translateY(0px)"});
    }
  lastScrollTop = st;
});
//minimize menu function
var mmb = $('.menu__list__btn');
var menu_min = $('.menu_min');
mmb.on('click', function(event) {
  $('.menu__list__btn i').toggleClass('fa-times fa-bars');
  menu_min.toggleClass('menu_min_active');
  $('.main-menu').toggleClass('main-menu_dark');
});

$(document).ready(function($) {
  //portfolio button function
  var portfolioBtn = $('.portfolio-button');
	portfolioBtn.on('click', function(event) {
    var min_h = $('.portfolio__content').css("height");
    if($(this).html() == "More"){
    $('.portfolio__content').attr('style', 'height: auto;');
    portfolioBtn.html('Hide');}
    else{
      $('.portfolio__content').attr('style', 'height: '+min_h+'px;');
      portfolioBtn.html('More');
    }
  });
  //form inputs show/hide function
  $('.label-input input').keyup(function() {
    if($(this).val().length > 0){
      $(this).closest('.label-input input').addClass('filled');
    }
    else{
      $(this).closest('.label-input input').removeClass('filled');
    }
  });
  /*MaskedInput initialization*/
  jQuery(function($){$("#phone").mask("+7 (999) 999-99-99");});
  jQuery(function($){$("#call_phone").mask("+7 (999) 999-99-99");});
});

//call & portfolio popup variables
var call = $('.call');
var call_form = $('.call__form');
var call_form_i = $('.call__form__i');
var popup = $('.popup');
var p_win = $('.portfolio-active');
var pm_img = $('.data-portfolio-active-img');
popup.attr('style', 'visibility: hidden;');
//call popup function
$('.call-btn').on('click', function(event) {
  event.preventDefault();
    document.body.style.overflow = 'hidden';
    call.attr('style', 'visibility: visible;');
    call_form.attr('style', 'visibility: none;');
    call_form_i.attr('style', 'visibility: none;');
  });
$('.call-close-btn').on('click', function(event) {
  event.preventDefault();
    document.body.style.overflow = 'scroll';
    call.attr('style', 'visibility: hidden;');
    call_form.attr('style', 'visibility: hidden;');
    call_form_i.attr('style', 'visibility: hidden;');
});
//portfolio popup function
$('.portfolio__content__item').on('click', function(event) {
  event.preventDefault();
  var item = $(this).data('item');
  var pi_h5 = $('[data-portfolio="'+item+'"] h5').html();
  var pi_p = $('[data-portfolio="'+item+'"] p').html();
  var pi_span = $('[data-portfolio="'+item+'"] span').html();
  p_win.attr('style', 'visibility: visible;');
  document.body.style.overflow = 'hidden';
  $('.portfolio-active__window__content__description h5').html(pi_h5);
  $('.portfolio-active__window__content__description p').html(pi_p);
  $('.portfolio-active__window__content__description span').html(pi_span);
  if(item == "4" ){
    pm_img.attr('src','img/portfolio/portfolio_max_'+item+'.gif');
  }
  else { pm_img.attr('src','img/portfolio/portfolio_max_'+item+'.jpg'); };
});
$('.portfolio-active__window__close-btn').on('click', function(event) {
  event.preventDefault();
  p_win.attr('style', 'visibility: hidden;');
  document.body.style.overflow = 'scroll';
  pm_img.attr('src','');
  $('.portfolio-active__window__content__description h5').html('');
  $('.portfolio-active__window__content__description p').html('');
  $('.portfolio-active__window__content__description span').html('');
});