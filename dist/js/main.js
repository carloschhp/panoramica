"use strict";jQuery(document).ready(function(o){o(".lg-hotspot-button").each(function(n){o(".point-"+n).mouseenter(function(){o(".point-"+n).addClass("active")}),o(".point-"+n).mouseleave(function(){o(".point-"+n).removeClass("active")})}),o(".point-25").mouseenter(function(){o(".point-25").addClass("active")}),o(".point-25").mouseleave(function(){o(".point-25").removeClass("active")});o(".main-pointsInfo ul li");var i=o(".main-pointsInfo ul li"),t=o(".main-pointsInfo__close");o(t).click(function(n){n.preventDefault(),i.slideToggle("fast"),t.css("top","12px")});var e=o(".main-pointsInfo__mobile ul li"),n=(o(".main-pointsInfo__mobile ul li"),o(".main-pointsInfo__mobile__close"));o(n).click(function(n){n.preventDefault(),o(".main-pointsInfo__mobile").fadeOut(),e.fadeOut("fast")}),o(".main-pointsInfo__mobile__open").click(function(){event.preventDefault(),o(".main-pointsInfo__mobile").fadeIn(),e.fadeIn("fast")})});
jQuery(document).ready(function() {

  $('.main-pointsInfo .point-28').on('mouseover', function(){
    $('.lg-container .point-28').addClass('active');
  });
  $('.main-pointsInfo .point-28').on('mouseout', function(){
    $('.lg-container .point-28').removeClass('active');
  });

  $('.lg-container .point-28').on('mouseover', function(){
    $('.main-pointsInfo .point-28').addClass('active');
  });
  $('.lg-container .point-28').on('mouseout', function(){
    $('.main-pointsInfo .point-28').removeClass('active');
  });

  $('.main-pointsInfo .point-20').on('mouseover', function(){
    $('.lg-container .point-20').addClass('active');
  });
  $('.main-pointsInfo .point-20').on('mouseout', function(){
    $('.lg-container .point-20').removeClass('active');
  });

  $('.lg-container .point-20').on('mouseover', function(){
    $('.main-pointsInfo .point-20').addClass('active');
  });
  $('.lg-container .point-20').on('mouseout', function(){
    $('.main-pointsInfo .point-20').removeClass('active');
  });

});
