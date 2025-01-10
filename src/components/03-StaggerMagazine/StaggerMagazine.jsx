import React, { useEffect, useRef, useState } from "react";
import s from "./StaggerMagazine.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const pics = Array.from(
  { length: 30 },
  (_, i) => `/images/magazines/magazine-${i + 1}.jpg`
);

export default function StaggerMagazine() {
  const totalRects = Array.from({ length: 300 }, (_, index) => index);
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const containerRef = useRef(null);
  const [whiteColor, setWhiteColor] = useState(true);
  const [displayedImages, setDisplayedImages] = useState([]);
  const { contextSafe } = useGSAP({ scope: containerRef });
  const [lastImages, setLastImages] = useState([]);

  useEffect(() => {
    const shuffled = [...pics].map((src) => ({
      src,
      style: {
        left: `${Math.random() * 80}%`,
        top: `${Math.random() * 80}%`,
        width: `${3 + Math.random() * 9}vw`,
        zIndex: Math.floor(Math.random() * 14),
        opacity: 0,
      },
    }));
    setDisplayedImages(shuffled);
  }, []);

  const discoverMagazine = contextSafe(() => {
    const imagesToShow = [...document.querySelectorAll("[data-magazine-image]")]
      .sort(() => Math.random() - 0.5)
      .slice(0, 16);

    setLastImages(imagesToShow);

    gsap.to("[data-grid-rect]", {
      backgroundColor: whiteColor ? "#000" : "#fff",
      duration: 0.9,
      stagger: {
        amount: 0.9,
        from: "center",
        grid: "auto",
        ease: "sine.in",
      },
      onStart: () => {
        setWhiteColor(!whiteColor);
        isFirstAnimation && setIsFirstAnimation(false);

        if (lastImages.length > 0) {
          lastImages.forEach((img) => {
            gsap.to(img, {
              duration: 0.6,
              opacity: 0,
              stagger: 0.2,
              onComplete: () => {
                gsap.set(img, {
                  pointerEvents: "none",
                });
              },
            });
          });
        }

        gsap.to(imagesToShow, {
          duration: 0.6,
          opacity: 1,
          stagger: 0.1,
          onComplete: () => {
            gsap.set(imagesToShow, {
              pointerEvents: "all",
            });
          },
        });
      },
    });
  });

  return (
    <>
      <main className={s.staggerMagazine}>
        <nav className={s.staggerMagazine__nav}></nav>
        <div className={s.staggerMagazine__rects} ref={containerRef}>
          {totalRects.map((index) => (
            <div
              key={index}
              className={s.staggerMagazine__rects__rect}
              data-grid-rect
            />
          ))}
        </div>
        <div className={s.staggerMagazine__images}>
          {displayedImages.map((image, index) => (
            <img
              key={index}
              src={image.src}
              className={`${s.staggerMagazine__image} magazine-image`}
              style={image.style}
              alt={`Magazine ${index + 1}`}
              data-magazine-image
            />
          ))}
        </div>
        <span className={s.staggerMagazine__title} onClick={discoverMagazine}>
          {isFirstAnimation ? "Discover Magazines" : "Shuffle"}
        </span>
      </main>
    </>
  );
}
