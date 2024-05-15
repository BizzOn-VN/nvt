'use strict';

/* HELPER: Checks Whether an Element Exists
----------------------------------------------------------------------------------------------------*/
(function( $ ) {

  $.fn.extend({
    exists: function() {
      if ( this.length > 0 ) {
        return true;
      } else {
        return false;
      }
    }
  });

})( jQuery );



jQuery(document).on("ready",function () {
	
});

$('.ui.dropdown')
  .dropdown()
;
$('.ui.checkbox').checkbox();
$(".dr-down").click(function(){
	$(".top-header .right-ct .inner .item .menu").removeClass("active");
	$(this).parent(".item").find(".menu").toggleClass("active");
})
$(document).mouseup(function(e) 
{
    var container = $(".dr-down");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".top-header .right-ct .inner .item .menu").removeClass("active");
    }
});
$(".searchButton").click(function(){
  $(this).parent(".blk-search").find(".searchTerm").toggleClass("active");
})
$(document).mouseup(function(e) 
{
    var container = $(".blk-search");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
      $(".searchTerm").removeClass("active");
    }
});
$(".icon-menu").click(function(){
  $(".main-menu").addClass("active");
})
$(".main-menu .inner .icon-close").click(function(){
  $(".main-menu").removeClass("active");
})





//home

// $('.sl-home-banner .owl-theme').owlCarousel({
//     stagePadding: 0,
//     loop:false,
//     margin:0,
//     nav:false,
//     items:2,
//     responsive : {
//         // breakpoint from 0 up
//         0 : {
//            items:2
//         },
//         // breakpoint from 480 up
//         480 : {
//            items:2
//         },
//         // breakpoint from 768 up
//         768 : {
//             items:2
//         }
//     }
// })
$('.sl-home-banner .owl-carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

$('.slider-ncc').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:4
        },
        768:{
            items:5
        }
    }
})

$(' .ui.dropdown')
  .dropdown({
    // allowAdditions: true
  })
;
$( function() {
    $( "#date-pk" ).datepicker();
  } );
$('.slider-shop').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:2
        },
        768:{
            items:4
        }
    }
})
// $('.slider-l').owlCarousel({
//     loop:true,
//     margin:0,
//     nav:false,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }    
//  }) 

$(document).ready(function() {

  var slider1 = $("#slider1");
  var slider2 = $("#slider2");
  var slidesPerPage = 4;
  var syncedSecondary = true;
  slider1.owlCarousel({
    items : 1,
    slideSpeed : 2000,
    nav: false,
    autoplay: false,
    dots: false,
    loop: true,
    responsiveRefreshRate : 200,
    onInitialized: counter,
      onChanged: counter
    
  }).on('changed.owl.carousel', syncPosition);

  slider2
    .on('initialized.owl.carousel', function () {
      slider2.find(".owl-item").eq(0).addClass("current");
    })
    .owlCarousel({
    items : 4,
    dots: false,
    nav: true,
    smartSpeed: 200,
    slideSpeed : 500,
    slideBy: 1, 
    responsiveRefreshRate : 100
  }).on('changed.owl.carousel', syncPosition2);

  function syncPosition(el) {
    var count = el.item.count-1;
    var current = Math.round(el.item.index - (el.item.count/2) - .5);
    
    if(current < 0) {
      current = count;
    }
    if(current > count) {
      current = 0;
    }
    
    //end block

    slider2
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = slider2.find('.owl-item.active').length - 1;
    var start = slider2.find('.owl-item.active').first().index();
    var end = slider2.find('.owl-item.active').last().index();
    
    if (current > end) {
      slider2.data('owl.carousel').to(current, 100, true);
    }
    if (current < start) {
      slider2.data('owl.carousel').to(current - onscreen, 100, true);
    }
  }
  
  function syncPosition2(el) {
    if(syncedSecondary) {
      var number = el.item.index;
      slider1.data('owl.carousel').to(number, 100, true);
    }
  }
  
  slider2.on("click", ".owl-item", function(e){
    e.preventDefault();
    var number = $(this).index();
    slider1.data('owl.carousel').to(number, 300, true);
  });
});

function counter(event) {
    // alert("a");
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  $('.number-items').text(slides.relative(slides.current()) + 1 + '/' + slides.items().length);
  // console.log(slides.relative(slides.current())+1);

}

// $("#popup-success").fancybox({
//    clickSlide: true, // disable close on outside click
//     touch: true, // disable close on swipe
//      clickContent    : true,


// }).trigger('click');
// jQuery.fancybox.defaults.touch = true;
// $("#popup-success").on("show", function () {
//   $("body").addClass("modal-open");
// }).on("hidden", function () {
//   $("body").removeClass("modal-open")
// });

function open_popup(){
  $("#popup-success").addClass("show");
  $("body").addClass("modal-open");
  if ($("#popup-success").is(':visible')) { 
    
  }else{
     $("body").removeClass("modal-open");
  }
}
open_popup();


$(".toggle-password").click(function() {

  $(this).toggleClass("show");
  var input = $($(this).attr("toggle"));
  if (input.attr("type") == "password") {
    input.attr("type", "text");
  } else {
    input.attr("type", "password");
  }
});
function set_height_blk_dang_ky(){
  var height=$(window).height()-$(".page-header").outerHeight();
  $(".blk-dang-ky .inner").css("height",height);
}
set_height_blk_dang_ky();

$(window).resize(function(){
  set_height_blk_dang_ky();
  if(window.screen.width<992){
    $(".srl-form").mCustomScrollbar('destroy');
  }else{
    $(".srl-form").mCustomScrollbar();
  }
});
if(window.screen.width<992){
  $(".srl-form").mCustomScrollbar('destroy');
}else{
  $(".srl-form").mCustomScrollbar();
}

const chooseFile = document.getElementById("choose-file");
const imgPreview = document.getElementById("img-preview");

chooseFile.addEventListener("change", function () {
  getImgData();
});

function getImgData() {
  const files = chooseFile.files[0];
  if (files) {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(files);
    fileReader.addEventListener("load", function () {
      imgPreview.style.display = "block";
      imgPreview.innerHTML = '<img src="' + this.result + '" />';
    });    
  }
}
