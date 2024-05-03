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
