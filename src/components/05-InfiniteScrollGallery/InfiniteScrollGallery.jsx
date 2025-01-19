import s from "./InfiniteScrollGallery.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function InfiniteScrollGallery() {
  const bannerRef = useRef(null);
  const textRef = useRef(null);

  useGSAP(
    () => {
      const textWidth = textRef.current.offsetWidth;

      const tl = gsap.timeline({
        repeat: -1,
        defaults: {
          ease: "none",
        },
      });

      tl.to(textRef.current, {
        x: -textWidth,
        duration: 300,
      });
    },
    [],
    { scope: bannerRef }
  );

  return (
    <main className={s.scrollGallery}>
      <nav className={s.scrollGallery__nav}>
        <span className={s.scrollGallery__nav__logo}>Studio CR</span>
        <div className={s.scrollGallery__nav__infiniteBan} ref={bannerRef}>
          <div
            className={s.scrollGallery__nav__infiniteBan__wrapper}
            ref={textRef}
          >
            <p className={s.scrollGallery__nav__infiniteBan__text}>
              STRAIGHT FROM THE UNDERGROUND // VISUAL STORYTELLERS // BREAKING
              BOUNDARIES // FRAME BY FRAME EXCELLENCE // RHYTHM AND VISUALS
              COLLIDE // CINEMATIC HUSTLERS // STREET MEETS SCREEN // PUSHING
              PIXELS & BREAKING RULES // RAP GAME VISUALIZERS // ART DIRECTION
              ON STEROIDS // NO LIMITS NO SCRIPTS // REALITY BUILDERS // DIGITAL
              CRAFTSMEN // VISION ARCHITECTS // BEAT BREAKERS VISUAL MAKERS //
              RAW TALENT RAW FOOTAGE // STREET STORIES AMPLIFIED // FRAME
              RAIDERS // VISUAL POETRY IN MOTION // CERTIFIED SHOT CALLERS //
              LENS LIFE LEGACY // CREATIVE CHAOS CURATORS // PIXEL PERFECT
              PROBLEMS // DIGITAL DREAM TEAM // VISION VANDALS // FRAME FANATICS
              // LENS LUNATICS
            </p>
            <p className={s.scrollGallery__nav__infiniteBan__text}>
              STRAIGHT FROM THE UNDERGROUND // VISUAL STORYTELLERS // BREAKING
              BOUNDARIES // FRAME BY FRAME EXCELLENCE // RHYTHM AND VISUALS
              COLLIDE // CINEMATIC HUSTLERS // STREET MEETS SCREEN // PUSHING
              PIXELS & BREAKING RULES // RAP GAME VISUALIZERS // ART DIRECTION
              ON STEROIDS // NO LIMITS NO SCRIPTS // REALITY BUILDERS // DIGITAL
              CRAFTSMEN // VISION ARCHITECTS // BEAT BREAKERS VISUAL MAKERS //
              RAW TALENT RAW FOOTAGE // STREET STORIES AMPLIFIED // FRAME
              RAIDERS // VISUAL POETRY IN MOTION // CERTIFIED SHOT CALLERS //
              LENS LIFE LEGACY // CREATIVE CHAOS CURATORS // PIXEL PERFECT
              PROBLEMS // DIGITAL DREAM TEAM // VISION VANDALS // FRAME FANATICS
              // LENS LUNATICS
            </p>
          </div>
        </div>
        <span className={s.scrollGallery__nav__contact}>Contact</span>
      </nav>
      <div className={s.scrollGallery__menu}>
        <span>+</span> Menu
      </div>
    </main>
  );
}
