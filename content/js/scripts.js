var team = [
    ["28_CarlosPereira.gif", "Carlos Pereira", "", "Team A", "Team A"],
    ["19_ClaudioMonteiro.gif", "Cláudio Monteiro", "", "Team A", "Team A"],
    ["03_JoaoBandeira.gif", "João Bandeira", "", "Team A", "Team A"],
    ["05_JoaoCosta.gif", "João Costa", "", "Team A", "Team A"],
    ["27_JoaoPereira.gif", "João Pereira", "", "Team A", "Team A"],
    ["29_JoseCardoso.gif", "José Cardoso", "Team Leader", "Team A", "Team A"],
    ["17_RicardoFigueiredo.gif", "Ricardo Figueiredo", "", "Team A", "Team A"],

    ["30_AnaisDias.gif", "Anaís Dias", "COO - Team Leader", "Team B", "Board Team B"],
    ["33_DanielCouceiro.gif", "Daniel Couceiro", "", "Team B", "Team B"],
    ["11_MiguelNunes.gif", "Miguel Nunes", "", "Team B", "Team B"],
    ["34_JoaoFernandes.gif", "João Fernandes", "", "Team B", "Team B"],
    ["07_PedroCarreira.gif", "Pedro Carreira", "", "Team B", "Team B"],
    ["12_RicardoLoureiro.gif", "Ricardo Loureiro", "", "Team B", "Team B"],
    ["32_RitaLima.gif", "Rita Lima", "", "Team B", "Team B"],

    ["25_AnaRitaFerreira.gif", "Ana Rita Ferreira", "Team Leader", "Team C", "Team C"],
    ["01_AndrePires.gif", "Andre Pires", "", "Team C", "Team C"],
    ["21_JoaoCardoso.gif", "João Cardoso", "", "Team C", "Team C"],
    ["08_JoaoSoares.gif", "João Soares", "", "Team C", "Team C"],
    ["09_LilianaRibeiro.gif", "Liliana Ribeiro", "", "Team C", "Team C"],
    ["04_LuisMagalhaes.gif", "Luís Magalhães", "CEO", "Team C", "Board Team C"],

    ["20_AndreBordalo.gif", "André Bordalo", "", "Team D", "Team D"],
    ["24_AndreRegado.gif", "André Regado", "", "Team D", "Team D"],
    ["10_DiogoGomes.gif", "Diogo Gomes", "", "Team D", "Team D"],
    ["16_MiguelSandim.gif", "Miguel Sandim", "Team Leader", "Team D", "Team D"],
    ["06_NunoDuarte.gif", "Nuno Duarte", "", "Team D", "Team D"],
    ["02_VitorTeixeira.gif", "Vítor Teixeira", "", "Team D", "Team D"],

    ["13_AnaAlves.gif", "Ana Alves", "", "Multimedia", "Multimedia"],
    ["15_AndrePeixoto.gif", "André Peixoto", "2nd CMO", "Multimedia", "Board Multimedia"],
    ["14_BeatrizCavaleiro.gif", "Beatriz Cavaleiro", "CMO", "Multimedia", "Board Multimedia"],
    ["26_BrunoAlves.gif", "Bruno Alves", "", "Multimedia", "Multimedia"],
    ["18_Matheus.gif", "Matheus Scarlatti", "2nd CFO", "Multimedia", "Board Multimedia"],
    ["31_RaquelCorreia.gif", "Raquel Correia", "CFO", "Multimedia", "Board Multimedia"],

    ["22_CarolinaFaria.gif", "Carolina Faria", "CCO", "Design", "Board Design"],
    ["23_Guilherme.gif", "Guilherme", "", "Design", "Design"]
];

$(document).ready(function () {

    CreateTeamMemberBtns();

    CreateTeamFilters();

    CreateMenuBehavior();

    CreateVideoBehavior();

    CreateSmoothScrollBehavior();
});

function CreateSmoothScrollBehavior() {

    var htmlBody = $('html,body');

    $('a.smooth-scroll').on('click', function (event) {
        var href = $.attr(this, 'href');
        if (href.length > 0) {
            event.preventDefault();
            htmlBody.animate({scrollTop: $(href).offset().top}, 400, "swing", function () {
                window.location.hash = href;
            });
        }
    });
}

function CreateTeamMemberBtns() {

    $.each(team, function (index, info) {
        var gif = info[0];
        var name = info[1];
        var position = info[2];
        var visualTeam = info[3];
        var teams = info[4];

        var outerCol = $(document.createElement('DIV'));
        var attrClass = 'col col-md-2 col-sm-3 col-xs-4 img-responsive team-member-img-col';
        outerCol.attr('class', attrClass);
        outerCol.attr('team', teams);

        var overlay = $(document.createElement("DIV"));
        overlay.attr("class", "team-member-overlay");

        /* Creating Member Image */
        var img = $(document.createElement("IMG"));
        img.attr('src', 'content/img/team/' + gif);
        img.attr('alt', name);
        img.attr('title', name);
        img.attr("class", "team-member-img img-responsive");

        var pName = $(document.createElement('P'));
        pName.html(name.length > 0 ? name : 'Name');
        pName.attr('class', 'member-name');

        var pPosition = $(document.createElement('p'));
        pPosition.html(position.length ? position : '');
        pPosition.attr('class', 'member-position');

        var pTeam = $(document.createElement('P'));
        pTeam.html(visualTeam.length > 0 ? visualTeam : 'Team X');
        pTeam.attr('class', 'member-team');
        var infoElem = $(document.createElement("DIV"));
        infoElem.attr('class', 'member-info');
        // infoElem.append(tableAlign);

        overlay.on("mouseenter", function () {
            OnShowTeamMemberInfo(tableAlign);
        });

        overlay.on("mouseleave", function () {
            OnHideTeamMemberInfo(tableAlign);
        });

        overlay.on("click", function () {
            OnMemberInfoClick(tableAlign);
        });

        infoElem.append(pName);
        infoElem.append(pTeam);
        infoElem.append(pPosition);

        overlay.append(img);
        overlay.append(infoElem);
        outerCol.append(overlay);

        $("#team-pics").append(outerCol);
    });
}

function OnShowTeamMemberInfo(elem) {
    elem.addClass('mouse-hover');
}

function OnHideTeamMemberInfo(elem) {
    elem.removeClass('mouse-hover');
}

function OnMemberInfoClick(elem) {
    elem.toggleClass('mouse-clicked');
    window.setTimeout(function () {
        OnMemberInfoCancelClick(elem)
    }, 2000);
}

function OnMemberInfoCancelClick(elem) {
    elem.toggleClass('mouse-clicked');
}

function CreateTeamFilters() {

    var listItems = $('#our-team').find('.team-filter li');
    var pics = $('#team-pics').find('.col.team-member-img-col');

    $.each(listItems, function (index, elem) {

        var item = $(elem);
        var filterLink = $(item.children('a')[0]);
        var filter = filterLink.attr('title');

        filterLink.on('click', function (event) {
            event.preventDefault();
            for (var i = 0; i < listItems.length; i++) {
                $(listItems[i]).removeClass('active');
            }
            item.addClass('active');
            OnTeamFilterClicked(filter, pics);
        });
    });
}

function OnTeamFilterClicked(filter, pics) {
    var all = (filter == 'All');
    for (var i = 0; i < pics.length; i++) {

        var pic = $(pics[i]);
        var team = pic.attr('team');

        if (all || team.indexOf(filter) > -1) {
            //console.log(pic);
            pic.removeClass('hide');
        }
        else {
            pic.addClass('hide');
        }
    }
}

function CreateMenuBehavior() {

    $('#sidebar-toggle').on('click', function () {
        $('#sidebar-menu').toggleClass('sidebar-menu-open');
    });

    $('#sidebar-menu').find('a').on('click', function () {
        $('#sidebar-menu').toggleClass('sidebar-menu-open');
    });

    $('#topbar-toggle').on('click', function () {
        var $topbarMenu = $('#topbar-menu');
        $topbarMenu.toggleClass('topbar-menu-open');
        $topbarMenu.find('.topbar-menu-wrap').toggleClass('open');
    });

    $('#topbar-menu').find('a').on('click', function () {
        var $topbarMenu = $('#topbar-menu');
        $topbarMenu.toggleClass('topbar-menu-open');
        $topbarMenu.find('.topbar-menu-wrap').toggleClass('open');
    });
}

function CreateVideoBehavior() {
    $(window).on('resize', function () {
        $(".covervideo").height($("#videocompany").height());
    });
    $(".coverVideo").height($("#videoCompany").height());
}
