// JSON.srtingify
const user = {
  name: 'Mango',
  age: '2',
};

// console.log(JSON.stringify(user)); //{"name":"Mango","age":"2"} строка

//JSON.parse

const savedUserdata = '{"name":"Mango","age":"2"}';
// console.log(JSON.parse(savedUserdata));
//{name: "Mango", age: "2"}
// age: "2"
// name: "Mango" //обьект

// LOCALSTORAGE хранение обьектов данных, локальное хранилище
// console.log(localStorage); //Storage {length: 0} обьект

// localStorage.setItem('my-data', JSON.stringify({ name: 'mango', age: 2 })); //в Application - Local Storage появится Key -my-data
// Value - {"name":"mango","age":2}

const savedData = localStorage.getItem('my-data');
// console.log('savedData', savedData); //savedData {"name":"mango","age":2}

const parsedData = JSON.parse(savedData);
// console.log('parsedData', parsedData); //parsedData {name: "mango", age: 2}

// console.log(localStorage); //Storage {my-data: "{\"name\":\"mango\",\"age\":2}", length: 1}

// Example===================Form
// import throttle from 'lodash.throttle';
// const STORAGE_KEY = 'feedback';
// const refs = {
//   form: document.querySelector('.js-feedback-form'),
//   textarea: document.querySelector('.js-feedback-form  textarea'),
// };
// refs.form.addEventListener('submit', onFormSubmit);
// refs.textarea.addEventListener('input', throttle(onTextareaInput, 1000));
// populateTextarea();

// function onFormSubmit(e) {
//   e.preventDefault(); // Останавливаем поведение по умолчанию
//   console.log('Отправляем форму');
//   e.currentTarget.reset(); //сброс введеных значений в поле massage
//   localStorage.removeItem('STORAGE_KEY'); // Очищаем форму
// }

// //  добавить throttle -->npm i lodash.throttle, экспортировать 'lodash.throttle' (с In Node.js:var throttle = require('lodash.throttle')) импортировать сверху ;

// function onTextareaInput(e) {
//   const message = e.target.value; //Получаем значение поля
//   localStorage.setItem('STORAGE_KEY', message); //Сохраняем его в хранилище
// }

// function populateTextarea() {
//   const savedMessage = localStorage.getItem('STORAGE_KEY'); //еслт в локалсторедж нет ключа вернется null
//   if (savedMessage) {
//     console.log(savedMessage); // Получаем значение из хранилища
//     refs.textarea.value = savedMessage; //  Если там что-то было, обновляем DOM
//   }
// }

// COLORPICKER======ШАБЛОНИЗАЦИЯ================================================
// npm i parcel-plugin-handlebars-precompile установка пакета
// import colorCardTpl from '../templates/color-card.hbs'; //импорт шаблона
// import colorCardsTpl from '../templates/color-cards.hbs'; //импорт функции шаблона массива карточек
// import colors from './colors.json'; //colors - при импорте парсится в масив

// // console.log(colorCardTpl(colors[0])); //функция шаблона , которая сделает 1 цвет согласно индекса

// const paletteContainer = document.querySelector('.js-palette');
// const cardsMarkup = createColorCardsMarkup(colors);

// paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

// paletteContainer.addEventListener('click', onPaletteContainerClick);

// function createColorCardsMarkup(colors) {
//   // return colors.map(color => colorCardTpl(color)).join('');
//   // return colors.map(colorCardTpl).join('');//вызов функции шаблона

//   return colorCardsTpl(colors); //кинуть массив обьектов в функцию colorCardsTpl и получить массив карточек
// }

// function onPaletteContainerClick(evt) {
//   const isColorSwatchEl = evt.target.classList.contains('color-swatch');

//   if (!isColorSwatchEl) {
//     return;
//   }

//   const swatchEl = evt.target;
//   const parentColorCard = swatchEl.closest('.color-card');

//   removeActiveCardClass();
//   addActiveCardClass(parentColorCard);
//   setBodyBgColor(swatchEl.dataset.hex);
// }

// function setBodyBgColor(color) {
//   document.body.style.backgroundColor = color;
// }

// function removeActiveCardClass() {
//   const currentActiveCard = document.querySelector('.color-card.is-active');

//   if (currentActiveCard) {
//     currentActiveCard.classList.remove('is-active');
//   }
// }

// function addActiveCardClass(card) {
//   card.classList.add('is-active');
// }

// GALLERY======================================================

import countries from './countries.json'; //c json забрать массив стран
import itemsTemplate from '../templates/gallery-items.hbs'; //импорт функции создания шаблона колекции

const galleryRef = document.querySelector('.js-gallery'); //ссылка на галерею

const markup = itemsTemplate(countries); //вызов функции шаблона колекции
galleryRef.insertAdjacentHTML('beforeend', markup); //добавление разметки в HTML
