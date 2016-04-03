;(function(){

			// Menu settings
			$('#menuToggle, .menu-close').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});
			
			
			$( document ).ready(function() {
				console.log($("#teamImg"));
				var dir="./img/team/";
				var team=["01_andrepires.gif","02_vitorteixeira.gif","03_joaobandeira.gif","04luismagalhaes.gif","05_joaocosta.gif","06_nunoduarte.gif","07_pedrocarreira.gif","08_joaosoares.gif","09_lilianaribeiro.gif","11_miguelnunes.gif","12_ricardoloureiro.gif","14_beatrizcavaleiro.gif","15_andrepeixoto.gif","16_miguelsandim.gif","17_ricardofigueiredo.gif","18_matheus.gif","19_claudiomonteiro.gif","20_andrebordalo.gif","21_joaocardoso.gif","22_carolinafaria.gif","23_guilherme.gif","24_andreregado.gif","25_anaritaferreira.gif","26_brunoalves.gif"];
				
				for(i=0;i<team.length;i++){
					$("#teamImg").append('<button type="button" class="btn btn-default orange-circle-button blueCircle" style="background: url('+dir+team[i]+') no-repeat center;background-size: cover;"><div></div></button>');
				}
				
				
				
			});


			

			
})(jQuery)