import { useRef, useState } from "react";
import s from "./NotchLoader.module.scss";
import { useGSAP } from "@gsap/react";

export default function NotchLoader({ setIsLoader, timeline }) {
  const [progress, setProgress] = useState("000");
  const notchVerticalRef = useRef(null);
  const notchHorizontalRef = useRef(null);
  const progressSpanRef = useRef(null);
  const progressRef = useRef({ value: 0 });
  const formatNumber = (num) => num.toString().padStart(3, "0");

  useGSAP(() => {
    timeline.current
      .to(notchHorizontalRef.current, {
        gap: `4vh`,
        duration: 1,
        ease: "power2.out",
      })
      .to(notchVerticalRef.current, {
        gap: `100vw`,
        duration: 3,
        ease: "power2.out",
      })
      .to(
        progressRef.current,
        {
          value: 100,
          duration: 3,
          ease: "power2.out",
          onUpdate: () => {
            setProgress(formatNumber(Math.round(progressRef.current.value)));
          },
        },
        "<"
      )
      .addLabel("loaderComplete")
      .to(
        notchHorizontalRef.current,
        {
          gap: "100vh",
          duration: 1,
          ease: "power2.out",
        },
        ">"
      )
      .to(
        progressSpanRef.current,
        {
          y: "100%",
          duration: 1,
          ease: "power2.out",
        },
        "<"
      )
      .call(() => setIsLoader(false));

    timeline.current.play();
  }, []);

  return (
    <>
      <div className={s.notchLoader}>
        <div className={s.notchLoader__vertical} ref={notchVerticalRef}>
          <div className={s.notchLoader__vertical__band}></div>
          <div className={s.notchLoader__vertical__band}></div>
        </div>
        <div className={s.notchLoader__horizontal} ref={notchHorizontalRef}>
          <div className={s.notchLoader__horizontal__band}></div>
          <div className={s.notchLoader__horizontal__band}></div>
        </div>
        <div className={s.notchLoader__progress}>
          <span ref={progressSpanRef}>{progress}</span>
        </div>
      </div>
    </>
  );
}
