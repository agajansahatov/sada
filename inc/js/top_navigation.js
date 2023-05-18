$(document).ready(function () {
	
	var fixed = 0; $fixed = 0;
	/* When the page is opened, it controls if already scrolled */
	if($(this).scrollTop()>=150){
		if($fixed == 0){
			$fixed = 1;
			$('#navbar-top').toggleClass('active');
			$('#navbar-top').toggleClass('fixed-top');
			$('#navbar-top').toggleClass('navbar-expand-md');
		}
	}else{
		if($fixed == 1){
			$fixed = 0;
			$('#navbar-top').toggleClass('active');
			$('#navbar-top').toggleClass('fixed-top');
			$('#navbar-top').toggleClass('navbar-expand-md');
		}
	}

	(function($){
		$(window).on("load",function(){
			$(".content").mCustomScrollbar();
		});
	})(jQuery);

	$(".content").mCustomScrollbar({
		callbacks:{
			whileScrolling:function(){
				if(this.mcs.top*(-1)>=150){
					if($fixed == 0){
						$fixed = 1;
						$('#navbar-top').toggleClass('active');
						$('#navbar-top').toggleClass('fixed-top');
						$('#navbar-top').toggleClass('navbar-expand-md');
					}
				}else{
					if($fixed == 1){
						$fixed = 0;
						$('#navbar-top').toggleClass('active');
						$('#navbar-top').toggleClass('fixed-top');
						$('#navbar-top').toggleClass('navbar-expand-md');
					}
				}
			}
		}
	});
});