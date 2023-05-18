$(document).ready(function () {
	/* Scrollbar js*/
	/* http://manos.malihu.gr/repository/custom-scrollbar/demo/examples/scrollbar_themes_demo.html */
	(function($){
		$(window).on("load",function(){
			$(".content").mCustomScrollbar();
		});
	})(jQuery);
	/* SIDEBAR AND NAVBAR TOP*/
	/* When the sidebarCollapse buttons is clicked */
	$('#sidebarCollapse').on('click', function () {
		// open sidebar
		$('#sidebar').addClass('active');
		// fade in the overlay
		$('.overlay').addClass('active');
		$('.collapse.in').toggleClass('in');
		$('a[aria-expanded=true]').attr('aria-expanded', 'false');
		
	});
	$('#dismiss, .overlay').on('click', function () {
		// hide sidebar
		$('#sidebar').removeClass('active');
		// hide overlay
		$('.overlay').removeClass('active');
		
	});
	/* navbar-top admin-credetials */
	var over1 = 0, over2 = 0; $over1 = 0; $over2 = 0;
	$('#admin-cred').on('mouseover', function () { $over1 = 1; });
	$('#admin-cred').on('mouseleave', function () { $over1 = 0; });
	$('#adm-drop-down').on('mouseover', function () { $over2 = 1; });
	$('#adm-drop-down').on('mouseleave', function () { $over2 = 0; });
	$('#all').on('click',function(){
		if(($over1 === 0) && ($over2 === 0)){
			$('#admin-cred').attr('aria-expanded', 'false');
			$('#adm-drop-down').attr('class', 'collapse');
		}
	});
});