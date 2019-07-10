jQuery(document).ready(function ($) {
	$(".lg-hotspot-button").each(function (index) {
		$(".point-" + index).mouseenter(function () {
			$(".point-" + index).addClass('active');
		});
		$(".point-" + index).mouseleave(function () {
			$(".point-" + index).removeClass('active');
		});
	});
	$(".point-25").mouseenter(function () {
		$(".point-25").addClass('active');
	});
	$(".point-25").mouseleave(function () {
		$(".point-25").removeClass('active');
	});
	var boxInfo = $(".main-pointsInfo ul li");
	var boxInfoLi = $(".main-pointsInfo ul li");
	var boxInfoClose = $(".main-pointsInfo__close");
	$(boxInfoClose).click(function (event) {
		event.preventDefault();
		boxInfoLi.slideToggle("fast");
		boxInfoClose.css("top", "12px");
	});
	var mobile_boxInfo = $(".main-pointsInfo__mobile ul li");
	var mobile_boxInfoLi = $(".main-pointsInfo__mobile ul li");
	var mobile_boxInfoClose = $(".main-pointsInfo__mobile__close");
	$(mobile_boxInfoClose).click(function (event) {
		event.preventDefault();
		$(".main-pointsInfo__mobile").fadeOut();
		mobile_boxInfo.fadeOut("fast");
	});
	$(".main-pointsInfo__mobile__open").click(function () {
		event.preventDefault();
		$(".main-pointsInfo__mobile").fadeIn();
		mobile_boxInfo.fadeIn("fast");
	});
});