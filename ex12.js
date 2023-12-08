const valorEmMoedas = (n) => {
  const moedas = {
    1: 0,
    5: 0,
    10: 0,
    25: 0,
    100: 0,
    500: 0,
  };

  const denominacoes = Object.keys(moedas)
    .map(Number)
    .sort((a, b) => b - a);

  for (let denominacao of denominacoes) {
    while (n >= denominacao) {
      moedas[denominacao]++;
      n -= denominacao;
    }
  }

  return moedas;
};

console.log(valorEmMoedas(478));
