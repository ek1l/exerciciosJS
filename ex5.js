const history = (str) => {
  const stre = str.replaceAll(' ', '').toLowerCase();
  let alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  let numAtual = 0;
  for (let i = 0; i < stre.length; i++) {
    if (alphabet.indexOf(stre[i]) >= numAtual) {
      numAtual = alphabet.indexOf(stre[i]);
    }
  }

  return alphabet[numAtual];
};
 