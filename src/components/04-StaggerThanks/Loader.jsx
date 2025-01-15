import React from "react";

import s from "./Loader.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Loader({ timeline }) {
  useGSAP(() => {
    const letters = document.querySelectorAll("[data-loader-letter]");
    const rects = document.querySelectorAll("[data-loader-box]");

    timeline
      .from(letters, {
        opacity: 0,
        duration: 0.05,
        stagger: {
          amount: 0.4,
          from: "start",
        },
      })
      .to(letters, {
        opacity: 0,
        duration: 0.05,
        delay: 0.5,
        stagger: {
          amount: 0.4,
          from: "end",
        },
      })
      .addLabel("loaderComplete")
      .to(
        rects,
        {
          opacity: 0,
          duration: 0.05,
          stagger: {
            amount: 0.8,
            from: "random",
          },
        },
        ">-0.08"
      );

    timeline.play();
  }, []);
  return (
    <section className={s.loader}>
      <div className={s.loader__box}>
        {Array.from({ length: 120 }, (_, i) => (
          <div className={s.loader__rect} key={i} data-loader-box />
        ))}
      </div>
      <div className={s.loader__text}>
        <span data-loader-letter>H</span>
        <span data-loader-letter>e</span>
        <span data-loader-letter>y</span>
      </div>
    </section>
  );
}
