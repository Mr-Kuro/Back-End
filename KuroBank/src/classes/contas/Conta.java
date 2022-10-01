package classes.contas;

import classes.clientes.Cliente;
import interfaces.IConta;

import java.util.Random;

public abstract class Conta implements IConta {
// abstract define que por ser uma conta abstrata só quem extend dela irá poder usá-la

    private static final int AGENCIA_PADRAO = 00001;
    private static int SEQUENCIAL = 10000000;

    private int numero = 0;
    private int digito = 1;
    private double saldo;
    private static Cliente cliente;

    public Conta() {
        if (this.numero == 0) {
            this.numero = this.setNumero();
            this.digito = this.setDigito();
        }
    }
    private int setNumero(){
        return this.numero = this.SEQUENCIAL++;
    }

    private int setDigito(){
        if (this.SEQUENCIAL == 99999999) {
            this.SEQUENCIAL = 10000000;
            return this.digito++;
        }

        return this.digito;
    }

    @Override
    public void sacar(double valor) {
        this.saldo -= valor;
    }

    @Override
    public void depositar(double valor) {
        this.saldo += valor;
    }

    @Override
    public void tranferir(double valor, IConta contaDestino) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }

    public int getAgencia() {
        return this.AGENCIA_PADRAO;
    }

    public int getNumero() {
        return this.numero;
    }

    public int getDigito() {
        return this.digito;
    }

    public double getSaldo() {
        return saldo;
    }

}
