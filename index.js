jQuery(document).ready(function($) {

	// console.log("DOM carregado");
	
	$(".lg-hotspot-label").show("fast");
	$(".lg-hotspot-label").hide();

	$(".lg-hotspot-button").click(function(){
	var thisLabel = $(this).siblings(".lg-hotspot-label");
	var thisLabelState = thisLabel.css("display");
	$(".lg-hotspot-label").fadeOut(0).parent().css("z-index", "0");
	if(thisLabelState=="none") {
	thisLabel.fadeIn(0);
	$(this).parent().css("z-index", "999");
	 }
	});

	$(".hotspot").each(function(){

		var $this = $(this),
		top = $this.data("top"),
		left = $this.data("left");

		$this.css({
			top: top + "%",
			left: left + "%"
		})
		.addClass("is-visible");

	});

	$(".hotspots-label").on("mouseover", function(e){
		$(this).removeClass("is-visible");
		$(this).parents(".image").find(".hotspot").removeClass("is-active");
		e.preventDefault();
	});

	$(".hotspot").on("mouseover", function(e){

		var text = $(this).data("text");

		if(!$(this).hasClass("is-active"))
		{
			$(this).parents(".image").find(".hotspot").removeClass("is-active");
			$(this).addClass("is-active");
			$(this).parents(".image").find(".hotspots-label").html( "<strong>" + $(this).text() + "</strong> <span>" + text + "</span>" ).addClass("is-visible");
		}
		else
		{
			$(this).removeClass("is-active");
			$(this).parents(".image").find(".hotspots-label").html( "<strong>" + $(this).text() + "</strong> <span>" + text + "</span>" ).removeClass("is-visible");	
		}

		e.preventDefault();
	});

	$(".hotspot").on("mouseleave", function(e){
		var text = $(this).data("text");

		$(this).removeClass("is-active");
		$(this).parents(".image").find(".hotspots-label").html( "<strong>" + $(this).text() + "</strong> <span>" + text + "</span>" ).removeClass("is-visible");
	});

});
