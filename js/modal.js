$(document).ready(function(){
	var buttonScrol = $('.button-scrol');
	buttonScrol.on('click',function(){
		$('html').scrollTop(0);
	});

var buttonModal = $('.navbar_button');
var modalWindows = $('.modal');
var buttonClose = $('.modal_close');

buttonModal.click(function(){
	modalWindows.addClass('modal__active');
});
buttonClose.click(function(){
	modalWindows.removeClass('modal__active');
});
});