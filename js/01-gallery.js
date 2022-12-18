import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector(".js-gallery");
const markup = galleryItems.reduce((acc, {
    preview,
    original,
    description,
}) => acc +
`<div class="gallery__item">
<a class="gallery__link" href=${original}>
  <img
    class="gallery__image"
    src=${preview}
    data-source= ${original}
    alt=${description}
  />
</a>
</div>`, "");

galleryEl.insertAdjacentHTML('beforeend', markup);
console.log(galleryItems);
