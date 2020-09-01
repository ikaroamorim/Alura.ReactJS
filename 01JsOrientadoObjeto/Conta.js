
export class Conta{
    _numero;
    _agencia;
    _cliente;
    _saldo = 0;

    set cliente(c){
        if( c instanceof Cliente){
            this._cliente = c;
        }
    }

    get cliente(){
        this._cliente;
    }

    //campos privados não foram estabelecidos na linguagem ainda
    //#saldo = 0;
    
    get saldo(){
        return this._saldo;
    }


    constructor(numero, agencia, cliente){
        this._numero = numero;
        this._agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroContas++;
    }

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