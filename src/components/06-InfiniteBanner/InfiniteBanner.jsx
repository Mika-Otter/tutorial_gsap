import { useEffect, useRef, useState } from "react";
import s from "./InfiniteBanner.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function InfiniteBanner() {
  const firstImagesRef = useRef(null);
  const secondImagesRef = useRef(null);
  const imageSectionRef = useRef(null);
  const leftBandRef = useRef(null);
  const rightBandRef = useRef(null);
  const centerRef = useRef(null);

  let xPercent = 0;
  let direction = 1;
  let speed = 0.04;
  let targetSpeed = 0.06;

  useGSAP(() => {
    gsap.from(imageSectionRef.current, {
      scale: 0,
      duration: 0.5,
      ease: "power4.out",
    });
  }, []);

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const animation = () => {
    // speed = lerp(speed, targetSpeed, 0.05);

    gsap.set(firstImagesRef.current, { xPercent: xPercent });
    gsap.set(secondImagesRef.current, { xPercent: xPercent });

    if (xPercent > 0) {
      xPercent = -100;
    }

    if (xPercent < -100) {
      xPercent = 0;
    }

    xPercent += 0.1 * direction * speed;
    requestAnimationFrame(animation);
  };

  useEffect(() => {
    setTimeout(() => {
      requestAnimationFrame(animation);
    }, 2000);
  }, []);

  return (
    <main className={s.infiniteBanner}>
      <nav className={s.infiniteBanner__nav}>
        <span className={s.infiniteBanner__nav__logo}>Infinite.Banner</span>
        <span className={s.infiniteBanner__nav__item}>Projects</span>
        <span className={s.infiniteBanner__nav__item}>Services</span>
        <span className={s.infiniteBanner__nav__item}>Contact</span>
      </nav>
      <div className={s.infiniteBanner__textCtn}>
        <p className={s.infiniteBanner__textCtn__text}>
          Infin!te B4nner // Write what U want // Maaaaake it re$ponsive //
          3nj0y and h4ve fun dur!ng the process // Try n3w th!ngs //
        </p>
        <p className={s.infiniteBanner__textCtn__text}>
          Infin!te B4nner // Write what U want // Maaaaake it re$ponsive //
          3nj0y and h4ve fun dur!ng the process // Try n3w th!ngs //
        </p>
      </div>
      <div className={s.infiniteBanner__imageSection} ref={imageSectionRef}>
        {/* <div className={s.infiniteBanner__imageSection__controls}>
          <div
            ref={leftBandRef}
            className={s.infiniteBanner__imageSection__controls__band}
            onMouseEnter={() => handleMouseEnter("band")}
            onMouseLeave={() => handleMouseLeave("band")}
            onMouseMove={(e) => handleMouseMove(e, leftBandRef.current)}
          ></div>
          <div
            ref={centerRef}
            className={s.infiniteBanner__imageSection__controls__center}
            onMouseEnter={() => handleMouseEnter("center")}
            onMouseLeave={() => handleMouseLeave("center")}
          ></div>
          <div
            ref={rightBandRef}
            className={s.infiniteBanner__imageSection__controls__band}
            onMouseEnter={() => handleMouseEnter("band")}
            onMouseLeave={() => handleMouseLeave("band")}
            onMouseMove={(e) => handleMouseMove(e, rightBandRef.current)}
          ></div>
        </div> */}
        <div
          className={s.infiniteBanner__imageSection__imageCtn}
          ref={firstImagesRef}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              className={s.infiniteBanner__imageSection__imageCtn__image}
              key={i}
            >
              <img
                src={`/images/infiniteBanner/infiniteBanner-${i + 1}.webp`}
                alt={`Infinite Banner ${i + 1}`}
              />
            </div>
          ))}
        </div>
        <div
          className={s.infiniteBanner__imageSection__imageCtn}
          ref={secondImagesRef}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              className={s.infiniteBanner__imageSection__imageCtn__image}
              key={i}
            >
              <img
                src={`/images/infiniteBanner/infiniteBanner-${i + 1}.webp`}
                alt={`Infinite Banner ${i + 1}`}
                loading="eager"
                style={{
                  willChange: "transform",
                  backfaceVisibility: "hidden",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
