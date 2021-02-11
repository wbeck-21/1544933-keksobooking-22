const getRandomInteger = (begin, end, quantitySigns) => {
  if (begin >= 0 && end >= 0 && begin < end) {
    return parseFloat((Math.random() * (begin - end + 1) + end).toFixed(quantitySigns));
  }
  if (begin === end) {
    return begin;
  }
  console.log('Упс, что-то пошло не так...');
}

console.log(getRandomInteger(4.2, 4.2, 4));
