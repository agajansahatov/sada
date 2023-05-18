$(document).ready(function () {
	
	/* Scrollbar js*/
	(function($){
		$(window).on("load",function(){
			$(".content").mCustomScrollbar();
		});
	})(jQuery);
	/* SIDEBAR AND NAVBAR TOP*/
	/* When the sidebarCollapse buttons is clicked */
	if($(window).width()<768){
		$(".sidebar-open").removeClass('show');
	}
	$(window).on('resize', function () {
		if($(window).width()<768){
			if($('#sidebar').hasClass('active') == false){
				$(".sidebar-open").removeClass('show');
			}
		}else{
			if($('#sidebar').hasClass('active')){
				$(".sidebar-open").removeClass('show');
			}
		}
	});
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
        $(".sidebar-open").removeClass('show');
	});
	$('#sidebar ul li').on('click', function () {
		if($(window).width()>768){
			if($('#sidebar').hasClass('active')){
				$( "#sidebarCollapse" ).click();
			}
		}else{
			if($('#sidebar').hasClass('active') == false){
				$( "#sidebarCollapse" ).click();
			}
		}
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