class Cliente {
    id;
    nome;
    cpf;
    conta;
}

class ContaCorrente {
    id;
    agencia;
    //campos privados não foram estabelecidos na linguagem ainda
    //#saldo = 0;
    _saldo = 0

    sacar(valor) {
        if(valor<=0 || this._saldo <= valor) return false;
        this._saldo -= valor;
        return true;
    }

    depositar(valor) {
        if (valor <= 0) return false;
        this._saldo += valor;
        console.log(this._saldo);
        return true;
    }
}


const cliente1 = new Cliente();
const conta1 = new ContaCorrente();

cliente1.id = 1;
cliente1.nome = "Ikaro";
cliente1.cpf = 1231231230;
cliente1.conta = 121230;

conta1.id = 121230;
conta1.agencia = 1234;
conta1.depositar(5439.90);

console.log(cliente1);
console.log(conta1);

conta1.sacar(123);

console.log(conta1);

