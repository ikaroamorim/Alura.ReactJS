listarClientes = () => fetch('http://localhost:4000/clientes')
  .then((response) => response.json())
  .then((json) => json);
