import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.addEventListener('click', onGalleryItemClick);


function createGalleryMarkup(items) {
    return items
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
           <a class="gallery__link" href="${original}">
              <img class="gallery__image"
                src="${preview}"                 data-source="${original}"            alt="${description}"/>
            </a>
        </li>
        `;
    })
    .join('');
}
galleryRef.insertAdjacentHTML('beforeend', galleryMarkup);

function onGalleryItemClick(evt) { 
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
      return; 
    }
    const largeImageUrl = evt.target.dataset.source;
  
    openModal(largeImageUrl);
  }
  
  function openModal(imageUrl) {
    const instance = basicLightbox.create(`
      <img src="${imageUrl}" width="800" height="600">
    `);
  
    instance.show();
  }
  


  
