
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:1,
        autoplay:true,
        loop:true,
        dots:false,
        nav:true,
        autoplayHoverPause:true,
        navText:["<i class='fas fa-arrow-left'></i><i class='fas fa-arrow-right'></i>"]


    });
      $('.owl-carousel').owlCarousel({
          items:1,
          autoplay:false,
          loop:true,
          dots:true,
          nav:true
  
      });
      $('.product-list').masonry({
        
      });
      $('.menu-trigger').on('click',function(){
        $('.off-canvas-menu,.off-canvas-overlay').addClass('active');
        return false;
      });
      $('.menu-close,.off-canvas-overlay').on('click',function(){
        $('.off-canvas-menu,.off-canvas-overlay').removeClass('active');
      });
  });

    // (document).ready(function($){
    //     $('.owl-carousel').owlCarouse({
    //         items:3,
    //         margin:30,
    //         nav:false,
    //         dots:true,
    //         loop:true


    //     });
    // });
    