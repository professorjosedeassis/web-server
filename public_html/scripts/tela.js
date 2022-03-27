//obtendo a resolução do navegador
// var cria uma variável
// não usar acentos, caracteres especiais e espaço para criar nome de variável
// = atribui um valor a variável
// screen.width (obtem a largura total)
// screen.height (obtem a altura total)
/*
var largura = screen.width;
var altura = screen.height;
*/
//obtendo a largura e altura mesmo com redimensionamento
var largura = (window.innerWidth > 0) ? window.innerWidth : screen.width;
var altura = (window.innerHeight > 0) ? window.innerHeight : screen.height;

document.write(largura  + " x " + altura);
