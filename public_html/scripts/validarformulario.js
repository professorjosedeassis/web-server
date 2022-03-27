/**
 * Validação de formulário
 * @author José de Assis
 * 27/04/2017
 */
 
 function validar(){
	//capturar o conteúdo das caixas de texto (input)
	//para capturar textos não é necessário converter a variável
	var nome = formulario_contato.nome.value;
	var email = formulario_contato.email.value;
	//validação de um campo vazio
	if(nome == ""){
		alert('preencha o campo com o seu nome');
		//a linha abaixo posiciona o cursor no nome
		formulario_contato.nome.focus();
		//a linha abaixo retorna um valor falso para o html não enviar o formulário sem a validação
		return false;
	}
	
	if(email == ""){
		alert('preencha o campo com o seu email');
		formulario_contato.email.focus();
		return false;
	}
	
	//validar nome completo
	if(nome.length < 10){
		alert('preencha o campo com o seu nome completo');
		formulario_contato.nome.focus();
		return false;
	}
	
 }
 
 
 
 
 