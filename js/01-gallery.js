import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryItemsList = document.querySelector(".gallery");
const itemsMarkup = createImageGallery(galleryItems);
galleryItemsList.insertAdjacentHTML("beforeend", itemsMarkup);
galleryItemsList.addEventListener("click", openImage);

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
function openImage(event) {
  event.preventDefault();
  const isClickImgField = event.target.classList.contains("gallery__image");
  if (!isClickImgField) {
    return;
  }
  const currentImg = event.target.dataset.source;

  const instance = basicLightbox.create(
    `
  <img src="${currentImg}" width="1280">
`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", onEscPress);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", onEscPress);
      },
    }
  );

  function onEscPress(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}

// Миколо, це мій перший код, можете мені сказати чи я правильно зняла слухача, він працює, але мені підказали що треба робити як вище, бо так написано в документації.

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
