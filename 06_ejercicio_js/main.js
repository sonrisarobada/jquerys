
$("#cerrar").on("click", function(){

    $("#banner").remove();
});

$("img").on("click", function(){

    $(this).replaceWith("<div class = 'texto'>Añadido al carro.</div>");
});