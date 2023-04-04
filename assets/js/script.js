$(document).ready(function() {
    $(".mobile-icon").click(() => {
		$(".mobile-menu").toggleClass('active');
        $(".mobile-icon").toggleClass('active');
        $("body").toggleClass('overflow-hidden');
	});
    $(".search svg").click(() => {
        $(".search-content").toggleClass('active');
    });

    $(".catalog-list--top").click(function(){
		if($(this).siblings(".catalog-list--content").is(":visible")) {
			$(this).siblings(".catalog-list--content").slideUp();
		}
		else{
			$(this).siblings(".catalog-list--content").slideDown();
		}
	});

	$(".catalog-list__item--top").click(function(){
		if($(this).siblings(".catalog-list__item--content").is(":visible")) {
			$(this).siblings(".catalog-list__item--content").slideUp();
		}
		else{
			$(this).siblings(".catalog-list__item--content").slideDown();
		}
	});

	$('.filters .filter-item button').click(function(e) {
        $('.filters .filter-item.active').removeClass('active');
		$('.filtered').removeClass('active');
		if($(this).parent().hasClass("one")) {
			$('.filtered.one').addClass('active');
		}
		else if($(this).parent().hasClass("two")) {
			$('.filtered.two').addClass('active');
		}
		else if($(this).parent().hasClass("three")) {
			$('.filtered.three').addClass('active');
		}
		else if($(this).parent().hasClass("four")) {
			$('.filtered.four').addClass('active');
		}
        var parent = $(this).parent();
        parent.addClass('active');
        e.preventDefault();
    });
	$('.contact-page  .filter button').click(function(e) {
        $('.contact-page .filter .filter-item.active').removeClass('active');
		$('.contact-items').removeClass('active');
		if($(this).parent().hasClass("one")) {
			$('.contact-items.one').addClass('active');
		}
		else if($(this).parent().hasClass("two")) {
			$('.contact-items.two').addClass('active');
		}
        var parent = $(this).parent();
        parent.addClass('active');
        e.preventDefault();
    });

	$('.price_request').click(function(e) {
		e.preventDefault();

		$('.modal_price_request').show();
		$('.overlay').show();

		$('body').addClass('overflow-hidden')
	});

	$('.modal_price_request .close').click(function(e) {
		e.preventDefault();
		$(this).parent().hide();
		$('.overlay').hide();

		$('body').removeClass('overflow-hidden');

	});
	$('.call-request').click(function(e) {
		e.preventDefault();

		$('.modal_call_request').show();
		$('.overlay').show();

		$('body').addClass('overflow-hidden');
	});
	$('.modal_call_request .close').click(function(e) {
		e.preventDefault();
		$(this).parent().hide();
		$('.overlay').hide();

		$('body').removeClass('overflow-hidden');
	});
	

	$('.galleries').magnificPopup({
		type: 'image',
		delegate: 'a',
		gallery: {
			enabled: true
		}
	})
});

console.log("Created By AvoPro: https://kwork.ru/user/avopro");