$(document).ready(function(){
  $links = $("a");
  $menu_mobile = $("#mobile-header");
  $page = $(".page");
  $pages_wrapper = $("#pages_wrap");


    $menu_mobile.on("click",function(){
      $("ul").toggleClass("menu-mobile-showing");
    });

    $(document).scroll(function()
  	{
  		var wScroll = $(this).scrollTop() + (0.78*$(window).height());

  		if(wScroll > $pages_wrapper.offset().top)
  		{
  			$(".page").each(function(i){
  				setTimeout(function()
  				{
  					$('.page').eq(i).addClass("is-showing");
  				},250 * i);
  			});
  		}
  	});


    $page.on({
      mouseenter:function(){
        $(this).find(".layer").css("background-color","rgba(0,0,0,0.5)");
        $(this).find(".page-desc").css("display","flex");
      },
      mouseleave:function(){
        $(this).find(".layer").css("background-color","transparent");
        $(this).find(".page-desc").css("display","none");
      }
    });




    $links.on("click",function(e){
        var destination = $(this).attr("data");
        $elem = $("#"+destination);
        var ammount_to_scroll = $elem.offset().top;
          $("html,body").stop().animate({
              scrollTop:ammount_to_scroll - 82
          },"slow");
      });







});
