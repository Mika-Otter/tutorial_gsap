import React, { useRef } from "react";
import s from "./Landing.module.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function Landing({ timeline }) {
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    const splitText = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "split-char",
    });

    const items = document.querySelectorAll("[data-loading-item]");
    const stars = document.querySelectorAll("[data-loading-star]");

    timeline
      .from(
        bgRef.current,
        {
          scale: 1.7,
          filter: "blur(20px)",
          duration: 1,
          ease: "power2.inOut",
        },
        "loaderComplete"
      )
      .from(
        splitText.chars,
        {
          opacity: 0,
          y: 30,
          duration: 0.3,
          stagger: {
            amount: 1,
            from: "start",
          },
        },
        ">"
      )
      .from(items, {
        opacity: 0,
        duration: 0.3,
      })
      .from(
        stars,
        {
          opacity: 0,
          duration: 0.3,
        },
        "<"
      );
  }, []);

  return (
    <main className={s.landing}>
      <div className={s.landing__background}>
        <img
          src="/images/staggerThanks/landing.jpg"
          alt="landing"
          ref={bgRef}
        />
      </div>
      <h1 className={s.landing__title} data-loading-item>
        CR
      </h1>
      <nav className={s.landing__nav}>
        <span className={s.landing__nav__item} data-loading-item>
          PROJECTS
        </span>
        <span className={s.landing__nav__item} data-loading-item>
          CONTACT
        </span>
      </nav>
      <div className={`${s.landing__star} ${s.star1}`}>
        <img
          src="/images/staggerThanks/star.png"
          alt="star1"
          data-loading-star
        />
      </div>
      <div className={`${s.landing__star} ${s.star2}`}>
        <img
          src="/images/staggerThanks/star.png"
          alt="star2"
          data-loading-star
        />
      </div>
      <div className={`${s.landing__star} ${s.star3}`}>
        <img
          src="/images/staggerThanks/star.png"
          alt="star3"
          data-loading-star
        />
      </div>
      <div className={s.landing__text} ref={textRef}>
        <p>Unmatched</p>
        <p>control with</p>
        <p>GSAP's</p>
        <p>stagger</p>
        <p>functionality</p>
      </div>
      <div className={s.landing__bottom}>
        <span className={s.landing__bottom__title} data-loading-item>
          Discover new things
        </span>
        <div className={s.landing__bottom__ctn}>
          <span className={s.landing__bottom__ctn__scroll} data-loading-item>
            Scroll Down
          </span>
        </div>
      </div>
    </main>
  );
}
