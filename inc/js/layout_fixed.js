$(document).ready(function () {
	/* Scrollbar js*/
	(function($){
		$(window).on("load",function(){
			$(".content").mCustomScrollbar();
		});
	})(jQuery);
	/* SIDEBAR AND NAVBAR TOP*/
	/* When the sidebarCollapse buttons is clicked */
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$(this).toggleClass('active');
		$('#logo2').toggleClass('logo2active');
		$('#navbar-top').toggleClass('active');
		$('#main-body').toggleClass('active');
		// close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
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