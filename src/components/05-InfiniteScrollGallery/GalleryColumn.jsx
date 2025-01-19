import { useEffect, useRef } from "react";

import gsap from "gsap";
import s from "./Gallery.module.scss";
import { useGSAP } from "@gsap/react";
import { ImageContainer, images } from "./images";

export default function GalleryColumn({ speedFactor, images, direction }) {
  const colRef = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  let currentY = 0;
  let targetY = 0;
  let ease = 0.07;
  let transform = 0;

  let slides = colRef.current.querySelectorAll("[data-gallery-image]");
  let slidesArray = [...slides];
  let slideHeight = slidesArray[0].getBoundingClientRect().height;

  const cloneElements = (elements, pushArray) => {
    for (let i = 0; i < elements.length; i++) {
      let clone = elements[i].cloneNode(true);
      elements[i].parentNode.appendChild(clone);
      pushArray.push(clone);
    }
  };

  const positionElements = (elements, position) => {
    elements.forEach((element, index) => {
      let percent = (index - elements.length / 2) * 100;
      element.style[`${position}`] = `${percent}%)`;
    });
  };

  let imageContainers = [];
  useEffect(() => {
    cloneElements(slidesArray, slidesArray);
    positionElements(slidesArray, "top");

    for (let i = 0; i < slidesArray.length; i++) {
      let imageContainer = new Image();
    }
  }, []);

  useEffect(() => {
    requestAnimationFrame(animation);

    window.addEventListener("resize", () => {
      slideHeight = slidesArray[0].getBoundingClientRect().height;
    });
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      //   console.log(e.deltaY);
      //   targetY += e.deltaY * direction * speedFactor;
      transform -= e.deltaY;
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const animationTransform = () => {
    if (transform > slideWidth * (slidesArray.length / 4))
      transform = -(slideWidth * (slidesArray.length / 4));
    if (transform < -(slideWidth * (slidesArray.length / 4)))
      transform = slideWidth * (slidesArray.length / 4);

    for (let i = 0; i < slidesArray.length; i++) {
      slidesArray[i].style.transform = `translateY(${
        (transform / (window.innerHeight * 0.6)) * 100
      }%)`;
    }
  };

  const renderColumn = (ref) => (
    <div className={s.gallery__col} data-gallery-col ref={ref}>
      {images.map((image, index) => (
        <div key={index} className={s.gallery__img} data-gallery-image>
          <img src={image.src} alt={image.title} />
          <div className={s.gallery__info}>
            <div className={s.gallery__info__details}>
              <h3 className={s.gallery__info__title}>{image.title}</h3>
              <span className={s.gallery__info__category}>
                {image.category}
              </span>
            </div>
            <span className={s.gallery__info__view}>VIEW</span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className={s.gallery__colCtn}>
      {renderColumn(colRef)}
      {renderColumn(col2Ref)}
      {renderColumn(col3Ref)}
    </div>
  );
}

//   const animation = () => {
//     currentY += (targetY - currentY) * ease;

//     if (
//       currentY <=
//       -colRef.current.offsetHeight - col2Ref.current.offsetHeight
//     ) {
//       currentY = 0;
//       targetY = 0;
//     }
//     if (currentY > 0) {
//       currentY = -colRef.current.offsetHeight;
//       targetY = -colRef.current.offsetHeight;
//     }

//     gsap.set(colRef.current, { y: currentY });
//     gsap.set(col2Ref.current, { y: currentY });
//     gsap.set(col3Ref.current, { y: currentY });

//     requestAnimationFrame(animation);
//   };
