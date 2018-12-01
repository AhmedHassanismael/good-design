/* global $ ,document,window */

$(document).ready(function () {
  

    "use strict"
    // slide toggle //
    $(" .div-left").click(function(){
      $(".menue-span li").slideToggle();  
    })
    // change theme //
    $(".nav-logo i,.div-right i").click(function(){
        $("body").attr("data-default-color",$(this).attr("data-color"));
    });
    // tab //
    $(".img-tab").on("click",function(){
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).attr("data-span")).addClass('active').siblings().removeClass('active');
        $($(this).attr("data-div")).show().siblings("").hide();
    });
    //FORM//
    var placeattr="";
    $('[placeholder]').focus(function(){
        placeattr=$(this).attr('placeholder');
        $(this).attr('placeholder','');
    }).blur(function(){$(this).attr('placeholder',placeattr)});
            //-------------//
        $('[required]').blur(function(){
            if($(this).val()==''){
                $(this).next('span').fadeIn().delay(1000).fadeOut();
            }
        });
    
        //ul ///
    $(".ul-img li").click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })
    


 


 window.mixitup('#our-gallary');
});