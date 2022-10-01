import classes.banco.Banco;
import classes.clientes.ClienteBancario;

import java.util.List;

public class Main {
    public static void main(String[] args) {

        ClienteBancario anderson = new ClienteBancario("Anderson Santos Queiroz");
        ClienteBancario larissa = new ClienteBancario("Luiza Larissa De Brito Bispo");
        Banco santander = new Banco("Santander Bank");

        anderson.getContaCorrente().depositar(400d);
        anderson.getContaCorrente().sacar(50d);
        anderson.getContaCorrente().tranferir(150, larissa.getContaPolpanca());
        System.out.println(anderson.getContaCorrente());


        System.out.println("----------------");
        larissa.getContaCorrente().depositar(1000d);
        larissa.getContaCorrente().sacar(10d);
        larissa.getContaCorrente().tranferir(500d, anderson.getContaPolpanca());
        System.out.println(larissa.getContaCorrente());



        System.out.println("----------------\n");
        List infoAnderson = santander.InfoComunsClienteBancario(anderson);

        System.out.println();
        System.out.printf("Titular: %s%n", infoAnderson.get(0));
        System.out.println(String.format("Agência: %d", infoAnderson.get(1)));
        System.out.println(String.format("Numero conta Corrente: %s",infoAnderson.get(2)) +"-"+ infoAnderson.get(3));
        System.out.printf(String.format("Saldo conta Corrente: %.2f%n", infoAnderson.get(4))+"\n");
        System.out.println(String.format("Numero conta Polpança: %s", infoAnderson.get(5)) +"-"+ infoAnderson.get(6));
        System.out.printf("Saldo conta Polpansa: R$ %.2f%n", infoAnderson.get(7));

        System.out.println("----------------\n");

        List infoLarissa = santander.InfoComunsClienteBancario(larissa);
        System.out.println();
        System.out.printf("Titular: %s%n", infoLarissa.get(0));
        System.out.println(String.format("Agência: %d", infoLarissa.get(1)));
        System.out.println(String.format("Numero conta Corrente: %s",infoLarissa.get(2)) +"-"+ infoLarissa.get(3));
        System.out.printf(String.format("Saldo conta Corrente: %.2f%n", infoLarissa.get(4))+"\n");
        System.out.println(String.format("Numero conta Polpança: %s", infoLarissa.get(5)) +"-"+ infoLarissa.get(6));
        System.out.printf("Saldo conta Polpansa: R$ %.2f%n", infoLarissa.get(7));
    }
}