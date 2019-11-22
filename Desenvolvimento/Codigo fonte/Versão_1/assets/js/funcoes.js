$(function () {

	$("#rg").mask('000000000000S')
	$("#cpf").mask('000000000');
	$("#celular").mask("(21)000 000")
	$("#telefone").mask("(+258) 800 000 000")
	//$("#cep").mask("00000-000")
});
$(function formatar(mascara, documento) {
	var i = documento.value.length;
	var saida = mascara.substring(0, 1);
	var texto = mascara.substring(i)
	if (texto.substring(0, 1) != saida) {
		documento.value += texto.substring(0, 1);
	}
});

$(function () {
	var options = {
		onKeyPress: function (cpfcnpj, e, field, options) {
			var masks = ['000.000.000-000', '000.000.000/0000-00'];
			var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
			$('.cpfcnpj').mask('000000000000S');
		}
	};

	$('.cpfcnpj').mask('000000000000S');

});