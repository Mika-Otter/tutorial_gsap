import { useEffect, useRef } from "react";
import s from "./ScaleGallery.module.scss";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, SplitText);

const imgURL = [
  [
    "/images/scaleGallery/scaleGallery-4.jpg",
    "Elias Verdoux Studio",
    "Milan Fashion Gala 2022",
  ],
  [
    "/images/scaleGallery/scaleGallery-6.jpg",
    "Atelier Noire",
    "London Avant-Garde 2021",
  ],
  [
    "/images/scaleGallery/scaleGallery-5.jpg",
    "Lucien Carter",
    "Berlin Fashion Chronicles 2020",
  ],
  [
    "/images/scaleGallery/scaleGallery-2.jpg",
    "Maison Althaus",
    "Tokyo Midnight Runway 2019",
  ],
  [
    "/images/scaleGallery/scaleGallery-9.jpg",
    "Nova Sinclair",
    "Seoul Couture Week 2023",
  ],
  [
    "/images/scaleGallery/scaleGallery-7.jpg",
    "Opal & Co.",
    "Los Angeles Sunset Walk 2021",
  ],
  [
    "/images/scaleGallery/scaleGallery-3.jpg",
    "Vermeer Collective",
    "Copenhagen Minimalist Show 2022",
  ],
];

export default function ScaleGallery() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const titleRef = useRef(null);
  const containerRef = useRef(null);
  const firstSectionRef = useRef(null);
  const firstImageRef = useRef(null);

  useEffect(() => {
    imgURL.forEach(([src]) => {
      const link = document.createElement("link");
      link.rel = "preload";
      link.href = src;
      link.as = "image";
      document.head.appendChild(link);
    });
  }, []);
  useGSAP(
    () => {
      const tlStart = gsap.timeline({ paused: true });

      const splitTitle = new SplitText(titleRef.current, {
        type: "chars",
      });

      const splitText = new SplitText(textRef.current, {
        type: "lines",
      });
      tlStart
        .from("[data-gallery-nav]", {
          scaleY: 0,
          delay: 1,
          duration: 1.5,
        })
        .from(
          "[data-nav-item]",
          {
            scaleX: 0,
            stagger: 0.2,
          },
          ">"
        )
        .from(
          splitTitle.chars,
          {
            scaleX: 0,
            stagger: 0.05,
          },
          "<"
        )
        .from(
          splitText.lines,
          {
            scaleY: 0,
            stagger: 0.1,
          },
          "<"
        )
        .from(firstSectionRef.current, {
          scaleY: 0,
          duration: 0.8,
        })
        .from(
          firstImageRef.current,
          {
            clipPath: "inset(100% 0 100% 0)",
            duration: 0.8,
          },
          "<"
        )
        .from("[data-gallery-text]", {
          scaleY: 0,
          stagger: 0.2,
        });
      tlStart.play();

      const section = sectionRef.current;
      const container = containerRef.current;

      const totalWidth = container.offsetWidth - window.innerWidth;

      let scrollTween = gsap.to(container, {
        x: -totalWidth,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          pin: true,
          scrub: 1,
          end: () => `+=${totalWidth}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (self.progress < 0.5) {
              gsap.to([textRef.current, titleRef.current], {
                scale: 1 - self.progress,
                xPercent: -50 * self.progress,
                yPercent: -50 * self.progress,
              });
            }
          },
        },
      });

      const images = container.querySelectorAll("[data-gallery-img]");

      images.forEach((img, i) => {
        gsap.to(img, {
          scale: 0.6,
          ease: "slow(0.2, 0.7, false)",
          scrollTrigger: {
            trigger: img,
            containerAnimation: scrollTween,
            start: "left 100%",
            end: "+=150%",
            scrub: true,
          },
        });
      });
    },
    [],
    { scope: sectionRef }
  );
  return (
    <>
      <main className={s.scaleGallery} ref={sectionRef}>
        <nav className={s.nav} data-gallery-nav>
          <div className={s.nav__ctn}>
            <span data-nav-item>CONTACT</span>
            <span data-nav-item>ABOUT</span>
            <span data-nav-item>PROJECTS</span>
            <span className={s.nav__item} data-nav-item>
              +
            </span>
          </div>
        </nav>
        <h1 className={s.title} ref={titleRef}>
          Scale Gallery
        </h1>
        <section className={s.gallery} ref={containerRef}>
          <div className={s.gallery__firstSection} ref={firstSectionRef}>
            <div className={s.gallery__firstSection__ctn}>
              <p className={s.gallery__firstSection__ctn__text} ref={textRef}>
                Collection of differents scales. <br />
                Transform : scale you can use it. <br />
                For easy and beautiful animations. <br />
                Just explore.
              </p>

              <div className={s.gallery__firstSection__ctn__bottom}>
                <span
                  className={s.gallery__firstSection__ctn__bottom__firstline}
                >
                  BASICS
                </span>
                <span
                  className={s.gallery__firstSection__ctn__bottom__secondline}
                >
                  No. 005
                </span>
              </div>
            </div>
          </div>
          <div className={s.gallery__gallerySection}>
            {imgURL.map((img, i) => (
              <div key={i} className={s.gallery__gallerySection__imgContainer}>
                <img
                  src={img[0]}
                  alt={img[1]}
                  className={s.gallery__gallerySection__img}
                  data-gallery-img
                  loading="eager"
                  ref={i === 0 ? firstImageRef : null}
                />
                <div
                  className={s.gallery__gallerySection__text}
                  data-gallery-text
                >
                  <span>{img[1]}</span>
                  <span className={s.gallery__gallerySection__text__subtitle}>
                    {img[2]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
