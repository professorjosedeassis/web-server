/** 
 * Criando um menu responsivo com jQuery
 * @author José de Assis
 * 13/04/2017
 */
$(document).ready(function(){
	//quando o objeto da classe .Mobile for clicado
	$('.Mobile').click(function(){
		// a linha abaixo altera o estado para nav > ul (1° nivel)
		$('nav > ul').slideToggle();		
	});
 	// a função abaixo resolve o problema de "sumir" o menu quando aumenta a resolução da tela responsivo -> desktop
	// (window).resize -> redimensionar a janela do navegador
	$(window).resize(function(){
		if($(window).width() > 480){ //se resolução maior que 480 px
			$('nav > ul').removeAttr('style');
		}
	});
 	//solução do 2° nível mobile (solucionar bug)
	/*	
	$('.Detalhes').click(function(){
		if($(window).width() <= 480){//só aplicar este efeito no mobile
			$('nav li:hover ul').slideToggle();
		}
	});
	*/
});
 
 
 
 
 
 