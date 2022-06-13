// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);
// Change code below this line
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemCard(galleryItems);
galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", showLargeImg)

function createGalleryItemCard(galleryItem) {
    return galleryItems.map(({preview, original, description}) => 
    `
    <div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
            />
        </a>
    </div>
    `).join("")
};

function showLargeImg(event) {
    
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }

    event.preventDefault()
};
const lightBox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionsDelay: "250ms"
 })




