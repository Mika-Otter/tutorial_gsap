import { useRef } from "react";
import s from "./Loader.module.scss";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Loader() {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ paused: true });

    tl.from(textRef.current, {
      delay: 0.5,
      duration: 0.9,
      y: "100%",
      ease: "power4.inOut",
    })
      .to(textRef.current, {
        duration: 0.7,
        y: "-100%",
        ease: "power4.in",
      })
      .to(sectionRef.current, {
        y: "-100%",
        duration: 1,
      });

    tl.play();
  });
  return (
    <main className={s.loader} ref={sectionRef}>
      <div className={s.loader__text}>
        <span ref={textRef}>Infinite Banner</span>
      </div>
    </main>
  );
}
