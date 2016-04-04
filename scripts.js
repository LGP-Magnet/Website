$(document).ready(function(){

	CreateTeamMemberBtns();

	CreateMenuBehavior();
	
	CreateVideoBehavior();
});

function CreateTeamMemberBtns() {

	var team = [
	"01_AndrePires.gif", "02_VitorTeixeira.gif", "03_JoaoBandeira.gif", "04LuisMagalhaes.gif", "05_JoaoCosta.gif", "06_NunoDuarte.gif",
	"07_PedroCarreira.gif", "08_JoaoSoares.gif", "09_LilianaRibeiro.gif", "10_DiogoGomes.gif", "11_MiguelNunes.gif", "12_RicardoLoureiro.gif",
	"13_AnaAlves.gif", "14_BeatrizCavaleiro.gif", "15_AndrePeixoto.gif", "16_MiguelSandim.gif", "17_RicardoFigueiredo.gif", "18_Matheus.gif",
	"19_ClaudioMonteiro.gif", "20_AndreBordalo.gif", "21_JoaoCardoso.gif", "22_CarolinaFaria.gif", "23_Guilherme.gif", "24_AndreRegado.gif",
	"25_AnaRitaFerreira.gif", "26_BrunoAlves.gif", "27_JoaoPereira.gif", "28_CarlosPereira.gif", "29_JoseCardoso.gif", "30_AnaisDias.gif",
	"31_RaquelCorreia.gif", "32_RitaLima.gif", "33_DanielCouceiro.gif", "34_JoaoFernandes.gif"];
	
	$.each(team, function(index, gif) {
		var btn = document.createElement("BUTTON");
		$(btn).attr("type", "button");
		$(btn).attr("class", "hover-container btn btn-default orange-circle-button blueCircle");
		$(btn).attr("style", "background: url(./img/team/" + gif + ") no-repeat center;background-size: cover;");

		var overlay = document.createElement("DIV");
		$(overlay).attr("class","img-overlay hoverImage");

		$(btn).on("mouseenter", function() {
			OnMouseEnterTeamMemberBtn(btn, overlay);
		});
		$(btn).on("mouseleave", function() {
			OnMouseLeaveTeamMemberBtn(btn, overlay);
		});

		btn.appendChild(overlay);
		$("#teamImg").append(btn);
	});
}

function OnMouseEnterTeamMemberBtn(btn, overlay) {
	$(btn).addClass('mouse-hover');
	$(overlay).addClass('mouse-hover');
}

function OnMouseLeaveTeamMemberBtn(btn, overlay) {
	$(btn).removeClass('mouse-hover');
	$(overlay).removeClass('mouse-hover');
}

function CreateMenuBehavior() {
		
	$('#menuToggle, .menu-close').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
	
	$('.menu-wrap > a').on('click', function(){
		$('#menuToggle').toggleClass('active');
		$('body').toggleClass('body-push-toleft');
		$('#theMenu').toggleClass('menu-open');
	});
}

function CreateVideoBehavior() {
	$(window).on('resize', function(){
		$(".covervideo").height($("#videocompany").height());
	});
	$(".coverVideo").height($("#videoCompany").height());
}
