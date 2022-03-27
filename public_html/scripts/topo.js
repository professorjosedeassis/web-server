/**
 * Função jQuery para voltar ao topo
 * @author José de Assis
 * 26/04/2017
 */
 $(document).ready(function(){
	//função click -> quando o objeto identificado pela classe .Top for clicado
	$('.Top').click(function(){
		// 'html,body') -> destino
		// animate -> efeito deslizante "rolagem"
		// scrollTop: 0 -> subir a 0px do body
		// 'slow' -> efeito
		$('html,body').animate({scrollTop: 0},'slow');
	});
 });
