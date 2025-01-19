import s from "./Gallery.module.scss";

class ImageContainer {
  constructor(imgSrc, parentEl) {
    this.imgSrc = imgSrc;
    this.parentEl = parentEl;
    this.translateY = 0;
    this.viewport = document.querySelector("[date-gallery-viewport]");
    this.translateNum = +this.parentEl.dataset.transform;
    this.appendImage();
    this.setDimensions();
    this.addEventListeners();
  }

  appendImage() {
    this.el = document.createElement("div");
    this.el.classList.add(`${s.gallery__image}`);
    this.image = document.createElement("img");
    this.image.src = this.imgSrc;
    this.el.appendChild(this.image);
    this.parentEl.appendChild(this.el);
  }

  setDimensions() {
    this.centerRef = window.innerHeight / 2;
  }

  addEventListeners() {
    window.addEventListener("resize", this.setDimensions);
  }

  animate() {
    let { top, height } = this.parentEl.getBoundingClientRect();
    this.parentCenter = top + height / 2;
    this.el.style.transform = `translate(${
      (this.centerRef - this.parentCenter) * -this.translateNum
    }px)`;
  }
}

const images = [
  "/images/infiniteScroll/infiniteScroll-1.png",
  "/images/infiniteScroll/infiniteScroll-2.png",
  "/images/infiniteScroll/infiniteScroll-3.png",
  "/images/infiniteScroll/infiniteScroll-4.png",
  "/images/infiniteScroll/infiniteScroll-5.png",
  "/images/infiniteScroll/infiniteScroll-1.png",
  "/images/infiniteScroll/infiniteScroll-2.png",
  "/images/infiniteScroll/infiniteScroll-3.png",
  "/images/infiniteScroll/infiniteScroll-4.png",
  "/images/infiniteScroll/infiniteScroll-5.png",
];

export { ImageContainer, images };
