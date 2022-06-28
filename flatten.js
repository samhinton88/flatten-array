const flatten = (item, memo=[], calls=0) => {
  if (calls === 0 && !Array.isArray(item)) {
    throw new Error('TypeError')
  } 
  
  if (Array.isArray(item)) {
      for (const subItem of item) {
        flatten(subItem, memo, calls + 1)
      }
  } else { 
      memo.push(item)
  }

  return memo
}

module.exports = flatten;
