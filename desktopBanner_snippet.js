	
//===== "SET DESKTOP BANNER IMAGE SOURCES " =====//

	var desktopBannerDetails = [];
	
	desktopBannerDetails[0] = {
		'imgUrl':  '/promo/no-stress-holiday-shopping-event.htm',
		'tagline': '$10,000 A Day Giveaway',
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0277/db60131f399d8c535044dcff2880331dx.jpg'
	};
	
	desktopBannerDetails[1] = {
		'imgUrl':  landingPageURL_1,
		'tagline': offerTagline_1,
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0095/34be1fb6659198b453a5775912a5db84x.jpg'
	};
	desktopBannerDetails[2] = {
		'imgUrl':  landingPageURL_2,
		'tagline': offerTagline_2,
		'imgSrc': 'https://pictures.dealer.com/a/autocanadatc/0179/5a95dd64b005331adf3948e61760d9ebx.jpg'
	};
	


	//+++++++++++++DESKTOP BANNER LOGIC

	if ((desktopBanner === true) && (DDC.dataLayer.page.attributes.layoutType === "desktop") && (DDC.dataLayer.page.pageInfo.pageName === "INDEX")) {

		$('.ddc-content.slideshow-background').before('<div id="desktop-pre-links-list"><div id="desktopSlideshow"></div></div');


		for (var i = 0; i < desktopBannerDetails.length; i++) {


			$('div#desktopSlideshow').append('<a href="'+ desktopBannerDetails[i].imgUrl  + '" title="' + desktopBannerDetails[i].tagline + '"><img src="' + desktopBannerDetails[i].imgSrc + '" alt="' + desktopBannerDetails[i].tagline + '" /></a>');

		}

		$('div#desktopSlideshow a:first-of-type').addClass('active');

		function cycleImages() {
			var $active = $('#desktopSlideshow .active');
			var $next = ($active.next().length > 0) ? $active.next() : $('#desktopSlideshow a:first');
			$next.css('z-index', 2); //move the next image up the pile
			$active.fadeOut(1500, function () { //fade out the top image
				$active.css('z-index', 1).show().removeClass('active'); //reset the z-index and unhide the image
				$next.css('z-index', 3).addClass('active'); //make the next image the top one
			});
		}

		//$(document).ready(function () {
		// run every 3s

		if ($('div#desktopSlideshow a').length > 1) {

			setInterval('cycleImages()', 3000);
		}

		//});

	}

	//+++++++++++++END desktop BANNER LOGIC

/*

#desktopSlideshow{position:relative;}
#desktopSlideshow a{position:absolute;z-index:1; left: 50%;transform: translateX(-50%); width: 100%;}
#desktopSlideshow img{width: 100%;}
#desktopSlideshow a.active{z-index:3;}
#desktop-pre-links-list{height: 30vw; margin-top: 1vw;}
*/
