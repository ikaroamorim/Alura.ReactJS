import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente(1, 'Ikaro', 1231231230);
const cliente2 = new Cliente(2, 'Tati', 3213213210);
const cliente3 = new Cliente(3, "Fernando", 2132132130)
const conta1 = new ContaCorrente(121230, 1234, cliente1);
const conta2 = new ContaCorrente(212103, 1234, cliente2);

//cliente1.id = 1;
//cliente1.nome = "Ikaro";
//cliente1.cpf = 1231231230;

//cliente2.id = 2;
//cliente2.nome = "Tati";
//cliente2.cpf = 3213213210;

//conta1.numero = 121230;
//conta1.agencia = 1234;
//conta1.cliente = cliente1;
//conta1.depositar(5439.90);

//conta2.numero = 212103;
//conta2.agencia = 1234;
//conta2.cliente = new Cliente();
//conta2.cliente = cliente2
//conta2.depositar(3389.90);

//conta2.cliente.id = 2;
//conta2.cliente.nome = "Tati";
//conta2.cliente.cpf = 3213213210;

console.log('Estado Inicial')
console.log(cliente1);
console.log(conta1);

console.log('Saque R$10.023,00')
conta1.sacar(10023);
console.log(conta1);

console.log('Transferência R$10.000,00')
conta1.transferir(10000, conta2)
console.log(conta1)
console.log(conta2)
console.log(cliente3)

console.log('Número de Contas')
console.log(ContaCorrente.numeroContas)
//adicionado o "type":"module" ao arquivo package.json