/**
 * Fixando um objeto com jQuery (<nav>)
 * @author José de Assis
 * 13/04/2017
 */
  
 // este exemplo mostra o jQuery atuando diretamente no CSS
 // a linha abaixo obtem as coordenadas do objeto identificado pela classe .Menu e armazena estas coordenadas na variável posição
 //.offset().top -> distância do objeto até o topo da página
 var posicao = $('.Menu').offset().top;
 // a linha abaixo cria uma variável para manipular a classe que fixa o menu (Fixar) dentro do CSS
 //Fixar -> Menu
 var $meuMenu = $('.Menu');
 $(document).ready(function(){
	// função jQuery que manipula o scroll
	$(document).on('scroll', function(){
	//a estrutura abaixo compara a posição do objeto (.Menu) com o topo do site ao acionar o scroll (.on)
		// se posição menor ou igual ao topo do site
		if(posicao <= $(window).scrollTop()){
			$meuMenu.addClass('Fixar'); //fixa o menu
		}else{
			$meuMenu.removeClass('Fixar'); //fixa o menu
		}
	});	
 });
 
 
 
 
 
 
 
 
 
 
 
 
 
 