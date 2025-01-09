import { useRef } from "react";
import s from "./Home.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Home({ timeline }) {
  const titleRef = useRef(null);

  useGSAP(() => {
    const items = document.querySelectorAll("[data-home-item]");
    timeline.current
      .from(
        titleRef.current,
        {
          duration: 1,
          y: 30,
          opacity: 0,
          ease: "power2.inOut",
        },
        "loaderComplete"
      )
      .from(items, {
        duration: 0.5,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <main className={s.home}>
      <video
        className={s.video}
        src="/videos/TreeLakelow.webm"
        autoPlay
        muted
        loop
      />
      <nav className={s.home__nav}>
        <span data-home-item>Services</span>
        <span data-home-item>About</span>
        <span data-home-item>Contact</span>
      </nav>
      <h1 className={s.home__title} ref={titleRef}>
        Take to <br />
        the skies
      </h1>
      <div className={s.home__bottom}>
        <span className={s.home__bottom__span} data-home-item>
          Discover new horizons
        </span>
        <span className={s.home__bottom__span} data-home-item>
          Scroll to explore
        </span>
      </div>
    </main>
  );
}
