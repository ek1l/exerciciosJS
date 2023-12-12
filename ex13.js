const verifyNumber = (n) => {
  let arrNumberPar = [];
  let arrNumberImpar = [];
  let numberResultParArr;
  let numberResultImparArr;
  let verificador;
  n.toString()
    .split('')
    .forEach((numero, index) => {
      if (index % 2 === 0) {
        arrNumberPar.push(Number(numero));
      } else {
        arrNumberImpar.push(Number(numero));
      }
    });

  numberResultParArr = arrNumberPar.reduce(
    (accumulator, value) => accumulator + value * 3,
    0,
  );

  numberResultImparArr = arrNumberImpar.reduce(
    (accumulator, value) => accumulator + value,
    0,
  );

  if ((numberResultParArr + numberResultImparArr) % 10 === 0) {
    verificador = 0;
    return true;
  } else {
    verificador = ((numberResultParArr + numberResultImparArr) % 10) - 10;
    return false;
  }
};
