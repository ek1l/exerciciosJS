const orderArrBidimension = (arr) => {
  if (!Array.isArray(arr)) return 'Somente array ';
  let arrayBidimensional = [...arr];
  let arrayInorder = [];

  for (let i = 0; i < arrayBidimensional.length; i++) {
    for (let j = 0; j < arrayBidimensional[i].length; j++) {
      arrayInorder.push(arrayBidimensional[i][j]);
    }
  }
  return arrayInorder.sort();
};
