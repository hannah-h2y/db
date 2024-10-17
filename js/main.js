// main.js

//header scroll
const header = document.querySelector('header')

window.addEventListener('scroll', scrollEvent)
let lastScrollY = 0;
function scrollEvent(event){
   if(window.scrollY > lastScrollY){
      header.classList.add("hide")
   }else {
      header.classList.remove("hide")
   }
   lastScrollY = window.scrollY;
}

//header_main
$('.dep1').hover(function() {
   $('.header_bg').stop().slideDown('down');
   $('#header').addClass('bd');
   $('.dep2').stop().slideDown('on');
}, function() {
   $('.header_bg').stop().slideUp('down');
   $('#header').removeClass('bd');
   $('.dep2').stop().slideUp('on');
});
$('.dep1>li').hover(function() {
   n = $(this).index();
   $('.dep1>li>a').eq(n).css({
      'color' : '#00844A',
      'font-weight' : '700'
   });
}, function() {
   n = $(this).index();
   $('.dep1>li>a').eq(n).css({
      'color' : '#000',
      'font-weight' : '400'
   });
});
$('.lang_wrap button').click(function() {
   $(this).toggleClass('open');
   $('.lang_wrap ul').slideToggle('open');
});

//header_side
$('.side_menu_btn').click(function() {
   $('.side_menu_wrap').css({'display' : 'flex'});
   $(this).css({'display' : 'none'});
   $('html, body').css({'overflow':'hidden'});
});
$('.side_menu_close_btn').click(function() {
   $('.side_menu_wrap').css({'display' : 'none'});
   $('.side_menu_btn').css({'display' : 'flex'});
   $('html, body').css({'overflow':'auto'});
});
$('.side_dep1>li>a').click(function () {
   $('.side_menu_wrap .side_dep2').stop().slideUp();
   $(this).next().stop().slideToggle();
});
$('.side_dep1>li').hover(function () {
   n = $(this).index()
   $('.side_dep1>li>a').eq(n).css({
      'color' : '#00844A',
      'font-weight' : '600'
   })
}, function() {
   n = $(this).index()
   $('.side_dep1>li>a').eq(n).css({
      'color' : '#000',
      'font-weight' : '400'
   });
});
$('.side_menu_wrap .side_dep2>li>a').hover(function() {
   $(this).css({
      'text-decoration': 'underline',
      'text-underline-offset' : '3px',
      'font-weight' : '500'
   });
}, function() {
   $(this).css({
      'text-decoration': 'none',
      'font-weight' : '300',
   });
});
$('.side_lang_wrap button').click(function() {
   $(this).toggleClass('open');
   $('.side_lang_wrap ul').slideToggle('open');
});


//db_history
const missions = document.querySelectorAll(".db_mission");

const missionObserver = new IntersectionObserver((entries, observer) => {
   entries.forEach(entry => {
      if (entry.isIntersecting) {
         entry.target.classList.add('show');
      } else {
         entry.target.classList.remove('show');
      }
   });
}, { threshold: 0.3 });

missions.forEach(mission => {
   missionObserver.observe(mission);
});
const delays = document.querySelectorAll('.delay');

delays.forEach((delay) => {
   const delayTime = delay.getAttribute("data-delay");
   delay.style.animationDelay = `${delayTime}s`
})

//business
$(function() {
   function setupEvents() {
      if ($(window).width() > 500) {
         $('.b_item_bg').off('click').on('mouseover', function() {
            const n = $(this).index();
            $('.b_item_bg').eq(n).addClass('increase');
            $('.b_item_bg ul').eq(n).css({ 'display': 'flex' });
         }).on('mouseout', function() {
            const n = $(this).index();
            $('.b_item_bg').eq(n).removeClass('increase');
            $('.b_item_bg ul').eq(n).css({ 'display': 'none' });
         });
      } else {
         $('.b_item_bg').off('mouseover mouseout').on('click', function() {
            const n = $(this).index();
            $('.b_item_bg').not(this).each(function() {
               $(this).find('ul').css({ 'display': 'none' });
               $(this).css({ 'height': '33.33%' });
            });
            $('.b_item_bg ul').eq(n).css({ 'display': 'flex' });
            $('.b_item_bg').eq(n).css({ 'height': '500px' });
         });
      }
   }
   setupEvents();
   // 윈도우 리사이즈 이벤트
   $(window).resize(function() {
      setupEvents();
   });
});

//news
$('.news_tab_btns button').click(function() {
   n = $(this).index()
   $('.news_swiper').removeClass('select')
   $('.news_tab_btns button').not(this).removeClass('btn_color')
   $('.news_swiper').eq(n).addClass('select')
   $('.news_tab_btns button').eq(n).addClass('btn_color')
})

const newsSwiper = new Swiper('.news_swiper', {
   navigation: {
      nextEl: '.next',
      prevEl: '.prev',
   },
})


// csr
let a = $('.csr_item').innerHeight() - 66
$('.csr_item').hover(function() {
   $('.csr_item_text p').css({'display' : 'flex'})
   $(this).find('.csr_item_text').stop().animate({'top' : '30%', 'padding-top' : '50px'},500)
}, function() {
   $(this).find('.csr_item_text').stop().animate({'top' : a, 'padding-top' : '0'},500)
})

//familySite
$('.family_wrap button').click(function() {
   $(this).toggleClass('open');
   $('.family_wrap ul').slideToggle('open');
})

//section scroll
$(document).ready(function() {
   let $html = $("html");
   let $window = $(window);
   let page = 1;
   let lastPage = $("section").length;

   $html.animate({scrollTop: 0}, 10);

   const sectionHeight = $window.height();

   // 전체 스크롤
   $window.on("wheel", function(e) {
      if($html.is(":animated")) return;

      if(e.originalEvent.deltaY > 0) {
         if(page == lastPage) return;
         page++;
      } else if(e.originalEvent.deltaY < 0) {
         if(page == 1) return;
         page--;
      }

      var posTop = (page - 1) * sectionHeight;
      $html.animate({scrollTop: posTop});
   });

   // CSR 섹션 스크롤
   $(".csr_scroll").on("wheel", function(e) {
      e.stopPropagation();
      if ($(this).is(":animated")) return;

      if(e.originalEvent.deltaY > 0) {
         this.scrollTop += 30;
      } else if(e.originalEvent.deltaY < 0) {
         this.scrollTop -= 30;
      }
   });
});

