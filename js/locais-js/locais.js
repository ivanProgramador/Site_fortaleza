var intervalo = 3000;

function slide1(){

    document.getElementById("banner").src ="imagens/imagens-locais/forte.jpg";
    setTimeout("slide2()",intervalo);

}

function slide2(){

    document.getElementById("banner").src ="imagens/imagens-locais/local2.jpg";
    setTimeout("slide3()",intervalo);

}

function slide3(){

    document.getElementById("banner").src ="imagens/imagens-locais/local3.jpg";
    setTimeout("slide4()",intervalo);

}

function slide4(){

    document.getElementById("banner").src ="imagens/imagens-locais/mara.jpg";
    setTimeout("slide1()",intervalo);

}