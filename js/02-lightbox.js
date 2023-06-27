import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const galleryRef = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);
galleryRef.addEventListener('click', onGalleryItemClick);
const gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  
function createGalleryMarkup(items) {
    return items
    .map(({preview, original, description}) => {
        return `
        <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
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
    const largeImageUrl = evt.target.getAttribute('href');

  openModal(largeImageUrl);
}

function openModal(imageUrl) {
  const gallery = new SimpleLightbox('.gallery a');
  gallery.open({ source: imageUrl });
}