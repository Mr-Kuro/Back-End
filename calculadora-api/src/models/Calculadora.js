
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

  limpar() {
    this._resultado = 0;
  }

  get numero1() {
    return String(this._numero1);
  }
  get numero2() {
    return String(this._numero2);
  }

  get resultado() {
    return parseFloat(this._resultado).toFixed(2);
  }
}

exports.Calculadora = Calculadora;