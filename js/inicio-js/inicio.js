
var intervalo = 3000;

function slide1(){

    document.getElementById("banner").src ="imagens/imagens-inicio/orla.jpg";
    setTimeout("slide2()",intervalo);

}

function slide2(){

    document.getElementById("banner").src ="imagens/imagens-inicio/dragao.jpg";
    setTimeout("slide3()",intervalo);

}

function slide3(){

    document.getElementById("banner").src ="imagens/imagens-inicio/mercado_pinhoes.jpg";
    setTimeout("slide4()",intervalo);

}

function slide4(){

    document.getElementById("banner").src ="imagens/imagens-inicio/ponte.jpeg";
    setTimeout("slide1()",intervalo);

}