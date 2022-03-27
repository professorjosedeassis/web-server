/**
 * Criando um simples slide com efeito fade (esmaecer)
 * @author José de Assis
 * 12/04/2017
 */

//criando uma função JS com elementos jQuery
function slider(){
	// a variável abaixo é usada para armazenar o slide ativo <li>
	var ativo = $("#slider .Ativo");
	// next -> variável criada para identificar o próximo elemento <li>
	// ativo.next().length -> verifica se existe o próximo elemento <li> -- equivale a condição da estrutura if
	//? -> equivale a estrututa if
	// ativo.next() -> condição verdadeira
	//: -> equivale ao else
	//$("#slider li:first") -> condição falsa
	// resumindo: a variável next recebe o estado do <li> ativo
	var next = ativo.next().length ? ativo.next() : $("#slider li:first");
	//a linha abaixo adiciona a classe Ativo para o próximo elemento <li>
	//fadeIn() -> efeito de transição para exibir o próximo slide <li>
	next.addClass('Ativo').fadeIn();
	//a linha abaixo remove a classe do elemento atual <li> para mostrar o próximo elemento (lógica usada neste slide)
	ativo.removeClass('Ativo').fadeOut();
}

//criando um temporizador jQuery para a função slider (JS)
$(document).ready(function(){
	// a linha abaixo aplica um efeito fade no 1° <li> "ativo"
	$("#slider li:first").fadeIn();
	// a linha abaixo cria um delay de 3s (1000ms = 1s) na função Java Script de nome slider()
	setInterval("slider()",3000);
});






