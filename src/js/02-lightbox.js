import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
  )
  .join('');

galleryEl.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
  captions: true,
});
