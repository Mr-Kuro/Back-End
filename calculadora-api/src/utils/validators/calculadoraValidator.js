
function validadorParametros(numero1, numero2, operacao){  // verifica se a operação é válida
  const operacoes = ['somar', 'subtrair', 'multiplicar', 'dividir'];

  if(numero1 == null || numero1 == undefined || numero2 == null || numero2 == undefined || operacao == null || operacao == undefined){
    throw new Error('Verifique os parametros passados no body')
  } else if (!operacoes.includes(operacao)) {
    throw new Error(`Operação inválida '${operacao}!`)
  } else if (typeof numero1 !== "number" || typeof numero2 !== "number") {
    throw new Error('Os números devem ser do tipo number!')
  } else if (operacao === operacoes[3] && numero2 === 0){
    throw new Error('Não é possível dividir por zero!')
  }else {
    return false
  }
}


function validaResultado(resultado) { // verifica se o resultado é válido
  if (resultado == null || resultado == undefined) {
    throw new Error('O resultado não pode ser nulo ou indefinido!')
  }
  else {
    return false
  }
}
module.exports = {
  validadorParametros,
  validaResultado }