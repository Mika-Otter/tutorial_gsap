import { useEffect, useRef } from "react";

import gsap from "gsap";
import s from "./Gallery.module.scss";
import { useGSAP } from "@gsap/react";

export default function GalleryColumn({ speedFactor, images, direction }) {
  const colRef = useRef(null);
  const col2Ref = useRef(null);
  const col3Ref = useRef(null);
  let currentY = 0;
  let targetY = 0;
  let ease = 0.07;

  useEffect(() => {
    requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      console.log(e.deltaY);
      targetY += e.deltaY * direction * speedFactor;
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  const animation = () => {
    // Appliquer le lerp
    currentY += (targetY - currentY) * ease;

    if (
      currentY <=
      -colRef.current.offsetHeight - col2Ref.current.offsetHeight
    ) {
      currentY = 0;
      targetY = 0;
    }
    if (currentY > 0) {
      currentY = -colRef.current.offsetHeight;
      targetY = -colRef.current.offsetHeight;
    }

    gsap.set(colRef.current, { y: currentY });
    gsap.set(col2Ref.current, { y: currentY });
    gsap.set(col3Ref.current, { y: currentY });

    requestAnimationFrame(animation);
  };
  const renderColumn = (ref) => (
    <div className={s.gallery__col} data-gallery-col ref={ref}>
      {images.map((imageSrc, index) => (
        <div key={index} className={`${s.gallery__img}`} data-gallery-image>
          <img src={imageSrc} alt={`Gallery image ${index + 1}`} />
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
