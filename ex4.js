const quadrado = (n) => {
  let num = n.toString().split('');
  let newNumber = '';
  for (var i = 0; i < num.length; i++) {
    newNumber += Number(num[i] * num[i]);
  }
  return Number(newNumber);
};

 
