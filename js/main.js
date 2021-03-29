import { generateDataList } from './data.js';
import { renderData } from './render.js';
import { renderMap } from './map.js';

// const advertismentForm = document.querySelector('.ad-form');
// advertismentForm.classList.add('ad-form--disabled');
// for (let i = 0; i < advertismentForm.children.length; i++) {
//   const advertismentFieldset = advertismentForm.children[i];

//   advertismentFieldset.setAttribute('disabled', 'disabled');
// }

const mapFilterElement = document.querySelector('.map__filters');
mapFilterElement.classList.add('map__filters--disabled');
for (let i = 0; i < mapFilterElement.children.length; i++) {
  const mapFieldset = mapFilterElement.children[i];

  mapFieldset.setAttribute('disabled', 'disabled');
}

const dataList = generateDataList();
renderMap(dataList, renderData);

//
//
//



// Валидация заголовка объявления
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const userTitleInput = document.querySelector('#title');

userTitleInput.addEventListener('input', () => {
  const valueLength = userTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    userTitleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    userTitleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    userTitleInput.setCustomValidity('');
  }

  userTitleInput.reportValidity();
});



// Валидация цены объявления
const MIN_VALUE_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const MAX_VALUE_PRICE = 1000000;

const userPriceInput = document.querySelector('#price');
const userTypeSelect = document.querySelector('#type');

userPriceInput.addEventListener('input', () => {
  const valuePrice = userPriceInput.value;

  if (valuePrice < MIN_VALUE_PRICE) {
    userPriceInput.setCustomValidity('Минимальная цена за ночь ' + MIN_VALUE_PRICE);
  } else if (valuePrice > MAX_VALUE_PRICE) {
    userPriceInput.setCustomValidity('Максимальная цена за ночь ' + MAX_VALUE_PRICE);
  } else {
    userPriceInput.setCustomValidity('');
  }

  userPriceInput.reportValidity();
});


// Изменение плайсхолдера и минимального значения в зависимости от выбора типа жилья
const changePlaceholderAndMinPrice = function(evt) {
  let value = evt.target.value;
  userPriceInput.setAttribute('placeholder', MIN_VALUE_PRICE[value]);
  userPriceInput.setAttribute('min', MIN_VALUE_PRICE[value]);
};


// Сихнонизация полей «Время заезда» и «Время выезда»
const userTimeInSelect = document.querySelector('#timein');
const userTimeOutSelect = document.querySelector('#timeout');

const changeUserTimeIn = function(evt) {
  let valueUserTimeOut = evt.target.value;
  userTimeInSelect.value = valueUserTimeOut;
};

const changeUserTimeOut = function(evt) {
  let valueUserTimeIn = evt.target.value;
  userTimeOutSelect.value = valueUserTimeIn;
};

const addEvent = function() {
  userTypeSelect.addEventListener('change', changePlaceholderAndMinPrice);
  userTimeInSelect.addEventListener('change', changeUserTimeOut);
  userTimeOutSelect.addEventListener('change', changeUserTimeIn);
};


addEvent();

// Сихнонизация полей «Количество комнат» и «Количество мест»
const userRoomNumberSelect = document.querySelector('#room_number');
const userCapacitySelect = document.querySelector('#capacity');
