import React, { useRef, useState } from "react";
import s from "./ClipPathLoader.module.scss";
import Loader from "../Loader/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ClipPathLoader() {
  const [isLoader, setIsLoader] = useState(true);
  const mainRef = useRef(null);

  const [mainTimeline] = useState(() => gsap.timeline({ paused: true }));

  useGSAP(
    () => {
      mainTimeline
        .from(
          "[data-clippath-item]",
          {
            duration: 0.6,
            y: 30,
            opacity: 0,
            ease: "power2.inOut",
          },
          "loaderComplete"
        )
        .from(
          "[data-clippath-img]",
          {
            clipPath: "inset(100% 0 0 0)",
            duration: 1,
            ease: "power2.out",
            stagger: {
              amount: 0.8,
            },
          },
          "<-0.1"
        );
    },
    [],
    { scope: mainRef }
  );

  return (
    <>
      {isLoader && <Loader setIsLoader={setIsLoader} timeline={mainTimeline} />}
      <main className={s.clipPathLoader}>
        <nav className={s.nav} ref={mainRef}>
          <span className={s.nav__logo} data-clippath-item>
            [AL Photography]
          </span>
          <span className={s.nav__link} data-clippath-item>
            Projects
          </span>
          <span className={s.nav__link} data-clippath-item>
            Agency
          </span>
          <span className={s.nav__menu} data-clippath-item>
            Menu <span className={s.nav__menu__icon}>+</span>
          </span>
        </nav>
        <section className={s.content}>
          <div className={s.content__row}>
            <img
              src="/images/clippath/clippath-1.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <img
              src="/images/clippath/clippath-5.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <div className={s.content__row__empty}></div>
            <img
              src="/images/clippath/clippath-6.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
          </div>

          <div className={s.content__row}>
            <div className={s.content__row__empty}></div>
            <img
              src="/images/clippath/clippath-4.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <img
              src="/images/clippath/clippath-3.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />

            <img
              src="/images/clippath/clippath-2.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
          </div>
        </section>
      </main>
    </>
  );
}
