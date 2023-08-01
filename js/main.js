(function ($) {
    $(document).on('ready', function () {

        "use strict";

        /**Preload**/
        $('#page-loader').delay(800).fadeOut(600, function () {
            $('body').fadeIn();
        });

        /**Menu Mobile**/
        $('.menu-icon').on('click', function () {
            $('body').toggleClass("open-menu");
        });
        $('.menu-res li.menu-item-has-children').on('click', function () {

            var submenu = $(this).find("ul");
            if ($(submenu).is(":visible")) {
                $(submenu).slideUp();
                $(this).removeClass("open-submenu-active");
            }
            else {
                $(submenu).slideDown();
                $(this).addClass("open-submenu-active");
            }
        });

        $('.menu-res li.menu-item-has-children > a').on('click', function () {
            return false;
        });

        /**Menu Fixed**/
        $(window).bind('scroll', function () {
            if ($(window).scrollTop() >= 250) {
                $('body.fixed-style').addClass('fixed');
            } else {
                $('body.fixed-style').removeClass('fixed');
            }

            if ($(window).scrollTop() >= 400) {
                $('body.fixed-style').addClass('show-menu-fixed');
            } else {
                $('body.fixed-style').removeClass('show-menu-fixed');
            }

            if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                $(".totop").addClass("show");
            }
            else {
                $(".totop").removeClass("show");
            }

        });

        /**Trend Affix**/
        $('.trend-box-affix').affix({
            offset: {
                top: 2965,
                bottom: function () {
                    return (this.bottom = $('.footer').outerHeight(true));
                }
            }
        })

        /**Back to top**/
        $(".totop").on('click', function () {
            $("html, body").animate({ scrollTop: 0 }, 2000);
        });

        /**Search Box**/
        $('body').on('click', function () {
            if ($('.search-icon').hasClass("show-search")) {
                $('.search-icon').toggleClass("show-search");
            }
        });
        $('.icon-search').on('click', function () {
            if ($(".searchbox").is(":visible")) {
                $(".searchbox").stop(true, true).slideUp();
                $(this).removeClass("show-searchbox");
            }
            else {
                $(".searchbox").stop(true, true).slideDown();
                $(this).addClass("show-searchbox");
                $(".searchbox input").focus();
            }
        });

        /**Home slider**/
        if ($('.bx-homeslider').length) {
            $('.bx-homeslider').bxSlider({
                mode: 'fade',
                captions: true,
            });
        }

        /**gallery posts slider**/
        $('.owl-gallery-posts').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            mouseDrag: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        /**dailies slider**/
        $('.owl-dailies').owlCarousel({
            loop: true,
            nav: true,
            items: 1,
            mouseDrag: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

        /**Grid pinterest style**/
        if ($('.grid').length) {
            $('.grid').isotope({
                itemSelector: '.grid-item',
            });
        }

        /**Gallerye**/
        if ($('.fancybox').length) {
            $('.fancybox').fancybox({
                scrolling: true
            });
        }
        cmsmasters_owl_sliders_run();
        
        function cmsmasters_owl_sliders_run() {
            var owl_sliders = jQuery('.cmsmasters_owl_slider');
            
            
            owl_sliders.each(function () { 
                var slider = jQuery(this), 
                    data = [];
                
                
                data['data_id'] = slider.attr('id');
                data['data_items'] = slider.data('items'), 
                data['data_singleItem'] = slider.data('singleItem'), 
                data['data_autoPlay'] = slider.data('autoPlay'), 
                data['data_stopOnHover'] = slider.data('stopOnHover'), 
                data['data_rewindNav'] = slider.data('rewindNav'), 
                data['data_slideSpeed'] = slider.data('slideSpeed'), 
                data['data_paginationSpeed'] = slider.data('paginationSpeed'), 
                data['data_rewindSpeed'] = slider.data('rewindSpeed'), 
                data['data_autoHeight'] = slider.data('autoHeight'), 
                data['data_transitionStyle'] = slider.data('transitionStyle'), 
                data['data_pagination'] = slider.data('pagination'), 
                data['data_navigation'] = slider.data('navigation'), 
                data['data_navigationPrev'] = slider.data('navigationPrev'), 
                data['data_navigationNext'] = slider.data('navigationNext');
                
                
                cmsmasters_owl_slider_run(data);
            } );
        }

        /* Owl Slider run */
function cmsmasters_owl_slider_run(data) {
	var data_id = data['data_id'], 
		container = jQuery('#' + data_id), 
		data_items = false, 
		data_singleItem = true, 
		data_autoPlay = true, 
		data_stopOnHover = true, 
		data_rewindNav = true, 
		data_slideSpeed = 200, 
		data_paginationSpeed = 800, 
		data_rewindSpeed = 1000, 
		data_autoHeight =  false, 
		data_transitionStyle = false, 
		data_pagination = false, 
		data_navigation = false, 
		data_navigationPrev = '<span class="cmsmasters_prev_arrow"><i class="fa fa-angle-left"><span></span></span>',
		data_navigationNext = '<span class="cmsmasters_next_arrow"><i class="fa fa-angle-right"></i><span></span></span>',
		params = {};
	
	
	if (data['data_items'] !== undefined) {
		data_items = Number(data['data_items']);
	}
	
	
	if (data['data_singleItem'] !== undefined) {
		data_singleItem = Boolean(data['data_singleItem']);
	}
	
	
	if (data['data_autoPlay'] !== undefined) {
		data_autoPlay = (data['data_autoPlay'] === false) ? false : Number(data['data_autoPlay']);
	}
	
	
	if (data['data_stopOnHover'] !== undefined) {
		data_stopOnHover = Boolean(data['data_stopOnHover']);
	}
	
	
	if (data['data_rewindNav'] !== undefined) {
		data_rewindNav = Boolean(data['data_rewindNav']);
	}
	
	
	if (data['data_slideSpeed'] !== undefined) {
		data_slideSpeed = Number(data['data_slideSpeed']);
	}
	
	
	if (data['data_paginationSpeed'] !== undefined) {
		data_paginationSpeed = Number(data['data_paginationSpeed']);
	}
	
	
	if (data['data_rewindSpeed'] !== undefined) {
		data_rewindSpeed = Number(data['data_rewindSpeed']);
	}
	
	
	if (data['data_autoHeight'] !== undefined) {
		data_autoHeight = Boolean(data['data_autoHeight']);
	}
	
	
	if (data['data_transitionStyle'] !== undefined) {
		data_transitionStyle = (data['data_transitionStyle'] === 'fade') ? data['data_transitionStyle'] : false;
	}
	
	
	if (data['data_pagination'] !== undefined) {
		data_pagination = Boolean(data['data_pagination']);
	}
	
	
	if (data['data_navigation'] !== undefined) {
		data_navigation = Boolean(data['data_navigation']);
	}
	
	
	if (data['data_navigationPrev'] !== undefined) {
		data_navigationPrev = data['data_navigationPrev'];
	}
	
	
	if (data['data_navigationNext'] !== undefined) {
		data_navigationNext = data['data_navigationNext'];
	}
	
	
	params = { 
		singleItem : 			data_singleItem, 
		autoPlay : 				data_autoPlay, 
		stopOnHover : 			data_stopOnHover, 
		rewindNav : 			data_rewindNav, 
		slideSpeed : 			data_slideSpeed, 
		paginationSpeed : 		data_paginationSpeed, 
		rewindSpeed : 			data_rewindSpeed, 
		autoHeight : 			data_autoHeight, 
		addClassActive : 		true, 
		transitionStyle : 		data_transitionStyle, 
		responsiveBaseWidth : 	'#' + data_id, 
		pagination : 			data_pagination, 
		navigation : 			data_navigation, 
		navigationText : 		[data_navigationPrev, data_navigationNext] 
	};
	
	
	if (data_singleItem === false) {
		if (data_items === false) {
			var contentWrap = container.closest('.content_wrap'), 
				itemsNumber = 2;
			
			
			if (contentWrap.hasClass('fullwidth')) {
				itemsNumber = 4;
			} else if (contentWrap.hasClass('r_sidebar') || contentWrap.hasClass('l_sidebar')) {
				itemsNumber = 3;
			}
		} else {
			itemsNumber = data_items;
		}
		
		
		var firstPost = container.find('.cmsmasters_owl_slider_item'), 
			postMinWidth = Number(firstPost.css('minWidth').replace('px', '')), 
			postDesktopWidth = (postMinWidth * 5) - 1, 
			postDesktopSmallWidth = (postMinWidth * 4) - 1, 
			postTabletWidth = (postMinWidth * 3) - 1, 
			postMobileWidth = (postMinWidth * 2) - 1, 
			postFourColumns = (itemsNumber > 4 ? 4 : itemsNumber), 
			postThreeColumns = (itemsNumber > 3 ? 3 : itemsNumber), 
			postTwoColumns = (itemsNumber > 2 ? 2 : itemsNumber), 
			postOneColumns = 1;
		
		
		params.items = itemsNumber;
		params.itemsDesktop = [postDesktopWidth, postFourColumns];
		params.itemsDesktopSmall = [postDesktopSmallWidth, postThreeColumns];
		params.itemsTablet = [postTabletWidth, postTwoColumns];
		params.itemsMobile = [postMobileWidth, postOneColumns];
	}
	
	
	container.owlCarousel(params);
}
    });
})(jQuery);


// In your Javascript (external .js resource or <script> tag)
