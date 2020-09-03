const informacoesCliente = [
  {
    cpf: 12312312300,
    nome: 'Joao da Silva',
  }, {
    cpf: 32132132100,
    nome: 'Monica Magalhaes',
  },
];

const corpoTabela = document.querySelector('[data-conteudo-tabela]');

const exibeCliente = (cpf, nome) => {
  const linha = document.createElement('tr');

  const conteudoLinha = `
        <td>${cpf}</td>
        <td>${nome}</td>
    `;

  linha.innerHTML = conteudoLinha;
  return linha;
};

informacoesCliente.forEach((indice) => {
  corpoTabela.appendChild(exibeCliente(indice.cpf, indice.nome));
});
