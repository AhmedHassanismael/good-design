/* global $, document,window,alert */
$(document).ready(function(){
	if($(window).width()<= 767 ){
		$('.search i').click(function(){
			$(this).toggleClass('fa-search fa-times')
			$('.tool-bar .search input').animate({width:'100'+'%'}).toggle();
			$(".tool-bar ul").toggle()
})

	}
	$(".toggle").on('click',function(){
		$(".navbar-list li").slideToggle();
	})
	$(".tool-bar ul li .log-in").click(function(){
		$($(this).data('popup')).fadeIn();
	})
$(".pop-up .login-mail button").click(function(){
		$(this).parentsUntil(".pop-up").parent().fadeOut();
	})
	$(".Sign-Up").click(function(){
		$($(this).data('popup')).fadeIn();
	})
		$(".pop-up .Register-mail input:last-child").click(function(){
		alert("you have registered")
		$(this).parentsUntil(".pop-up").parent().fadeOut();
	})
});