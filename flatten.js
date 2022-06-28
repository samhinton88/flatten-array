const flatten = (item, memo=[]) => {
  if (Array.isArray(item)) {
      for (const subItem of item) {
        flatten(subItem, memo)
      }
  } else { 
      memo.push(item)
  }

  return memo
}

module.exports = flatten;
