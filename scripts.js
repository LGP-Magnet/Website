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
		var div = $(document.createElement('DIV'));
		div.attr('class', 'col col-md-2 col-sm-3 col-xs-4');
		
		var btn = $(document.createElement("BUTTON"));
		btn.attr('type', 'button');
		btn.attr("class", "team-member-button");
		btn.attr("style", "background: url(./img/team/" + gif + ") no-repeat center;");

		var overlay = $(document.createElement("DIV"));
		overlay.attr("class","team-member-overlay");
		
		var name = $(document.createElement('P'));
		name.html('NAME');
		name.attr('class', 'member-name');
		overlay.append(name);
		
		var team = $(document.createElement('P'));
		team.html('TEAM');
		team.attr('class', 'member-team');
		overlay.append(team);
		
		var position = $(document.createElement('P'));
		position.html('POSITION');
		position.attr('class', 'member-position');
		overlay.append(position);

		btn.on("mouseenter", function() {
			OnShowTeamMemberInfo(btn, overlay);
		});
		
		btn.on("mouseleave", function() {
			OnHideTeamMemberInfo(btn, overlay);
		});
		
		btn.on("click", function() {
			OnToggleTeamMemberInfo(btn, overlay);
		});

		btn.append(overlay);
		div.append(btn);
		
		$("#teamImg").append(div);
	});
}

function OnShowTeamMemberInfo(btn, overlay) {
	btn.addClass('mouse-hover');
	overlay.addClass('mouse-hover');
}

function OnHideTeamMemberInfo(btn, overlay) {
	btn.removeClass('mouse-hover');
	overlay.removeClass('mouse-hover');
}

function OnToggleTeamMemberInfo(btn, overlay) {
	btn.toggleClass('mouse-hover');
	overlay.toggleClass('mouse-hover');
}

function CreateMenuBehavior() {

	$('#sidebar-toggle').on('click', function(){
		$('#sidebar-menu').toggleClass('sidebar-menu-open');
	});
	
	$('#sidebar-menu a').on('click', function(){
		$('#sidebar-menu').toggleClass('sidebar-menu-open');
	});
	
	$('#topbar-toggle').on('click', function(){
		$('#topbar-menu').toggleClass('topbar-menu-open');
		$('#topbar-menu .topbar-menu-wrap').toggleClass('open');
	});
	
	$('#topbar-menu a').on('click', function(){
		$('#topbar-menu').toggleClass('topbar-menu-open');
		$('#topbar-menu .topbar-menu-wrap').toggleClass('open');
	});
}

function CreateVideoBehavior() {
	$(window).on('resize', function(){
		$(".covervideo").height($("#videocompany").height());
	});
	$(".coverVideo").height($("#videoCompany").height());
}
