import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {
    constructor(cliente) {
        super(0, cliente, 100)
    }

    sacar(valor){
        const taxa = 1.02;
        return this._sacar(valor, taxa)
    }
}