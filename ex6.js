const historyActualized = (str) => {
  let transformStr = str.replaceAll(' ', ',').toLowerCase().split(',');
  let reversedString = '';
  for (let i = 0; i < transformStr.length; i++) {
    reversedString += `${transformStr[i].split('').reverse().join('')} `;
  }
  return reversedString;
};

 
