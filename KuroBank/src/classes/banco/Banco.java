package classes.banco;

import classes.clientes.Cliente;
import classes.clientes.ClienteBancario;
import classes.contas.Conta;
import interfaces.IConta;

import java.util.LinkedList;
import java.util.List;

public class Banco {
    private String nome;
    private List<IConta> Contas = new LinkedList<IConta>();
    private  List<Cliente> Clientes = new LinkedList<Cliente>();

    public Banco(String nome) {
        this.nome = setNome(nome);
    }

    private String setNome(String nome) {
        return this.nome = nome;
    }

    public String getNome() {
        return this.nome;
    }

    public void setContas(IConta conta) {
        this.Contas.add(conta);
    }

    public List<IConta> getContas() {
        return this.Contas;
    }

    public void setClientes(Cliente cliente) {
        this.Clientes.add(cliente);
    }

    public List<Cliente> getClientes() {
        return this.Clientes;
    }



    public List InfoComunsClienteBancario(ClienteBancario conta) {

        String nome = conta.getNome();
        int agencia = conta.getContaCorrente().getAgencia();

        int numeroContaCorrente= conta.getContaCorrente().getNumero();
        int digitoContaCorrente = conta.getContaCorrente().getDigito();
        double saldoContaCorrente = conta.getContaCorrente().getSaldo();

        int numeroContaPolpanca = conta.getContaPolpanca().getNumero();
        int digitoContaPolpanca = conta.getContaCorrente().getDigito();
        double saldoContaPolpanca = conta.getContaPolpanca().getSaldo();

        return new LinkedList<>(){{
            add(nome);
            add(agencia);

            add(numeroContaCorrente);
            add(digitoContaCorrente);
            add(saldoContaCorrente);

            add(numeroContaPolpanca);
            add(digitoContaPolpanca);
            add(saldoContaPolpanca);
        }};

/*
        System.out.printf("Titular: %s%n", conta.getNome());
        System.out.println(String.format("Agência: %d", conta.getContaCorrente().getAgencia()));
        System.out.println(String.format("Numero conta Corrente: %d",conta.getContaCorrente().getNumero()));
        System.out.println(String.format("Numero conta Polpança: %d", conta.getContaPolpanca().getNumero()));
        System.out.printf("Saldo conta Corrente: %.2f%n", conta.getContaCorrente().getSaldo());
        System.out.printf("Saldo conta Polpansa: %.2f%n", conta.getContaCorrente().getSaldo());*/

    }
}
