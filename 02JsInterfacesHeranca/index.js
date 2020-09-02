import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);


const conta1 = new ContaCorrente(0, cliente1, 1001);
const conta2 = new ContaPoupanca(500, cliente2, 1002);

conta1.depositar(500);
conta1.sacar(100);

console.log(conta1);
console.log(conta2);