
$(document).ready(function(){

    $("#anuncio").text("CLICK to change color owo")

     .hide()
     .fadeIn(2000)
     .css("width", 500)
     .css("height", 500)
     .css("background-color", "black")
});

let colores = ["black", "purple", "white", "grey", "deeppink"];
let color = colores [Math.floor(Math.random() * colores.length)];


 $("#anuncio").on("click", function(){

    $("#anuncio").css("background-color", color)  
    color = colores [Math.floor(Math.random() * colores.length)];  

});

