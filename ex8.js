const author = (str) => {
  let modifierString = str.replaceAll(' ', ',').split(',');
  let nameAuthor = modifierString[modifierString.length - 1].toUpperCase();
  let nameAuthorAbreviator = `${nameAuthor},`;
  for (let i = 0; i < modifierString.length; i++) {
    if (modifierString[i].toUpperCase() !== nameAuthor) {
      nameAuthorAbreviator += `${modifierString[i][0].toUpperCase()}.`;
    }
  }
  return nameAuthorAbreviator;
};
