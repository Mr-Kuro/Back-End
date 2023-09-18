const {
  validaResultado,
  validadorParametros,
} = require("../utils/validators/calculadoraValidator.js");
const { Calculadora } = require("../models/Calculadora.js");

function calcular(numero1, numero2, operacao) {
  numero1 = Number(numero1);
  numero2 = Number(numero2);
  
  // função que recebe os parâmetros e retorna o resultado
  let notValid = false;
  console.log("os parâmetros são: ", numero1, numero2, operacao)

  notValid = validadorParametros(numero1, numero2, operacao);
  notValid ? console.log(notValid) : console.log("Parâmetros válidos");

  const calculadora = new Calculadora(numero1, numero2);

  switch (operacao) {
    case "somar":
      calculadora.somar();
      break;
    case "subtrair":
      calculadora.subtrair();
      break;
    case "multiplicar":
      calculadora.multiplicar();
      break;
    case "dividir":
      calculadora.dividir();
      break;
    default:
      console.log("Operação inválida");
  }

  notValid = validaResultado(calculadora.resultado);
  notValid ? console.log(notValid) : console.log("Resultado válido");

  return new Promise((resolve, reject) => {
    notValid
      ? reject(notValid)
      : resolve({
          resultado: calculadora.resultado,
          numero_1: calculadora.numero1,
          numero_2: calculadora.numero2,
          operacao: operacao,
        });
  });
}

exports.calcular = calcular;
