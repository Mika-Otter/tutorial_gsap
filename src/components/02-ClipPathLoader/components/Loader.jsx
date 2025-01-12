import React from "react";
import s from "./Loader.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Loader({ setIsLoader, timeline }) {
  useGSAP(() => {
    timeline
      .from("[data-loader-imgctn]", {
        // delay: 2,
        delay: 0.3,
        opacity: 0,
        duration: 1,
      })
      .to(
        "[data-loader-img]",
        {
          clipPath: "inset(0 0 100% 0)",
          delay: 0.7,
          duration: 0.7,
          stagger: {
            amount: 1.3,
            from: "start",
          },
          onComplete: () => setIsLoader(false),
        },
        "<"
      )
      .addLabel("loaderComplete");

    timeline.play();
  }, []);
  return (
    <>
      <section className={s.loader}>
        <div className={s.loader__ctn} data-loader-imgctn>
          {Array.from({ length: 7 }, (_, i) => (
            <img
              key={i}
              src={`/images/clippath/clippath-${i + 1}.webp`}
              className={s.loader__ctn__img}
              style={{ zIndex: 7 - i }}
              alt={`Architecture ${i + 1}`}
              data-loader-img
            />
          ))}
        </div>
      </section>
    </>
  );
}
