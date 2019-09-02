$(document).ready(function(){
  $(window).scroll(function(event){
    if (document.documentElement.scrollTop > 400) {
        $('#scroll-top').fadeIn(400);
        $('#sticky-right-bar').fadeIn(400);
    }
    else {
        $('#scroll-top').fadeOut(400);
        $('#sticky-right-bar').fadeOut(400);
    }
    // console.log(document.documentElement.scrollTop)
  });
  $('#to-top').click(function(e){
    e.preventDefault();
    $("html, body").animate({
        scrollTop: 0
    }, 1000);
  })
  $('#online-acc').click(function(e){
    e.preventDefault();
    $("#online-access ul").toggleClass("display","block");
  })
  $('#eResource a').hover(function(e){
    $('#eResource a').attr("title","visit site");
  })
  $('#toggle-btn').click(function(e){
    e.preventDefault();
    $('#navbarResponsive').slideToggle('collapse');
  })
  $('.link').click(function(){
    $('#navbarResponsive').slideToggle('collapse');
  })
  $('.close').hover(function(){
    $(this).attr('title','close');
  })

  $('#poster-btn').click(function(){
    $('#poster-div').removeClass("hidden");
    $('#essay-div').addClass("hidden");
    $('#quiz-div').addClass("hidden");
    $('#shelfie-div').addClass("hidden");
  });
  $('#essay-btn').click(function(){
    $('#essay-div').removeClass("hidden");
    $('#poster-div').addClass("hidden");
    $('#quiz-div').addClass("hidden");
    $('#shelfie-div').addClass("hidden");
  });
  $('#quiz-btn').click(function(){
    $('#quiz-div').removeClass("hidden");
    $('#essay-div').addClass("hidden");
    $('#poster-div').addClass("hidden");
    $('#shelfie-div').addClass("hidden");
  });
  $('#shelfie-btn').click(function(){
    $('#shelfie-div').removeClass("hidden");
    $('#essay-div').addClass("hidden");
    $('#quiz-div').addClass("hidden");
    $('#poster-div').addClass("hidden");
  });
});
