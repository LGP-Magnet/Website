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
	
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
	
	
	
	$(window).on('resize', function(){
		$(".coverVideo").height($("#videoCompany").height());
	});
			
	var dir="./img/team/";
	var team=["01_AndrePires.gif","02_VitorTeixeira.gif","03_JoaoBandeira.gif","04LuisMagalhaes.gif","05_JoaoCosta.gif","06_NunoDuarte.gif","07_PedroCarreira.gif","08_JoaoSoares.gif","09_LilianaRibeiro.gif","10_DiogoGomes.gif","11_MiguelNunes.gif","12_RicardoLoureiro.gif","13_AnaAlves.gif","14_BeatrizCavaleiro.gif","15_AndrePeixoto.gif","16_MiguelSandim.gif","17_RicardoFigueiredo.gif","18_Matheus.gif","19_ClaudioMonteiro.gif","20_AndreBordalo.gif","21_JoaoCardoso.gif","22_CarolinaFaria.gif","23_Guilherme.gif","24_AndreRegado.gif","25_AnaRitaFerreira.gif","26_BrunoAlves.gif","27_JoaoPereira.gif","28_CarlosPereira.gif","29_JoseCardoso.gif","30_AnaísDias.gif","31_RaquelCorreia.gif","32_RitaLima.gif","33_DanielCouceiro.gif","34_JoaoFernandes.gif"];
	
	for(i=0;i<team.length;i++){
		$("#teamImg").append('<button type="button" class="btn btn-default orange-circle-button blueCircle" style="background: url('+dir+team[i]+') no-repeat center;background-size: cover;"><div class="hoverImage"></div></button>');
	}
$(".coverVideo").height($("#videoCompany").height());

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


