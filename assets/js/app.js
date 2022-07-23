$(".hamburgerOpenBtn").click(function () {
  $(".hamburgerMenu").css({
    right: 0,
    transition: ".4s",
  });
});

$(".hamburgerCloseBtn").click(function () {
  $(".hamburgerMenu").css({
    right: "-150%",
    transition: ".4s",
  });
});

$('.gallery').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:5
      }
  }
})


/* playlist */
