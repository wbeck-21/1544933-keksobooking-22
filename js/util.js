const getRandomInteger = (begin, end, quantitySigns) => {
  if (begin >= 0 && end >= 0 && begin < end) {
    return parseFloat((begin + (Math.random() * ((end - begin)) + 1)).toFixed(quantitySigns));
  }
  if (begin === end) {
    return begin;
  }
  return null;
}

const generateAvatar = () => {
  return 'img/avatars/user0' + getRandomInteger(1, 8, 0) + '.png';
}

const generateX = () => {
  return getRandomInteger(35.65000, 35.70000, 5);
}

const generateY = () => {
  return getRandomInteger(139.70000, 139.80000, 5);
}

const generateTitle = (data) => {
  let getIndexTitle = Math.floor(Math.random() * data.length);
  let title = data[getIndexTitle];

  return title;
}

const generateDiscription = (data) => {
  let getIndexDescription = Math.floor(Math.random() * data.length);
  let description = data[getIndexDescription];

  return description;
}

const generateAddress = () => {
  let x = generateX();
  let y = generateY();

  return 'location.' + x + ', location.' + y;
}

const generatePrice = () => {
  return getRandomInteger(0, 1000000, 0);
}

const generateType = (data) => {
  let getIndexType = Math.floor(Math.random() * data.length);
  let type = data[getIndexType];

  return type;
}

const generateRooms = () => {
  return getRandomInteger(1, 100, 0);
}

const generateGuests = () => {
  return getRandomInteger(1, 10, 0);
}

const generateCheckIn = (data) => {
  let getIndexCheckIn = Math.floor(Math.random() * data.length);
  let checkIn = data[getIndexCheckIn];

  return checkIn;
}

const generateCheckOut = (data) => {
  let getIndexCheckOut = Math.floor(Math.random() * data.length);
  let checkOut = data[getIndexCheckOut];

  return checkOut;
}

const generateFeatures = (data) => {
  let features = [];
  let n = Math.floor(Math.random() * data.length) + 1; // длина массива в полуинтервале [1; n)

  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * data.length); // случайный индекс в пределах [0; n-длина массива)

    features.push(data[randomIndex]); // с помощью метода push() записываем значение, взятое из массива а с помощью randomIndex
    data.splice(randomIndex, 1); // удаление значения с индексом randomIndex из массива possibleFeatures
  }

  return features;
}

const generatePhotos = (data) => {
  let photos = [];
  let n = Math.floor(Math.random() * data.length) + 1;

  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * data.length);

    photos.push(data[randomIndex]);
    data.splice(randomIndex, 1);
  }

  return photos;
}

// Перевод страницы в неактивное состояние

const advertismentForm = document.querySelector('.ad-form');
advertismentForm.classList.add('ad-form--disabled');
for (let i = 0; i < advertismentForm.length; i++) {
  const advertismentFieldset = advertismentForm.childNodes[i];

  console.log(advertismentFieldset);

  // Не работает
  advertismentFieldset.setAttribute('disabled', 'disabled');
}




export { generateAvatar };
export { generateTitle };
export { generateX };
export { generateY };
export { generateDiscription };
export { generateAddress };
export { generatePrice };
export { generateType };
export { generateRooms };
export { generateGuests };
export { generateCheckIn };
export { generateCheckOut };
export { generateFeatures };
export { generatePhotos };
