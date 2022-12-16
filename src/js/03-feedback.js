import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputMail = document.querySelector('input');
const inputTextarea = document.querySelector('textarea');

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';
const formData = {};
autoCompleteInput();

function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  try {
    const userData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(userData);
  } catch (error) {}
  e.preventDefault();
  e.currentTarget.reset();
}

function autoCompleteInput() {
  try {
    const a = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (a) {
      inputMail.value = a.email;
      inputTextarea.value = a.message;
    }
  } catch (error) {
    console.log(error);
  }
}
