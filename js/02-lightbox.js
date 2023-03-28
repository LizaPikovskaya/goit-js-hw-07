import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", preventDefaultLink);

function createGalleryMarkup(galleryArr) {
return galleryArr.map(({ preview, original, description }) => {
    return ` <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
        />
      </a>
    </li>`
}).join('');
};

function preventDefaultLink (event) {
  event.preventDefault();
}

let gallery = new SimpleLightbox(".gallery a");
gallery.on('show.simplelightbox', function () {
    const {defaultOptions} = gallery;
    defaultOptions.captionsData = "alt";
   defaultOptions.captionDelay = 250;
   defaultOptions.showCounter = false;
   defaultOptions.scrollZoom = false;
   defaultOptions.fadeSpeed = 700;
})


console.log(galleryItems);


