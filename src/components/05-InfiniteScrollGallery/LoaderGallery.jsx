import s from "./LoaderGallery.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function LoaderGallery() {
  const logoRef = useRef(null);
  const loaderRef = useRef(null);
  useGSAP(
    () => {
      const textSplit = new SplitText(logoRef.current, { type: "chars" });

      const tl = gsap.timeline({
        paused: true,
      });

      tl.from(textSplit.chars, {
        delay: 1,
        duration: 0.05,
        opacity: 0,
        stagger: { each: 0.2 },
      })
        .to(loaderRef.current, {
          yPercent: -100,
          duration: 0.5,
          delay: 0.5,
          ease: "power2.inOut",
        })
        .set(loaderRef.current, { display: "none" });

      tl.play();
    },
    [],
    { scope: loaderRef }
  );

  return (
    <section className={s.loader} ref={loaderRef}>
      <span className={s.loader__logo} ref={logoRef}>
        Studio CR
      </span>
    </section>
  );
}
