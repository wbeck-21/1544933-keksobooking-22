import {getRandomInteger} from './util.js';

const allTitles = [
  'Квартира 1 в центре Токио',
  'Квартира 2 в центре Токио',
  'Квартира 3 в центре Токио',
  'Дом 1 в центре Токио',
  'Дом 2 в центре Токио',
  'Бунгало 1 в центре Токио',
];

const allDescriptions = [
  'Идеально для свидания',
  'Подходит для семейного отдыха',
  'Для большой компании друзей',
];

const allTypes = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const allCheckIn = [
  '12:00',
  '13:00',
  '14:00',
];

const allCheckOut = [
  '12:00',
  '13:00',
  '14:00',
];

const possibleFeatures = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditione',
];

const possiblePhotos = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const generateAvatar = () => {
  return 'img/avatars/user0' + getRandomInteger(1, 8, 0) + '.png';
}

const generateX = () => {
  return getRandomInteger(35.65000, 35.70000, 5);
}

const generateY = () => {
  return getRandomInteger(139.70000, 139.80000, 5);
}

const generateTitle = () => {
  let getIndexTitle = Math.floor(Math.random() * allTitles.length);
  let title = allTitles[getIndexTitle];

  return title;
}

const generateDiscription = () => {
  let getIndexDescription = Math.floor(Math.random() * allDescriptions.length);
  let description = allDescriptions[getIndexDescription];

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

const generateType = () => {
  let getIndexType = Math.floor(Math.random() * allTypes.length);
  let type = allTypes[getIndexType];

  return type;
}

const generateRooms = () => {
  return getRandomInteger(1, 100, 0);
}

const generateGuests = () => {
  return getRandomInteger(1, 10, 0);
}

const generateCheckIn = () => {
  let getIndexCheckIn = Math.floor(Math.random() * allCheckIn.length);
  let checkIn = allCheckIn[getIndexCheckIn];

  return checkIn;
}

const generateCheckOut = () => {
  let getIndexCheckOut = Math.floor(Math.random() * allCheckOut.length);
  let checkOut = allCheckOut[getIndexCheckOut];

  return checkOut;
}

const generateFeatures = () => {
  let features = [];
  let n = Math.floor(Math.random() * possibleFeatures.length) + 1; // длина массива в полуинтервале [1; n)

  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * possibleFeatures.length); // случайный индекс в пределах [0; n-длина массива)

    features.push(possibleFeatures[randomIndex]); // с помощью метода push() записываем значение, взятое из массива а с помощью randomIndex
    possibleFeatures.splice(randomIndex, 1); // удаление значения с индексом randomIndex из массива possibleFeatures
  }

  return features;
}

const generatePhotos = () => {
  let photos = [];
  let n = Math.floor(Math.random() * possiblePhotos.length) + 1;

  for (let i = 0; i < n; i++) {
    let randomIndex = Math.floor(Math.random() * possiblePhotos.length);

    photos.push(possiblePhotos[randomIndex]);
    possiblePhotos.splice(randomIndex, 1);
  }

  return photos;
}


const generateObj = () => {
  let obj = {};

  obj.author = {};
  obj.author.avatar = generateAvatar();

  obj.offer = {};
  obj.offer.title = generateTitle();
  obj.offer.descriptions = generateDiscription();
  obj.offer.address = generateAddress();
  obj.offer.price = generatePrice();
  obj.offer.type = generateType();
  obj.offer.rooms = generateRooms();
  obj.offer.guests = generateGuests();
  obj.offer.checkin = generateCheckIn();
  obj.offer.checkout = generateCheckOut();
  obj.offer.features = generateFeatures();
  obj.offer.photos = generatePhotos();

  obj.location = {};
  obj.location.x = generateX();
  obj.location.y = generateY();

  return obj;
}


const generateData = (n) => {
  let data = [];

  for (let i = 0; i < n; i++) {
    data[i] = generateObj();
  }

  return data;
}

export {generateData};