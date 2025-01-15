import { useRef } from "react";
import s from "./ThankYou.module.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ThankYou() {
  const sectionRef = useRef(null);

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

    const rects = document.querySelectorAll("[data-thanks-rect]");
    tl.to(rects, {
      duration: 0.5,
      opacity: 0,
      stagger: {
        amount: 0.5,
        grid: "auto",
        from: "center",
      },
    });
  });

  return (
    <section className={s.thankyou} ref={sectionRef}>
      <div className={s.thankyou__box}>
        {Array.from({ length: 120 }).map((_, i) => (
          <div key={i} className={s.thankyou__rect} data-thanks-rect />
        ))}
      </div>
      <span className={s.thankyou__just}>Just</span>
      <span className={s.thankyou__thanks}>Thank you</span>
    </section>
  );
}
