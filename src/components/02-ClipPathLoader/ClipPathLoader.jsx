import React, { useState } from "react";
import s from "./ClipPathLoader.module.scss";
import Loader from "./components/Loader";

export default function ClipPathLoader() {
  const [isLoader, setIsLoader] = useState(true);

  return (
    <>
      {isLoader && <Loader setLoader={setIsLoader} />}
      <main className={s.clipPathLoader}>
        <nav className={s.nav}>
          <span className={s.nav__logo}>[Architectures]</span>
          <span className={s.nav__item}>Projects</span>
          <span className={s.nav__item}>Agency</span>
          <span className={s.nav__item}>
            Menu <span className={s.nav__item__icon}>+</span>
          </span>
        </nav>
        <section className={s.content}>
          <div className={s.content__row}>
            <img
              src="/images/architecture-1.webp"
              alt="archi 1"
              className={s.content__row__img}
            />
            <img
              src="/images/architecture-2.webp"
              alt="archi 1"
              className={s.content__row__img}
            />
            <div className={s.content__row__empty}></div>
            <img
              src="/images/architecture-3.webp"
              alt="archi 1"
              className={s.content__row__img}
            />
          </div>

          <div className={s.content__row}>
            <div className={s.content__row__empty}></div>
            <img
              src="/images/architecture-4.webp"
              alt="archi 1"
              className={s.content__row__img}
            />
            <img
              src="/images/architecture-11.webp"
              alt="archi 1"
              className={s.content__row__img}
            />

            <img
              src="/images/architecture-6.webp"
              alt="archi 1"
              className={s.content__row__img}
            />
          </div>
        </section>
      </main>
    </>
  );
}
