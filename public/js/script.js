import { AJAX } from './helpers.js';

const imageInput = document.querySelector('.main-container__input');
const widthInput = document.querySelector('.width');
const heightInput = document.querySelector('.height');
const submitButton = document.querySelector('.main-container__button');
const errorMessage = document.querySelector('.error-message');
const mainCont = document.querySelector('.main-container');

const generateImage = async function (imageName, width, height) {
  try {
    const URL = `http://localhost:3000/api/images?imageName=${imageName}&width=${width}&height=${height}`;
    const data = await AJAX(URL);
    const message = data.message;

    if (message === 'Request is fulfilled.') {
      errorMessage.classList.remove('remove');
      const imageLocation = data.link;

      imageInput.classList.add('hidden');
      widthInput.classList.add('hidden');
      heightInput.classList.add('hidden');
      submitButton.classList.add('hidden');
      mainCont.insertAdjacentHTML(
        'afterbegin',
        `<img src="http://localhost:3000/${imageLocation}" alt="">`
      );
      return;
    }
  } catch (err) {
    console.log(err);
    errorMessage.innerHTML = err;
    errorMessage.classList.remove('hidden');
  }
};

submitButton.addEventListener('click', function (e) {
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
  generateImage(imageInput.value, widthInput.value, heightInput.value);
});
