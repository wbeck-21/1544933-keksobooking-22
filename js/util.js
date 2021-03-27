const getRandomInteger = (begin, end, quantitySigns) => {
  if (begin >= 0 && end >= 0 && begin < end) {
    return parseFloat((begin + (Math.random() * ((end - begin)) + 1)).toFixed(quantitySigns));
  }
  if (begin === end) {
    return begin;
  }
  return null;
}


export { getRandomInteger };
