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

const openModalButton = document.querySelector(".gallery__item");
openModalButton.addEventListener("click", onOpenModal);

// function onOpenModal() {
//   document.body.classList.add(".gallery__item");
//   evt.preventDefault();
// }

// function onGalleryClick(evt) {
//   const isGalleryItem = evt.target.classList.contains("gallery__item");
//   if (!isGalleryItem) {
//     return;
//   }

// }
