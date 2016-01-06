$('.project').click(function() {
	if ($(this).next('.about').is(":hidden")) {
		$(this).next('.about').slideDown( "slow" );
		$(this).next('.about').css('display','block');
	}
	else {
		$(this).next('.symbol').replaceWith("+");
		$(this).next('.about').slideUp("slow");
	}
});