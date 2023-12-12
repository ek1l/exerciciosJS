const recursiveString = (n) => {
  let str = '';
  let traco = '-';
  if (n >= 1) {
    if (n === 1) {
      traco = '';
    }
    str += `chunk${traco}${recursiveString(n - 1)}`;
  }  
  return str;
};

console.log(recursiveString(2));