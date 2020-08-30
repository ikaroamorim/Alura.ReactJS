class Cliente{
    id;
    nome;
    cpf;
    conta;
}

class ContaCorrente{
    id;
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo>=valor){
            this.saldo -= valor;
        }
    }
}


const cliente1 = new Cliente();
const conta1 = new ContaCorrente();

cliente1.id = 1;
cliente1.nome= "Ikaro";
cliente1.cpf = 1231231230;
cliente1.conta = 121230;

conta1.id = 121230;
conta1.agencia = 1234;
conta1.saldo = 5439.90;

console.log(cliente1);
console.log(conta1);

conta1.sacar(123);

console.log(conta1);

