"use strict";jQuery(document).ready(function(o){o(".lg-hotspot").each(function(n){o(".point-"+n).mouseenter(function(){o(".point-"+n).addClass("active")}),o(".point-"+n).mouseleave(function(){o(".point-"+n).removeClass("active")})}),o(".point-25").mouseenter(function(){o(".point-25").addClass("active")}),o(".point-25").mouseleave(function(){o(".point-25").removeClass("active")});o(".main-pointsInfo ul li");var i=o(".main-pointsInfo ul li"),e=o(".main-pointsInfo__close");o(e).click(function(n){n.preventDefault(),i.slideToggle("fast"),e.css("top","12px")});var t=o(".main-pointsInfo__mobile ul li"),n=(o(".main-pointsInfo__mobile ul li"),o(".main-pointsInfo__mobile__close"));o(n).click(function(n){n.preventDefault(),o(".main-pointsInfo__mobile").fadeOut(),t.fadeOut("fast")}),o(".main-pointsInfo__mobile__open").click(function(){event.preventDefault(),o(".main-pointsInfo__mobile").fadeIn(),t.fadeIn("fast")})});