/* global $ ,document,window */

$(document).ready(function () {
	/* navbar */
	"use strict";
	$(window).scroll(function () {
		if ($(window).scrollTop() >= $(".navbar").height()) {
			$(".navbar").addClass("op-nav");
		} else {
			$(".navbar").removeClass("op-nav");
		}
	});
	/* navbar */
	/*tab*/
	$(".social-tab ul li").click(function () {
		$(this).addClass("selected").siblings().removeClass("selected");
		$('.social-tab .social-content div').hide();
		$($(this).attr('data-tab')).show();
	});
});