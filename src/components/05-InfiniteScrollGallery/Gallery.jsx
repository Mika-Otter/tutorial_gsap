import { useEffect, useRef } from "react";
import s from "./Gallery.module.scss";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GalleryColumn from "./GalleryColumn";
const images1 = [
  {
    src: "/images/infiniteScroll/infiniteScroll-1.png",
    title: "Neon Pulse",
    category: "Art Direction - Stage Design - Lighting",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-2.png",
    title: "Street Symphony",
    category: "Music Video - Post Production",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-3.png",
    title: "Midnight Cypher",
    category: "Video Direction - Shooting - Editing",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-4.png",
    title: "Urban Waves",
    category: "Creative Direction - Photography",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-5.png",
    title: "Chrome Dreams",
    category: "Art Direction - Set Design",
  },
];

const images2 = [
  {
    src: "/images/infiniteScroll/infiniteScroll-6.png",
    title: "Neon Nights",
    category: "Stage Design - Show Direction",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-7.png",
    title: "Cyber Flow",
    category: "Art Direction - Digital Content",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-8.png",
    title: "Future Bounce",
    category: "Video Production - Creative Direction",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-9.png",
    title: "Analog Kids",
    category: "Photography - Art Direction",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-10.png",
    title: "Static Movement",
    category: "Show Design - Choreography",
  },
];

const images3 = [
  {
    src: "/images/infiniteScroll/infiniteScroll-11.png",
    title: "Digital Tribe",
    category: "Creative Direction - Stage Design",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-12.png",
    title: "R$S X Kxk",
    category: "Art Direction - Photography",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-13.png",
    title: "Urban Legends",
    category: "Video Direction - Post Production",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-14.png",
    title: "Time Zya",
    category: "Show Design - Lighting",
  },
  {
    src: "/images/infiniteScroll/infiniteScroll-15.png",
    title: "Carla Sty",
    category: "Art Direction - Stage Design",
  },
];
export default function InfiniteScrollGallery() {
  const galleryRef = useRef(null);

  return (
    <section className={s.gallery} ref={galleryRef}>
      <GalleryColumn speedFactor={1} images={images1} direction={-1} />
      <GalleryColumn speedFactor={0.5} images={images2} direction={1} />
      <GalleryColumn speedFactor={0.7} images={images3} direction={-1} />
    </section>
  );
}
