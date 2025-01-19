import { useEffect, useRef, useState } from "react";
import s from "./InfiniteBanner.module.scss";
import gsap from "gsap";

export default function InfiniteBanner() {
  const firstImagesRef = useRef(null);
  const secondImagesRef = useRef(null);
  const leftBandRef = useRef(null);
  const rightBandRef = useRef(null);
  const centerRef = useRef(null);

  let xPercent = 0;
  let direction = 1;
  let speed = 0.1;
  let targetSpeed = 0.1;

  const lerp = (start, end, factor) => {
    return start + (end - start) * factor;
  };

  const calculateSpeed = (e, band) => {
    const rect = band.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const bandWidth = rect.width;
    const position = mouseX / bandWidth;

    const maxSpeed = 0.8;
    const minSpeed = 0.1;

    if (band === leftBandRef.current) {
      direction = -1;
      targetSpeed = minSpeed + (1 - position) * (maxSpeed - minSpeed);
    } else {
      direction = 1;
      targetSpeed = minSpeed + position * (maxSpeed - minSpeed);
    }
  };

  const handleMouseEnter = (target) => {
    if (target === "center") {
      targetSpeed = 0;
    }
  };

  const handleMouseLeave = (target) => {
    if (target === "center") {
      targetSpeed = 0.2;
    } else {
      targetSpeed = 0.2;
      direction = 1;
    }
  };

  const handleMouseMove = (e, band) => {
    calculateSpeed(e, band);
  };

  const animation = () => {
    speed = lerp(speed, targetSpeed, 0.05);

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
    }, 1000);
  }, []);

  return (
    <main className={s.infiniteBanner}>
      <nav className={s.infiniteBanner__nav}>
        <span className={s.infiniteBanner__nav__logo}>Banner</span>
        <span className={s.infiniteBanner__nav__item}>Projects</span>
        <span className={s.infiniteBanner__nav__item}>Services</span>
        <span className={s.infiniteBanner__nav__item}>Contact</span>
      </nav>
      <div className={s.infiniteBanner__textCtn}>
        <p className={s.infiniteBanner__textCtn__text}>
          Infinite Banner // Write what you want // Maaaaake it responsive //
          Enjoy and have fun during the process // Try new things //
        </p>
        <p className={s.infiniteBanner__textCtn__text}>
          Infinite Banner // Write what you want // Maaaaake it responsive //
          Enjoy and have fun during the process // Try new things //
        </p>
      </div>
      <div className={s.infiniteBanner__imageSection}>
        <div className={s.infiniteBanner__imageSection__controls}>
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
        </div>
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
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
