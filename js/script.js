// ===== TYPING ======================================
if ($(".text-slider").length == 1) {
  var typed_strings = $(".text-slider-items").text();
  var typed = new Typed(".text-slider", {
    strings: typed_strings.split(","),
    typeSpeed: 50,
    loop: true,
    backDelay: 900,
    backSpeed: 50,
  });
}
AOS.init();
// ======== NAVBAR ===========================

let aboutOffset = $("#about").offset().top;
let upBtn = $("#upBtn");

$(window).scroll(() => {
  let windowScroll = $(window).scrollTop();
  upBtn.css("display", "block");

  if (windowScroll > aboutOffset - 50) {
    $("nav.navbar").css("cssText", "background-color :rgba(0,0,0,.8) !important");
  } else {
    $("nav.navbar").css("cssText", "background-color : transperant");
    upBtn.css("display", "none");
  }
});

// ====== nav anchor ==================
let navAnchor = $("#navbarSupportedContent > ul > li > a");
let navbarHome = $('.navbar-brand');



navAnchor.click(function (e) {
  let secHref = $(e.target).attr("href");
  let secOffset = $(secHref).offset().top;
  
  $("html , body").animate({ scrollTop: secOffset }, 100);

$(e.target).css({color:'#0078ff' } );
$(e.target).parent().siblings().children().css({color:'#fff'})
});

navbarHome.click(()=>{
  $('html , body').animate({scrollTop:0} , 100);
  navAnchor.css({color:'#fff'});
  })

// ===== SCROLL TOP================

upBtn.click(()=>{
$('html , body').animate({scrollTop:0} , 100)
});