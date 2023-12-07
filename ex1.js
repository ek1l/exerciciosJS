const media = (...args) => {
  let arr = [...args].reduce(
    (accumulator, currentValue) => accumulator + currentValue / args.length,
    0,
  );

  return parseFloat(arr).toFixed(2);
};
