$(document).ready(function() {
	sidebarOut = true;
	retract = true;
	done = false;
    firstResize = false;
    if (firstResize = false) {
        document.getElementsByTagName("body")[0].style[ "font-size" ] = document.body.clientWidth*(14/1366) + "px";
        document.getElementsByTagName("h1")[0].style[ "font-size" ] = document.body.clientWidth*(48/1366) + "px";
        document.getElementsByTagName("h2")[0].style[ "font-size" ] = document.body.clientWidth*(36/1366) + "px";
        document.getElementsByTagName("h3")[0].style[ "font-size" ] = document.body.clientWidth*(24/1366) + "px";
        document.getElementsByTagName("h4")[0].style[ "font-size" ] = document.body.clientWidth*(18/1366) + "px";
        document.getElementsByTagName(".main-subheading")[0].style[ "font-size" ] = document.body.clientWidth*(18/1366) + "px";
        document.getElementsByTagName(".sidebar-item")[0].style[ "height" ] = document.body.clientWidth*(70/1366) + "px";
        document.getElementsByTagName(".sidebar-item")[0].style[ "line-height" ] = document.body.clientWidth*(70/1366) + "px";
        firstResize = true;
    }
	$(".sidebar").hover(function() {
		retract = false;
		$(".sidebar").mouseleave(function() {
			if (!done) {
				$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
				sidebarOut = false;
				done = true;
			}
		})
	})
	setTimeout(function() {
		if (retract) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			sidebarOut = false;
		}
	}, 1000);
	$(".sidebar-grabber").mouseenter(function() {
		if (!sidebarOut) {
			$(".sidebar").animate({right: '0'});
			sidebarOut = true;
			done = true;
		}
	});
	$(".sidebar-grabber").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {
				sidebarOut = false;
			}, 200);
		}
	});
	$(".clicker").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(".holder").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(".main-head-out").click(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
			setTimeout(function() {sidebarOut = false;}, 200);
		}
	});
	$(window).resize(function() {
		if (sidebarOut) {
			$(".sidebar").animate({right: '0'});
		} else {
			$(".sidebar").animate({right: '-' + ($(".sidebar-item").width() + 7) + 'px'});
		}
        document.getElementsByTagName("body")[0].style[ "font-size" ] = document.body.clientWidth*(14/1366) + "px";
        document.getElementsByTagName("h1")[0].style[ "font-size" ] = document.body.clientWidth*(48/1366) + "px";
        document.getElementsByTagName("h2")[0].style[ "font-size" ] = document.body.clientWidth*(36/1366) + "px";
        document.getElementsByTagName("h3")[0].style[ "font-size" ] = document.body.clientWidth*(24/1366) + "px";
        document.getElementsByTagName("h4")[0].style[ "font-size" ] = document.body.clientWidth*(18/1366) + "px";

        document.getElementsByTagName(".sidebar-item")[0].style[ "height" ] = document.body.clientWidth*(70/1366) + "px";
        document.getElementsByTagName(".sidebar-item")[0].style[ "line-height" ] = document.body.clientWidth*(70/1366) + "px";
	});
});
