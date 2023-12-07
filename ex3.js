const reverseArray = (arr) => {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (var i = arr.length - 1; i > -1; i--) {
      newArr.push(arr[i]);
    }
  } else {
    return console.log('Somente array');
  }

  return newArr;
};

console.log(reverseArray(['Oh', 'Hi', 'Mark']));
