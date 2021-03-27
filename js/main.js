import { generateDataList } from './data.js';
import { renderData } from './render.js';
import { mapCanvas } from './map.js';


const advertismentForm = document.querySelector('.ad-form');
advertismentForm.classList.add('ad-form--disabled');
for (let i = 0; i < advertismentForm.children.length; i++) {
  const advertismentFieldset = advertismentForm.children[i];

  advertismentFieldset.setAttribute('disable', 'disable');
}


const dataList = generateDataList();
dataList.map(dataItem => genderData(dataItem));
dataList.map();





const data = generateObj();
renderData(data);

console.log(mapCanvas);
