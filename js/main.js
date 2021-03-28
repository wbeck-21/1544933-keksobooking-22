import { generateDataList } from './data.js';
import { renderData } from './render.js';
import { renderMap } from './map.js';


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
renderMap(dataList, renderData);


