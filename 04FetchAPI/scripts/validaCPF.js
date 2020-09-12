function verificaCPFInvalidos(cpf) {
  const cpfsInvalidos = [
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '00000000000',
  ];
  return cpfsInvalidos.indexOf(cpf) === -1;
}

function somaNumerosCPF(cpf, totalDigitos, peso) {
  let soma = 0;
  for (let indice = 1; indice <= totalDigitos; indice++) {
    soma += parseInt(cpf.substring(indice - 1, indice)) * (peso - indice);
  }
  return soma;
}

function verificaDigito(cpf, totalDigitos, peso, digitoVerificacao) {
  const soma = somaNumerosCPF(cpf, totalDigitos, peso);
  const resto = (soma * 10) % 11;
  return resto === digitoVerificacao;
}

function verificaPrimeiroDigito(cpf) {
  const peso = 11;
  const totalDigitosPrimeira = 9;
  const digitoVerificacao = parseInt(cpf.substring(9,10));

  return verificaDigito(cpf, totalDigitosPrimeira, peso, digitoVerificacao);
}

function verificaSegundoDigito(cpf) {
  const peso = 12;
  const totalDigitosSegunda = 10;
  const digitoVerificacao = parseInt(cpf.substring(10,11));

  return verificaDigito(cpf, totalDigitosSegunda, peso, digitoVerificacao);
}

function validaCPF(cpf) {
  return verificaCPFInvalidos(cpf) && verificaPrimeiroDigito(cpf) && verificaSegundoDigito(cpf);
}
