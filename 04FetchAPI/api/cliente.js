const listarClientes = () => fetch('http://localhost:4000/clientes')
  .then((response) => response.json())
  .then((json) => json);

const cadastrarClientes = (nome, cpf) => {
  const json = JSON.stringify({
    nome: nome,
    cpf: cpf
  });
  return fetch('http://localhost:4000/clientes/cliente',{
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: json,
  }).then((resp) => resp.body);
};

/* Starting Server

cd .\server-petshop\
npm install ** caso não esteja instalado**
npm start

API Get Clientes: http://localhost:4000/clientes
*/
