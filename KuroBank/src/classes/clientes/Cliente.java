package classes.clientes;

import classes.contas.ContaCorrente;
import classes.contas.ContaPolpanca;

public class Cliente {
    private final String nome;
    private final ContaCorrente contaCorrente;
    private final ContaPolpanca contaPolpanca;

    public Cliente(String nomeCliente) {
        this.nome = setNome(nomeCliente);
        this.contaCorrente = setContaCorrente();
        this.contaPolpanca = setContaPolpanca();
    }

    private String setNome(String nomeCliente) {
        return nomeCliente;
    }

    private ContaCorrente setContaCorrente(){
        return new ContaCorrente();
    }

    private ContaPolpanca setContaPolpanca(){
        return new ContaPolpanca();
    }
    public String getNome() {
        return this.nome;
    }

    public ContaCorrente getContaCorrente() {
        return this.contaCorrente;
    }

    public ContaPolpanca getContaPolpanca() {
        return this.contaPolpanca;
    }
}
