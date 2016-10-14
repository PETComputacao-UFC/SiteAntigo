function main() {
	$petianos = $('.team');
	
	$petianos.hover(function() {
			$('.team a img').animate({opacity:0.5},500);

			$('.petiano-margem a img').hover(function() {
				$(this).animate({opacity:1},10);
			},
			function() {
				$(this).animate({opacity:0.5},10);
			});

		},
		function() {
			$('.team a img').animate({opacity:1},500);
		}
	); 

	//$('.petiano-margem a img').hover(opacidade_petiano(1), opacidade_petiano(0.3));

	//$petiano = $('.petiano-margem a img');

	
}

$(document).ready(main());