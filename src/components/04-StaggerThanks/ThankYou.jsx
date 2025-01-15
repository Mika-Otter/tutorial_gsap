import { useRef } from "react";
import s from "./ThankYou.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function ThankYou() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "90% bottom",
      onEnter: () => {
        tl.play();
      },
    });

    const tl = gsap.timeline({
      paused: true,
    });

    const splitText = new SplitText(textRef.current, {
      type: "chars",
      charsClass: "split-char",
    });

    const hearts = document.querySelectorAll("[data-thanks-heart]");
    const rects = document.querySelectorAll("[data-thanks-rect]");
    tl.to(rects, {
      duration: 0.05,
      opacity: 0,
      stagger: {
        amount: 2,
        grid: "auto",
        from: "center",
      },
    })
      .from(splitText.chars, {
        yPercent: 100,
        duration: 0.3,
        stagger: {
          amount: 0.7,
          from: "start",
        },
      })
      .from(
        hearts,
        {
          opacity: 0,
          duration: 0.05,
          stagger: {
            amount: 2.5,
            from: "random",
          },
        },
        ">"
      );
  });

  return (
    <section className={s.thankyou} ref={sectionRef}>
      <div className={s.thankyou__box}>
        {Array.from({ length: 240 }).map((_, i) => (
          <div key={i} className={s.thankyou__rect} data-thanks-rect />
        ))}
      </div>
      <div className={s.thankyou__hearts}>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart1}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart1" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart2}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart2" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart3}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart3" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart4}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart4" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart5}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart5" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart6}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart6" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart7}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart7" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart8}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart8" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart9}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart9" />
        </div>
        <div
          className={`${s.thankyou__hearts__heart} ${s.heart10}`}
          data-thanks-heart
        >
          <img src="/images/staggerThanks/heart.png" alt="heart10" />
        </div>
      </div>
      <span className={s.thankyou__just}>Just</span>
      <span className={s.thankyou__thanks} ref={textRef}>
        Thank you
      </span>
    </section>
  );
}
