//Classe Abstrata

export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        if(this.constructor == Conta){
            throw new Error('Você não deveria instanciar um Objeto do tipo Conta')
        }

        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    //metodo abtrato
    sacar(valor) {
        throw new Error("O método Sacar é abstrato");
    }

    _sacar(valor, taxa) {
        if (this._saldo >= taxa * valor) {
            this._saldo -= taxa * valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    tranferir(valor, conta) {

        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);

    }
}