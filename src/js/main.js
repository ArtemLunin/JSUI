import $ from './lib/lib';

$('button').on('click', function() {
	$('div').eq(2).toggleClass('active');
});

$('div').click(function() {
	console.log($(this).index());
});

// console.log($('div').eq(2).find('.some'));
// console.log($('.some').closest('.findme'));
// console.log($('button').html('123'));

// $('.findme').fadeOut(1800);
// $('button').fadeIn(1800);