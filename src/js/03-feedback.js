// Завдання 3 - форма зворотного зв'язку
// HTML містить розмітку форми. Напиши скрипт, який буде зберігати значення полів у локальне сховище, коли користувач щось друкує.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Виконуй це завдання у файлах 03-feedback.html і 03-feedback.js. Розбий його на декілька підзавдань:

// Відстежуй на формі подію input, і щоразу записуй у локальне сховище об'єкт з полями email і message, у яких зберігай поточні значення полів форми. Нехай ключем для сховища буде рядок "feedback-form-state".
// Під час завантаження сторінки перевіряй стан сховища, і якщо там є збережені дані, заповнюй ними поля форми. В іншому випадку поля повинні бути порожніми.
// Під час сабміту форми очищуй сховище і поля форми, а також виводь у консоль об'єкт з полями email, message та їхніми поточними значеннями.
// Зроби так, щоб сховище оновлювалось не частіше, ніж раз на 500 мілісекунд. Для цього додай до проекту і використовуй бібліотеку lodash.throttle.

import { debounce } from "lodash";

const KEY = 'feedback-form-state';
let data = {};

const form = document.querySelector('.feedback-form');
form.addEventListener("input", debounce((fillForm), 300));
form.addEventListener("submit", onSubmit);

loadData();

function fillForm() {
  
  data.email = form.elements.email.value;
  data.message = form.elements.message.value;
  
  localStorage.setItem(KEY, JSON.stringify(data))
}

function loadData() {
  const saveData = JSON.parse(localStorage.getItem(KEY));
  if(saveData) {
    form.elements.email.value = saveData.email;
    form.elements.message.value = saveData.message;
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
