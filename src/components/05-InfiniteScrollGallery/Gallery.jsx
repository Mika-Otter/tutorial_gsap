import { useEffect, useRef } from "react";
import s from "./Gallery.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryColumn from "./GalleryColumn";

const images1 = [
  "/images/infiniteScroll/infiniteScroll-1.png",
  "/images/infiniteScroll/infiniteScroll-2.png",
  "/images/infiniteScroll/infiniteScroll-3.png",
  "/images/infiniteScroll/infiniteScroll-4.png",
  "/images/infiniteScroll/infiniteScroll-5.png",
];

const images2 = [
  "/images/infiniteScroll/infiniteScroll-6.png",
  "/images/infiniteScroll/infiniteScroll-7.png",
  "/images/infiniteScroll/infiniteScroll-8.png",
  "/images/infiniteScroll/infiniteScroll-9.png",
  "/images/infiniteScroll/infiniteScroll-10.png",
];
const images3 = [
  "/images/infiniteScroll/infiniteScroll-11.png",
  "/images/infiniteScroll/infiniteScroll-12.png",
  "/images/infiniteScroll/infiniteScroll-13.png",
  "/images/infiniteScroll/infiniteScroll-14.png",
  "/images/infiniteScroll/infiniteScroll-15.png",
];

export default function InfiniteScrollGallery() {
  const galleryRef = useRef(null);

  return (
    <section className={s.gallery} ref={galleryRef}>
      <GalleryColumn speedFactor={0.7} images={images1} direction={-1} />
      <GalleryColumn speedFactor={0.2} images={images2} direction={1} />
      <GalleryColumn speedFactor={0.5} images={images3} direction={-1} />
    </section>
  );
}
