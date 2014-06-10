/* This is a clone of file nagging-menu.js 
   [file path: Sites/tryOut/Fixed-Position-Top-Menu-Bar-with-jQuery-CSS3-nagging-menu/nagging-menu.js]

   Notes:

   This file was cloned but untouched.
*/


$(function(){
	
	var menu = $('#menu'),
		pos = menu.offset();
		
		$(window).scroll(function(){
			if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('default')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('default').addClass('fixed').fadeIn('fast');
				});
			} else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
				menu.fadeOut('fast', function(){
					$(this).removeClass('fixed').addClass('default').fadeIn('fast');
				});
			}
		});

});