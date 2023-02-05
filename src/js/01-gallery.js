// Add imports above this line
// Виконуй це завдання у файлах 01-gallery.html і 01-gallery.js. Розбий його на декілька підзавдань:

// Додай бібліотеку SimpleLightbox як залежність проекту, використовуючи npm (посилання на CDN з твоєї минулої роботи більше не потрібне).
// Використовуй свій JavaScript код з попередньої домашньої роботи, але виконай рефакторинг з урахуванням того, що бібліотека була встановлена через npm (синтаксис import/export).
// Для того щоб підключити CSS код бібліотеки в проект, необхідно додати ще один імпорт, крім того, що описаний в документації.

// // Описаний в документації
// import SimpleLightbox from "simplelightbox";
// // Додатковий імпорт стилів
// import "simplelightbox/dist/simple-lightbox.min.css";


import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
// Change code below this line


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", getLargeImage);

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const markup = galleryItems.forEach(({preview, original, description}) => {
    const markup = `
    <a 
        class="gallery__item" 
        href=${original}>
            <img 
                class="gallery__image" 
                src=${preview} 
                alt=${description}
            />
  </a>`
    gallery.insertAdjacentHTML("beforeend", markup)
})

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


function getLargeImage(event) {
    event.preventDefault();

    if(event.target.nodeName === "IMG") {
        var lightbox = new SimpleLightbox('.gallery a', 
        {     
            captionsData: "alt",
            captionsDelay: "250ms"
        });
    }

}


















// import { galleryItems } from './gallery-items';
// import SimpleLightbox from "simplelightbox";
// import "simplelightbox/dist/simple-lightbox.min.css";

// console.log(galleryItems);
// // Change code below this line
// const galleryRef = document.querySelector('.gallery');
// const galleryMarkup = createGalleryItemCard(galleryItems);
// galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

// galleryRef.addEventListener("click", showLargeImg)

// function createGalleryItemCard(galleryItem) {
//     return galleryItems.map(({preview, original, description}) => 
//     `
//     <div class="gallery__item">
//         <a class="gallery__link" href="${original}">
//             <img
//             class="gallery__image"
//             src="${preview}"
//             data-source="${original}"
//             alt="${description}"
//             />
//         </a>
//     </div>
//     `).join("")
// };

// function showLargeImg(event) {
    
//     if (!event.target.classList.contains("gallery__image")) {
//         return;
//     }

//     event.preventDefault()
// };
// const lightBox = new SimpleLightbox('.gallery a', {
//     captionsData: "alt",
//     captionsDelay: "250ms"
//  })




