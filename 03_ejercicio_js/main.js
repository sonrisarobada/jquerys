
//imagen 1
$("#elem1").hover(function(){
    $("#contenedor2 img").attr("src", "img/arbol.jpg")
    $("#elem1").addClass("destacar")
},
    function(){
    $("#contenedor2 img").attr("src", "img/blanco.jpg")
    $("#elem1").removeClass("destacar")
})

//imagen 2
$("#elem2").hover(function(){
    $("#contenedor2 img").attr("src", "img/lago.jpg")
    $("#elem2").addClass("destacar")
},
    function(){
    $("#contenedor2 img").attr("src", "img/blanco.jpg")
    $("#elem2").removeClass("destacar")
})

//imagen 3
$("#elem3").hover(function(){
    $("#contenedor2 img").attr("src", "img/rio.jpg")
    $("#elem3").addClass("destacar")
},
    function(){
    $("#contenedor2 img").attr("src", "img/blanco.jpg")
    $("#elem3").removeClass("destacar")
})

//imagen 4
$("#elem4").hover(function(){
    $("#contenedor2 img").attr("src", "img/sol.jpg")
    $("#elem4").addClass("destacar")
},
    function(){
    $("#contenedor2 img").attr("src", "img/blanco.jpg")
    $("#elem4").removeClass("destacar")
})