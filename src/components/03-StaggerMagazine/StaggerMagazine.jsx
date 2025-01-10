import React, { useRef, useState } from "react";
import s from "./StaggerMagazine.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const pics = Array.from(
  { length: 34 },
  (_, i) => `/images/magazines/magazine-${i + 1}.jpg`
);

export default function StaggerMagazine() {
  const totalRects = Array.from({ length: 300 }, (_, index) => index);
  const [isFirstAnimation, setIsFirstAnimation] = useState(true);
  const containerRef = useRef(null);

  const [whiteColor, setWhiteColor] = useState(true);

  const { contextSafe } = useGSAP({ scope: containerRef });

  const discoverMagazine = contextSafe(() => {
    gsap.to("[data-grid-rect]", {
      backgroundColor: whiteColor ? "#000" : "#fff",
      duration: 0.6,
      stagger: {
        amount: 0.7,
        from: "center",
        grid: "auto",
        ease: "sine.in",
      },
      onStart: () => {
        setWhiteColor(!whiteColor);
        isFirstAnimation && setIsFirstAnimation(false);
      },
    });
  });

  return (
    <>
      <main className={s.staggerMagazine}>
        <div className={s.staggerMagazine__rects} ref={containerRef}>
          {totalRects.map((index) => (
            <div
              key={index}
              className={s.staggerMagazine__rects__rect}
              data-grid-rect
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
