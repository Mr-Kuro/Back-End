package interfaces;

import classes.clientes.Cliente;

public interface IConta {
     void  sacar(double valor);
     void  depositar(double valor);
     void  tranferir(double valor, IConta contaDestino);



}
