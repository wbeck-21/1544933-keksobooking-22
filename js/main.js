import { generateDataList } from './data.js';
import { renderData } from './render.js';
// import { mapCanvas } from './map.js';


const advertismentForm = document.querySelector('.ad-form');
advertismentForm.classList.add('ad-form--disabled');
for (let i = 0; i < advertismentForm.children.length; i++) {
  const advertismentFieldset = advertismentForm.children[i];

  advertismentFieldset.setAttribute('disabled', 'disabled');
}

const mapFilterElement = document.querySelector('.map__filters');
mapFilterElement.classList.add('map__filters--disabled');
for (let i = 0; i < mapFilterElement.children.length; i++) {
  const mapFieldset = mapFilterElement.children[i];

  mapFieldset.setAttribute('disabled', 'disabled');
}




const dataList = generateDataList();


let map = L.map('map-canvas').setView([35.652832, 139.839478], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

dataList.map(dataItem => {
  L.marker([dataItem.location.x, dataItem.location.y], {icon: pinIcon}).addTo(map)
    .bindPopup(renderData(dataItem))
    .openPopup();
});

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});


const mainPinMarker = L.marker(
  {
    lng: 139.839478,
    lat: 35.652832,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
)
.addTo(map);

mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
});
