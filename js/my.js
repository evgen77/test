$(function () {
    $(".popup-gallery").magnificPopup({
        delegate: "a",
        type: "image",
        tLoading: "Loading image #%curr%...",
        mainClass: "mfp-img-mobile",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            titleSrc: function (e) {
                return e.el.attr("title") + "<small>by Marsel Van Oosten</small>"
            }
        }
    }), $(".header-menu__btn").click(function (e) {
        e.preventDefault();
        var a = $(".header-menu__list");
        a.is(":hidden") ? a.fadeIn() : a.fadeOut()
    }), $(".header-menu__list a[href^='#']").on("click", function (e) {
        var a = $(this.getAttribute("href"));
        a.length && (e.preventDefault(), $("html, body").stop().animate({
            scrollTop: a.offset().top
        }, 1e3))
    })
});

	// fixed menu
	$(function(){
		$(window).scroll(function() {
			if($(this).scrollTop() >= 60) {
				$('.header-menu').addClass('fixed').fadeIn();
			}
			else{
				$('.header-menu').removeClass('fixed');
			}
		});
	});