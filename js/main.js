const getRandomInteger = (begin, end, quantitySigns) => {
  if (begin >= 0 && end >= 0 && begin < end) {
    return parseFloat((begin + (Math.random() * (begin - end))).toFixed(quantitySigns));
  }
  if (begin === end) {
    return begin;
  }
  console.log('Упс, что-то пошло не так...');
}

console.log(getRandomInteger(4.2, 4.6, 4));
