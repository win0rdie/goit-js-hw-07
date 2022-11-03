import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ description, original, preview }) =>
      `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
  )
  .join('');

function handleClick(e) {
  e.preventDefault();
  const dataOrigin = e.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${dataOrigin}" width="800" height="600">
`);

  instance.show();

  if (instance.visible()) {
    document.addEventListener(
      'keydown',
      e => {
        if (e.code === 'Escape') instance.close();
      },
      { once: true }
    );
  }
}

galleryEl.insertAdjacentHTML('afterbegin', markup);
galleryEl.addEventListener('click', handleClick);
