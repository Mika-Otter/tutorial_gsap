import React, { useRef, useState } from "react";
import s from "./ClipPathLoader.module.scss";
import Loader from "./components/Loader";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function ClipPathLoader() {
  const [isLoader, setIsLoader] = useState(true);

  const [mainTimeline] = useState(() => gsap.timeline({ paused: true }));

  useGSAP(() => {
    mainTimeline
      .from(
        "[data-clippath-item]",
        {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.inOut",
        },
        "loaderComplete"
      )
      .from("[data-clippath-img]", {
        clipPath: "inset(100% 0 0 0)",
        duration: 1,
        ease: "power2.out",
        stagger: {
          amount: 1,
        },
      });
  });

  return (
    <>
      {isLoader && <Loader setIsLoader={setIsLoader} timeline={mainTimeline} />}
      <main className={s.clipPathLoader}>
        <nav className={s.nav}>
          <span className={s.nav__logo} data-clippath-item>
            [Architectures]
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
              src="/images/architecture-1.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <img
              src="/images/architecture-2.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <div className={s.content__row__empty}></div>
            <img
              src="/images/architecture-3.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
          </div>

          <div className={s.content__row}>
            <div className={s.content__row__empty}></div>
            <img
              src="/images/architecture-4.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />
            <img
              src="/images/architecture-11.webp"
              alt="archi 1"
              className={s.content__row__img}
              data-clippath-img
            />

            <img
              src="/images/architecture-6.webp"
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
