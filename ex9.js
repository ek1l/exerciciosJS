var a = 'a'.repeat(1000);
const verifyString = (str) => {
  let objStr = {};
  let arrTemp = [];
  let modifierString = str.toLowerCase().replaceAll(' ', '');

  for (let i = 0; i < modifierString.length; i++) {
    if (objStr.hasOwnProperty(modifierString[i])) {
      objStr[modifierString[i]]++;
    } else {
      objStr[modifierString[i]] = 1;
    }
  }

  for (let chave in objStr) {
    arrTemp.push(objStr[chave]);
    console.log(arrTemp);
  }

  let everyTrueOrFalse =
    arrTemp.length > 0 && arrTemp.every((elemento) => elemento === arrTemp[0]);

  return everyTrueOrFalse;
};