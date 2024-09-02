// activation de Foundation
$(document).foundation();

//// hacks
// rurique et mot
if($('.rubrique_content_inner').length) {
	// virer div class rubrique_content_inner quand elle est vide
	if($('.rubrique_content_inner .texte').text().trim().length < 2 && !$('img').length) {
		$('.rubrique_content_inner').remove();
		// on passe left sur large-12 si right et rubrique_content_inner sont vides
		if($('.right').text().trim().length < 2) {
			$('.right').remove();
			$('.left').removeClass('large-6').addClass('large-12');
			$('.left .liste').addClass('large-up-4');
			$('.left .liens').addClass('large-up-4');
		}
		// si class texte pas vide mais right vide
	} else {
		if($('.right').text().trim().length < 2) {
			$('.left .liste').appendTo('.right');
			$('.left .liens').appendTo('.right');
		}
	}
}


// tooltip sur le menu "toutes" des années de l'IDF
if($('.annees_idf').length && Foundation.MediaQuery.atLeast('large')) {
	var title = $(".annees_idf > ul > li:last-child a").text();
	$(".annees_idf > ul > li:last-child a").text("toutes");
	$(".annees_idf > ul > li:last-child a").wrapInner("<span data-tooltip aria-haspopup='true' class='has-tip tip-right' data-options='show_on:large' title='" + title + "'></span>");
	$(document).foundation();
}

// ouvre le sous-menu quand un li est actif dedans
if($('.menu li.on').length) {
	var $target = $('.menu li.on').parent();
	$('.accordion-menu').foundation('down', $target);
}

// ouvre lien externe dans target blank (en excluant les liens href contient javascript)
$('.texte a[href^="http"]').each(function() {
	var a = new RegExp('/' + window.location.host + '/');
	if(!a.test(this.href)) {
	   $(this).click(function(event) {
	       event.preventDefault();
	       event.stopPropagation();
	       window.open(this.href, '_blank');
	   });
	}
});

// wrap iframe dans le texte des articles
$(".article_content .texte iframe").removeAttr("style").parent().removeAttr("style");
$('.article_content .texte iframe[src*="youtube.com"]').each(function() {
	$(this).wrap("<div class='responsive-embed widescreen'></div>");
});
$('.article_content .texte iframe[src*="vimeo.com"]').each(function() {
	$(this).wrap("<div class='responsive-embed widescreen'></div>");
});
$('.article_content .texte iframe[src*="dailymotion.com"]').each(function() {
	$(this).wrap("<div class='responsive-embed widescreen'></div>");
});
$('.article_content .texte iframe').each(function() {
	$(this).wrap("<div class='conteneur_iframe'></div>");
});
// prevent tag links inside div clickable
$('.tag').click(function(event){
    event.stopImmediatePropagation();
});

// pervent parent scroll
if (Foundation.MediaQuery.atLeast('large')) {
	$('#sidebar').on('mousewheel', function (e) {
	    var event = e.originalEvent,
	        d = event.wheelDelta || -event.detail;
	    this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});
	$('.headerscroll').on( 'mousewheel', function (e) {
	    var event = e.originalEvent,
	        d = event.wheelDelta || -event.detail;
	    this.scrollTop += ( d < 0 ? 1 : -1 ) * 30;
	    e.preventDefault();
	});
}

// hauteur headerscroll
function calculScroll() {
	var h_footer = $('.footer-menu').height();
	var h_logo = $('.logo').outerHeight();
	var h_headerscroll = $('#header').height() - h_footer - h_logo;
	$('.headerscroll').css('max-height', h_headerscroll);
	console.log(h_headerscroll);
}
if (Foundation.MediaQuery.atLeast('large')) {
	// init
	calculScroll();
	// on relance quand la fenetre change de taille
	$(window).resize(function() {
		calculScroll();
	});
	// on relance quand le header change de taille (articles)
	$("#header").hover(function(){
	  $(this).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
	  	function(event) {
	  		calculScroll();
	  	});
	});
}
// masonry
var $grid = $('.masonry').imagesLoaded(function() {
    $grid.masonry({
        itemSelector: '.masonry .teaser'
    });
});

// menu mobile
$(".hamburger").click(function() {
    $("#header").toggleClass("ouvert");
});
// texte_plus
$("a.grand").click(function() {
    $(".article_content .texte").addClass("grand");
});
$("a.normal").click(function() {
    $(".article_content .texte").removeClass("grand");
});

// logo
if ($("body").hasClass("article") && Foundation.MediaQuery.atLeast('large')) {
    var typed_2 = new Typed('#type .write', {
		strings: ["emue.net"],
		cursorChar: ' ',
		typeSpeed: 40,
		backSpeed: 20,
		loop: false
	});
	typed_2.stop();
	$("#header").mouseenter(function() {
	    typed_2.start();
    });
    $("#header").mouseleave(function() {
        typed_2.reset();
        typed_2.stop();
    });
} else {
    var typed = new Typed('#type .write', {
		strings: ["emue.net", ""],
		cursorChar: ' ',
		typeSpeed: 40,
		backSpeed: 20,
		loop: true,
		onStringTyped: function(pos, self) {
			self.stop();
			$("#type").mouseenter(function() {
			    self.reset();
		    });
		    $("#type").mouseleave(function() {
		        self.start();
		    });
		}
	});
}