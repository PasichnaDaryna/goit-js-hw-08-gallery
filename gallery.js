import images from "./gallery-items.js";

const galleryContainer = document.querySelector(".js-gallery");
// console.log(createImageCollection(images));

const cardsCollection = createImageCollection(images);
galleryContainer.insertAdjacentHTML("beforeend", cardsCollection);

// galleryContainer.addEventListener("click", onGalleryClick);

function createImageCollection(images) {
  return images
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
  <a
    class="gallery__link"
    href="${original}"
  >
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
//  <!--
//       Модальное окно для полноразмерного изображения
//       Для того чтобы открыть, необходимо добавить на div.lightbox CSS-класс is-open
//     -->

const refs = {
  openModalBtn: document.querySelector(".gallery__item"),
  closeModal: document.querySelector('[data-action="close-lightbox"]'),
  backdrop: document.querySelector(".lightbox__overlay"),
};

refs.openModalBtn.addEventListener("click", onOpenModal);
refs.closeModal.addEventListener("click", onCloseModal);

function onOpenModal(evt) {
  const isGalleryItem = evt.target.classList.contains("gallery__item");
  if (!isGalleryItem) {
    return;
  }
  evt.preventDefault();
  isGalleryItem.classList.add("is-open");
}
function onCloseModal() {}
