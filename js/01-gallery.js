import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
galleryList.addEventListener('click', showLargeImage)

function createGalleryMarkup(galleryArray) {
return galleryArray.map(({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}" />
  </a>
</li>`;
}).join('');
}

function showLargeImage (event) {
    event.preventDefault();
    const {target, currentTarget} = event
    if (!target.dataset.source) {
        return
    }
const instance = basicLightbox.create(`
    <img src="${target.dataset.source}" width="1280" height="auto">
`);

instance.show();

window.addEventListener("keydown", exitByEscape);

function exitByEscape(event) {
   if(event.code === 'Escape') {
    instance.close();
    window.removeEventListener("keydown", exitByEscape);

   }
}
}



// console.log(galleryItems);
