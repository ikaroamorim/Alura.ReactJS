export class ContaCorrente {
    numero;
    agencia;
    cliente;

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

    transferir(valor, conta){
        if(valor <= 0 || !this.sacar(valor)) return false;
        conta.depositar(valor);
        return true;
    }
}