$(document).ready(function(){
	//console.log('ready');

	//opção 1 - hover.
	/*$( ".overlay-container" )
	.mouseenter(function() {
		//console.log('hover');
		$('.img-overlay', this).show(300);
	})
	.mouseleave(function() {
		//console.log('unhover');
		$('.img-overlay', this).hide(300);
	});
	$('.overlay-container a').on('click',function(event){
		event.preventDefault();
	});*/

	
	//opção 2 - click 
	$('.overlay-container a').on('click',function(event){
		event.preventDefault();
		if(!$(this).hasClass('shown')){
			$(this).addClass('shown');
			$('.img-overlay', this).show(300);	
		}
		else{
			$(this).removeClass('shown');
			$('.img-overlay', this).hide(300);
		}
		
	});


});

/*
//works chrome
$('.overlay-container').hover(
	function(){
		console.log('hover');
		$('.img-overlay', this).show(300);
		console.log('hover');
	},
	function(){
		$('.img-overlay', this).hide(300);
});

//works chrome
$(document).on('mouseenter','.overlay-container', function (event) {
    console.log('new');
    $('.img-overlay', this).show();
}).on('mouseleave','.overlay-container',  function(){
    $('.img-overlay', this).hide();
});
*/


