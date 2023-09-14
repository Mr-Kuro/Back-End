const {
  validaResultado,
  validadorParametros,
} = require("../utils/validators/calculadoraValidator.js");

class Calculadora {
  constructor(numero1, numero2) {
    this._numero1 = numero1;
    this._numero2 = numero2;
    this._resultado = 0;
  }

  somar() {
    this._resultado = this._numero1 + this._numero2;
  }

  subtrair() {
    this._resultado = this._numero1 - this._numero2;
  }

  multiplicar() {
    this._resultado = this._numero1 * this._numero2;
  }

  dividir() {
    this._resultado = this._numero1 / this._numero2;
  }

  get resultado() {
    return this._resultado;
  }

  limpar() {
    this._resultado = 0;
  }

  get numero1() {
    return this._numero1;
  }
  get numero2() {
    return this._numero2;
  }
}


function calcular(numero1, numero2, operacao) { // função que recebe os parâmetros e retorna o resultado
  let notValid = false;

  try {
    if (validadorParametros(numero1, numero2, operacao) !== true) {
      notValid = validadorParametros(numero1, numero2, operacao);
    }
  } catch (error) {
    console.log(error.message,);
    notValid = error;
    console.log(error);
  }

  const calculadora = new Calculadora(numero1, numero2);
  const resultado = calculadora.resultado;

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
      try {
        if (validaResultado(resultado) === true) {
          notValid = validaResultado(resultado);
        }
      } catch (error) {
        console.log(error.message);
        notValid = error;
      }
  }

  return new Promise((resolve, reject) => {
    notValid ? reject(notValid) : resolve({
      resultado: calculadora.resultado.toFixed(2),
      numero1: calculadora.numero1,
      numero2: calculadora.numero2,
      operacao: operacao
    });
})}

async function responser(req, res) {
  const { num_1, num_2, operacao } = req.body;

  try {
    const resultado = await calcular(num_1, num_2, operacao);
    res.json(resultado);
    console.log(resultado);
  } catch (error) {
    erro = new Error(error);
    res.status(404).json({
      error: error.message,
    });
  }
}


exports.responser = responser;
