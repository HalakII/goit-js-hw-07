import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsList = document.querySelector(".gallery");
const itemsMarkup = createImageGallery(galleryItems);

function createImageGallery(images) {
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
function openLightbox(event) {
  event.preventDefault();
  const isClickImgField = event.target.classList.contains("gallery__image");
  if (!isClickImgField) {
    return;
  }

  const currentImgActive = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${currentImgActive}" width="1280">
`);

  instance.show();

  // function closeLightbox() {
  //   instance.close();
  //   window.removeEventListener("keydown", onEscPress);
  // }

  // function onEscPress(event) {
  //   if (event.code === "Escape") {
  //     closeLightbox();
  //   }
  // }
  // window.addEventListener("keydown", onEscPress);
}
galleryItemsList.insertAdjacentHTML("beforeend", itemsMarkup);
galleryItemsList.addEventListener("click", openLightbox);
