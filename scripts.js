$(document).ready(function(){

	CreateTeamMemberBtns();

	CreateMenuBehavior();
	
	CreateVideoBehavior();
	
	CreateSmoothScrollBehavior();
});

function CreateSmoothScrollBehavior() {
	
	var htmlBody = $('html,body');
	
	$('a.smooth-scroll').on('click', function(event) {
		var href = $.attr(this, 'href');
		if(href.length > 0) {
			event.preventDefault();
			htmlBody.animate({scrollTop:$(href).offset().top}, 400, "swing", function () {
				window.location.hash = href;
			});
		}
	});
}

function CreateTeamMemberBtns() {

	var team = [
	["01_AndrePires.gif", "Andre Pires", "", ""], ["02_VitorTeixeira.gif", "Vítor Teixeira", "", ""],
	["03_JoaoBandeira.gif", "João Bandeira", "", ""], ["04LuisMagalhaes.gif", "Luís Magalhães", "CEO", "Team C"],
	["05_JoaoCosta.gif", "João Costa", "", ""], ["06_NunoDuarte.gif", "Nuno Duarte", "", ""],
	["07_PedroCarreira.gif", "Pedro Carreira", "", ""], ["08_JoaoSoares.gif", "João Soares", "", ""],
	["09_LilianaRibeiro.gif", "Liliana Ribeiro", "", ""], ["10_DiogoGomes.gif", "Diogo Gomes", "", ""],
	["11_MiguelNunes.gif", "Miguel Nunes", "", ""], ["12_RicardoLoureiro.gif", "Ricardo Loureiro", "", ""],
	["13_AnaAlves.gif", "Ana Alves", "", ""], ["14_BeatrizCavaleiro.gif", "Beatriz Cavaleiro", "", ""],
	["15_AndrePeixoto.gif", "André Peixoto", "", ""], ["16_MiguelSandim.gif", "Miguel Sandim", "", ""],
	["17_RicardoFigueiredo.gif", "Ricardo Figueiredo", "", ""], ["18_Matheus.gif", "Matheus Scarlatti", "", ""],
	["19_ClaudioMonteiro.gif", "Cláudio Monteiro", "", ""], ["20_AndreBordalo.gif", "André Bordalo", "", ""],
	["21_JoaoCardoso.gif", "João Cardoso", "", ""], ["22_CarolinaFaria.gif", "Carolina Faria", "", ""],
	["23_Guilherme.gif", "Guilherme", "", ""], ["24_AndreRegado.gif", "André Regado", "", ""],
	["25_AnaRitaFerreira.gif", "Ana Rita Ferreira", "", ""], ["26_BrunoAlves.gif", "Bruno Alves", "", ""],
	["27_JoaoPereira.gif", "João Pereira", "", ""], ["28_CarlosPereira.gif", "Carlos Pereira", "", ""],
	["29_JoseCardoso.gif", "José Cardoso", "", ""], ["30_AnaisDias.gif", "Anaís Dias", "", ""],
	["31_RaquelCorreia.gif", "Raquel Correia", "", ""], ["32_RitaLima.gif", "Rita Lima", "", ""],
	["33_DanielCouceiro.gif", "Daniel Couceiro", "", ""], ["34_JoaoFernandes.gif", "João Fernandes", "", ""]];
	
	$.each(team, function(index, info) {
		var div = $(document.createElement('DIV'));
		div.attr('class', 'col col-md-2 col-sm-3 col-xs-3 img-responsive');
		
		var overlay = $(document.createElement("DIV"));
		overlay.attr("class","team-member-overlay");
		
		var img = $(document.createElement("IMG"));
		img.attr('src','./img/team/' + info[0]);
		img.attr('alt', info[1]);
		img.attr('title', info[1]);
		img.attr("class", "team-member-img img-responsive");
		
		var memberInfo = $(document.createElement("DIV"));
		memberInfo.attr("class","member-info");
		
		var name = $(document.createElement('P'));
		name.html(info[1].length > 0 ? info[1] : 'Name');
		name.attr('class', 'member-name');
		var position = $(document.createElement('p'));
		position.html(info[2].length ? info[2] : 'Position');
		position.attr('class', 'member-position');
		var team = $(document.createElement('P'));
		team.html(info[3].length > 0 ? info[3] : 'Team X');
		team.attr('class', 'member-team');
		
		memberInfo.append(name);
		memberInfo.append(team);
		memberInfo.append(position);

		img.on("mouseenter", function() {
			OnShowTeamMemberInfo(img, overlay);
		});
		
		img.on("mouseleave", function() {
			OnHideTeamMemberInfo(img, overlay);
		});
		
		img.on("click", function() {
			OnToggleTeamMemberInfo(img, overlay);
		});

		var info = $(document.createElement("DIV"));
		info.attr('class', 'member-info-container');
		info.append(memberInfo);
		
		overlay.append(img);
		overlay.append(info);
		div.append(overlay);
		
		$("#team-pics").append(div);
	});
}

function OnShowTeamMemberInfo(img, overlay) {
	img.addClass('mouse-hover');
	overlay.addClass('mouse-hover');
}

function OnHideTeamMemberInfo(img, overlay) {
	img.removeClass('mouse-hover');
	overlay.removeClass('mouse-hover');
}

function OnToggleTeamMemberInfo(img, overlay) {
	img.toggleClass('mouse-hover');
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
