const mapCanvas = L.map('map-canvas')

  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 13);


L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(mapCanvas);

// // Блок, в котором будут отображаться похожие объявления
// const block = document.querySelector('.map__canvas');


// Находим шаблон и получаем его содержимое
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


  mapCanvas.appendChild(cardElement);
};



data.forEach((n) => {
  const { lat, lng } = n;

  const icon = L.icon({
    iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat,
      lng,
    },
    {
      icon,
    },
  );

  marker
    .addTo(mapCanvas)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
});

export { mapCanvas };
export { renderData };
