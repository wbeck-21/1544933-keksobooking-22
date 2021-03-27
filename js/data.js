import { getRandomInteger } from './util.js';

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

const generateAvatar = () => 'img/avatars/user0' + getRandomInteger(1, 8, 0) + '.png';

const generateX = () => getRandomInteger(35.65000, 35.70000, 5);

const generateY = () => getRandomInteger(139.70000, 139.80000, 5);


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

const generatePrice = () => getRandomInteger(0, 1000000, 0);


const generateType = (data) => {
  let getIndexType = Math.floor(Math.random() * data.length);
  let type = data[getIndexType];

  return type;
}

const generateRooms = () => getRandomInteger(1, 100, 0);

const generateGuests = () => getRandomInteger(1, 10, 0);

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

const generateDataItem = () => {
  let obj = {};

  obj.author = {};
  obj.author.avatar = generateAvatar();

  obj.offer = {};
  obj.offer.title = generateTitle(allTitles);
  obj.offer.descriptions = generateDiscription(allDescriptions);
  obj.offer.address = generateAddress();
  obj.offer.price = generatePrice();
  obj.offer.type = generateType(allTypes);
  obj.offer.rooms = generateRooms();
  obj.offer.guests = generateGuests();
  obj.offer.checkin = generateCheckIn(allCheckIn);
  obj.offer.checkout = generateCheckOut(allCheckOut);
  obj.offer.features = generateFeatures(possibleFeatures);
  obj.offer.photos = generatePhotos(possiblePhotos);

  obj.location = {};
  obj.location.x = generateX();
  obj.location.y = generateY();

  return dataItem;
}

const generateDataList = () => {
  const dataList = [];

  for (let i = 0; i < 10; i++) {
    const dataItem = generateDataItem();

    dataList.push(dataItem);
  }
}

export { generateDataList };

