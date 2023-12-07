const coords = (arr) => {
  let arrayCoords = [];

  for (var i = 0; i <= arr[0]; i++) {
    for (var j = 0; j <= arr[1]; j++) {
      arrayCoords.push([i, j]);
    }
  }
  return arrayCoords;
};
