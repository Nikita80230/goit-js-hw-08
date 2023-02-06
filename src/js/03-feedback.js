import { debounce } from "lodash";

const KEY = 'feedback-form-state';
let data = {};

const form = document.querySelector('.feedback-form');
form.addEventListener("input", debounce((fillForm), 300));
form.addEventListener("submit", onSubmit);

loadData();

function fillForm(event) {
  
  data[event.target.name] = event.target.value;
  // data.message = form.elements.message.value;
  
  localStorage.setItem(KEY, JSON.stringify(data))
}

function loadData() {
  const saveData = localStorage.getItem(KEY);

  if(!saveData) {
    return
  }
  try {
      const validData = JSON.parse(saveData);
      form.elements.email.value = validData.email;
      form.elements.message.value = validData.message;
    } catch (error) {
      console.log(error.name);
      console.log(error.message);
    }
  }

function onSubmit(event) {
  event.preventDefault()
  console.log(data)
  
  event.currentTarget.reset();
  localStorage.removeItem(KEY);
}























// import throttle from 'lodash.throttle';

// const KEY = 'feedback-form-state';
// const formData = {};

// const form = document.querySelector('.feedback-form');

// form.addEventListener('submit', onFormSubmit);
// form.addEventListener('input', throttle(onFormInput, 500));

// updateForm();

// function updateForm() {
//   const savedData = localStorage.getItem(KEY);
//   if (savedData) {
//     const { email, message } = JSON.parse(savedData);
//     form.email.value = email;
//     form.message.value = message;
//     formData.email = email;
//     formData.message = message;
//   }
// }

// function onFormInput(event) {
//   formData.email = form.elements.email.value;
//   formData.message = form.elements.message.value;
//   localStorage.setItem(KEY, JSON.stringify(formData));
// }

// function onFormSubmit(event) {
//   event.preventDefault();

//   const formDataToSend = new FormData(event.currentTarget);
//   formDataToSend.forEach((value, name) => {
//     formData[name] = value;
//   });

//   event.currentTarget.reset();
//   localStorage.removeItem(KEY);

//   console.log(formData);
// }
