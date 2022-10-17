import { AJAX } from './helpers.js';

const imageInput = document.querySelector('.main-container__input');
const widthInput = document.querySelector('.width');
const heightInput = document.querySelector('.height');
const submitButton = document.querySelector('.main-container__button');
const errorMessage = document.querySelector('.error-message');

const generateImage = async function (imageName, width, height) {
  try {
    const URL = `http://localhost:3000/api/images?imageName=${imageName}&width=${width}&height=${height}`;
    await AJAX(URL);
  } catch (err) {
    console.log(err);
  }
};

const resizeImage = submitButton.addEventListener('click', function (e) {
  e.preventDefault;
  if (
    imageInput.value === '' ||
    heightInput.value === '' ||
    widthInput.value === ''
  ) {
    errorMessage.innerHTML = 'All fields must have values';
    errorMessage.classList.remove('hidden');
    return;
  }
  errorMessage.classList.add('hidden');
  console.log('passed 1');
  generateImage(imageInput.value, widthInput.value, heightInput.value);
});
