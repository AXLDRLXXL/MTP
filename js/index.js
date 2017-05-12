$(document).ready(function(){
	var a =$(".box ul li:gt(0):not(:last)");
	    a.hide();
	$(".boxdown").click(function(){
		if(a.is(':visible')){
			 a.slideUp('fast');
			 $(this).removeClass('up');
		}else{
			a.slideDown('fast').show();	
			$(this).addClass('up');
	}			
	});
});

