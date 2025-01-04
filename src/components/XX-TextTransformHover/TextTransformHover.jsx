import React from "react";
import s from "./TextTransformHover.module.scss";

export default function TextTransformHover() {
  const text = "MAKE FUN";

  return (
    <main className={s.textTransform}>
      <div className={s.textTransform__content}>
        {text.split("").map((char, index) => (
          <span
            key={index}
            className={s.textTransform__letter}
            data-letter={char}
          >
            <span>{char}</span>
          </span>
        ))}
      </div>
    </main>
  );
}
