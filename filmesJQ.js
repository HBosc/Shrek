
function exibe_filme_maior(filmee){
    $("#msg-direito").css("display", "none");
    $("#conteudo-direito").css("display", "none");
    $("#conteudo-direito").fadeIn(2000);

    let filme = $(filmee);
    let capa_src = filme.find("img").attr("src");
    let titulo = filme.find(".titulo").text();
    let ano = filme.find(".ano").text();
    let diretor = filme.find(".diretor").text();
    let sinopse = filme.find(".sinopse").text();

    $("#visualiza-imagem").attr("src", capa_src);
    $("#visualiza-titulo").text(titulo);
    $("#visualiza-ano-diretor").text(ano + " - " + diretor);
    $("#visualiza-sinopse").text(sinopse);
}

function preencherLinhaFilmes1XML(xmlDoc) {
    let $xml = $(xmlDoc);
    let $filmes = $xml.find("filme");
    let filmes_obj = [];

    $filmes.each(function(){
        let filme = {
            "titulo": $(this).find('titulo').text(),
            "imgSrc": $(this).find('img_src').text(),
            "ano": $(this).find('ano').text(),
            "diretor": $(this).find('diretor').text(),
            "sinopse": $(this).find('sinopse').text()
        }
        filmes_obj.push(filme);
    });

    let linha_filmes1 = $(".linha-filmes").eq(0);
    linha_filmes1.find(".filme").each(function(i){
        let filme_atual = filmes_obj[i];
        $(this).find("img").attr("src", filme_atual.imgSrc);
        $(this).find(".titulo").text(filme_atual.titulo);
        $(this).find(".ano").text(filme_atual.ano);
        $(this).find(".diretor").text(filme_atual.diretor);
        $(this).find(".sinopse").text(filme_atual.sinopse);
    });
}

function preencherLinhaFilmes2JSON(json) {
    filmes_obj = json.filmes;

    let linha_filmes2 = $(".linha-filmes").eq(1);
    linha_filmes2.find(".filme").each(function(i){
        let filme_atual = filmes_obj[i];
        $(this).find("img").attr("src", filme_atual.imgSrc);
        $(this).find(".titulo").text(filme_atual.titulo);
        $(this).find(".ano").text(filme_atual.ano);
        $(this).find(".diretor").text(filme_atual.diretor);
        $(this).find(".sinopse").text(filme_atual.sinopse);
    });
}

$(document).ready(function(){
    let i;
    for (i = 1; i <= 8; i++) {
        let filme = "#filme"+i.toString();
        $(filme).click(function(){
            exibe_filme_maior(filme)
        });
    }
    
    $.get("data/filmeFirst.xml", function(data, status){
        preencherLinhaFilmes1XML(data);
    });

    $.get("data/filmeSecond.json", function(data, status){
        preencherLinhaFilmes2JSON(data);
    });
});
