import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const image = galleryItems.map((obj) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = obj.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = obj.preview;
  galleryImage.dataset.source = obj.original;
  galleryImage.alt = obj.description;

  galleryItem.append(galleryLink);

  galleryLink.append(galleryImage);

  return galleryItem;
});

gallery.append(...image);

gallery.addEventListener("click", handlerClick);

let instance;

function handlerClick(event) {
  event.preventDefault();

  if (event.target.classList.contains("gallery")) {
    return;
  }

  instance = basicLightbox.create(`
      <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
}
