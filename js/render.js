const block = document.querySelector('.map__canvas');
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');


const renderData = (n) => {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.popup__avatar').src = n.author.avatar;

  cardElement.querySelector('.popup__title').textContent = n.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = n.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = n.offer.price + '₽/ночь';
  cardElement.querySelector('.popup__type').textContent = n.offer.type;
  cardElement.querySelector('.popup__text--capacity').textContent = n.offer.rooms + ' комнаты для ' + n.offer.guests + ' гостей';
  cardElement.querySelector('.popup__text--time').textContent = 'Заезд после ' + n.offer.checkin + ', выезд до ' + n.offer.checkout;
  cardElement.querySelector('.popup__features').textContent = n.offer.features;
  cardElement.querySelector('.popup__description').textContent = n.offer.descriptions;


  cardElement.querySelector('.popup__photos').innerHTML = '';



  for (let i = 0; i < n.offer.photos.length; i++) {
    const imgElement = document.createElement('img');

    imgElement.src = n.offer.photos[i];
    imgElement.alt = 'Фотография жилья';
    imgElement.setAttribute('width', 45);
    imgElement.setAttribute('height', 40);
    imgElement.className = 'popup__photo';
    cardElement.querySelector('.popup__photos').appendChild(imgElement);
  }


  block.appendChild(cardElement);
};

export { renderData };
