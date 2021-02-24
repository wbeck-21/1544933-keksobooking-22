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

const generateTitle = () => {
  let allTitles = [
    'Квартира 1 в центре Токио',
    'Квартира 2 в центре Токио',
    'Квартира 3 в центре Токио',
    'Дом 1 в центре Токио',
    'Дом 2 в центре Токио',
    'Бунгало 1 в центре Токио',
  ];

  let getIndexTitle = Math.floor(Math.random() * allTitles.length);
  let title = allTitles[getIndexTitle];

  return title;
}

const generateDiscription = () => {
  let allDescriptions = [
    'Идеально для свидания',
    'Подходит для семейного отдыха',
    'Для большой компании друзей',
  ];

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
  let allTypes = [
    'palace',
    'flat',
    'house',
    'bungalow',
  ];

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
  let allCheckIn = [
    '12:00',
    '13:00',
    '14:00',
  ];

  let getIndexCheckIn = Math.floor(Math.random() * allCheckIn.length);
  let checkIn = allCheckIn[getIndexCheckIn];

  return checkIn;
}

const generateCheckOut = () => {
  let allCheckOut = [
    '12:00',
    '13:00',
    '14:00',
  ];

  let getIndexCheckOut = Math.floor(Math.random() * allCheckOut.length);
  let checkOut = allCheckOut[getIndexCheckOut];

  return checkOut;
}

const generateFeatures = () => {
  let possibleFeatures = [
    'wifi',
    'dishwasher',
    'parking',
    'washer',
    'elevator',
    'conditione',
  ];

  let features = [];
  let n = Math.floor(Math.random() * possibleFeatures.length);

  for (let i = 0; i < n; i++) {
    let feature = possibleFeatures.splice(n, n);
    features[0] = feature;
  }

  return features;
}

const generatePhotos = () => {
  let possiblePhotos = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
  ];

  let photos = [];
  let n = Math.floor(Math.random() * possiblePhotos.length);

  for (let i = 0; i < n; i++) {
    let photo = possiblePhotos.splice(n, n);
    photos[i] = photo;
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

console.log(generateData(10));
