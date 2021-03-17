import { generateAvatar } from './util.js';
import { generateTitle } from './util.js';
import { generateX } from './util.js';
import { generateY } from './util.js';
import { generateDiscription } from './util.js';
import { generateAddress } from './util.js';
import { generatePrice } from './util.js';
import { generateType } from './util.js';
import { generateRooms } from './util.js';
import { generateGuests } from './util.js';
import { generateCheckIn } from './util.js';
import { generateCheckOut } from './util.js';
import { generateFeatures } from './util.js';
import { generatePhotos } from './util.js';

import { allTitles } from './data.js';
import { allDescriptions } from './data.js';
import { allTypes } from './data.js';
import { allCheckIn } from './data.js';
import { allCheckOut } from './data.js';
import { possibleFeatures } from './data.js';
import { possiblePhotos } from './data.js';

import { renderData } from './render.js';

const generateObj = () => {
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

  return obj;
}


// const generateData = (n) => {
//   let data = [];

//   for (let i = 0; i < n; i++) {
//     data[i] = generateObj();
//   }

//   return data;
// }

const data = generateObj();


renderData(data);
