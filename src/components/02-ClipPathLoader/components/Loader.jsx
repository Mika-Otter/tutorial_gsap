import React from "react";
import s from "./Loader.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Loader({ setIsLoader, timeline }) {
  useGSAP(() => {
    timeline
      .to("[data-loader-img]", {
        delay: 0.5,
        opacity: 1,
        duration: 0,
      })
      .to("[data-loader-img]", {
        clipPath: "inset(0 0 100% 0)",
        delay: 1,
        duration: 1,
        stagger: {
          amount: 3,
          from: "end",
        },
      })
      .addLabel("loaderComplete")
      .then(() => setIsLoader(false));

    timeline.play();
  }, []);
  return (
    <>
      <section className={s.loader}>
        <div className={s.loader__ctn}>
          {Array.from({ length: 10 }, (_, i) => (
            <img
              key={i}
              src={`/images/architecture-${i + 1}.webp`}
              className={s.loader__ctn__img}
              alt={`Architecture ${i + 1}`}
              data-loader-img
            />
          ))}
        </div>
      </section>
    </>
  );
}
