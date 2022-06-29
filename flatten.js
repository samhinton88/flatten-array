const flatten = (array) => {
  if (!Array.isArray(array)) {
    throw new Error("TypeError: argument to flatten must be an array");
  }

  const memo = [];

  const gatherElements = (item) => {
    if (Array.isArray(item)) {
      for (const subItem of item) {
        gatherElements(subItem);
      }
    } else {
      memo.push(item);
    }
  };

  gatherElements(array);

  return memo;
};

module.exports = flatten;
