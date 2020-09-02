import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./Conta/ContaCorrente.js"
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from './Conta/ContaSalario.js';
import {Gerente} from './Funcionario/Gerente.js';
import {Diretor} from './Funcionario/Diretor.js';
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const cliente1 = new Cliente("Ricardo", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha('123456789')
const gerente = new Gerente("Carlos", 5000, 12345678900);

const cliente = new Cliente("Lais", 12345678900, "password")

const conta1 = new ContaCorrente(0, cliente1, 1001);
const conta2 = new ContaPoupanca(500, cliente2, 1002);

const estaLogado = SistemaAutenticacao.login(cliente, "password")
console.log(estaLogado)