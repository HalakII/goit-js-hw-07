import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryItemsList = document.querySelector(".gallery");
const itemsMarkup = createImagGallery(galleryItems);
galleryItemsList.insertAdjacentHTML("beforeend", itemsMarkup);
galleryItemsList.addEventListener("click", clickOnImageList);

function createImagGallery(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join("");
}
function clickOnImageList(event) {
  event.preventDefault();
  const isClickImgField = event.target.classList.contains("gallery__image");
  if (!isClickImgField) {
    return;
  }
  console.log(event.target);

  const currentImgActive = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${currentImgActive}" width="1280">
`);

  instance.show();
}
