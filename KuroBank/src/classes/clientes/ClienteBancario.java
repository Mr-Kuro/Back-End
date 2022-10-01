package classes.clientes;

import classes.contas.ContaCorrente;
import classes.contas.ContaPolpanca;

public class ClienteBancario{
    private final Cliente cliente;

    public ClienteBancario(String nome) {
        this.cliente = this.setCliente(nome);
    }

    private Cliente setCliente(String nome) {
        return new Cliente(nome);
    }

    private Cliente getCliente() {
        return this.cliente;
    }

    public ContaCorrente getContaCorrente() {
        return this.getCliente().getContaCorrente();
    }

    public ContaPolpanca getContaPolpanca() {
        return this.getCliente().getContaPolpanca();
    }

    public String getNome(){
        return this.getCliente().getNome();
    }


    public void sacarContaCorrente(double valorSaque) {
        this.getCliente().getContaCorrente().sacar(valorSaque);
    }
    public void sacarContaPolpanca(double valorSaque) {
        this.getCliente().getContaPolpanca().sacar(valorSaque);
    }

    public void depositarContaCorrente(double valorDeposito) {
        this.getCliente().getContaCorrente().depositar(valorDeposito);
    }

    public void depositarContaPolpanca(double valorDeposito) {
        this.getCliente().getContaPolpanca().depositar(valorDeposito);
    }

    public void tranferirContaCorrente(double valorTransferencia, ClienteBancario contaDestino) {
        this.getCliente().getContaCorrente().sacar(valorTransferencia);
        contaDestino.getCliente().getContaCorrente().depositar(valorTransferencia);
    }

    public void tranferirContaPolpanca(double valorTransferencia, ClienteBancario contaDestino) {
        this.getCliente().getContaCorrente().sacar(valorTransferencia);
        contaDestino.getCliente().getContaCorrente().depositar(valorTransferencia);
    }

}
